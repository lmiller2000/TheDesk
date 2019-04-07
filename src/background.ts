'use strict'

import path from 'path'
import pick from 'lodash/pick'
import {
  app,
  protocol,
  shell,
  BrowserWindow,
  Menu
} from 'electron'
import ContextMenu from 'electron-context-menu'
import {
  createProtocol,
  installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'
import localShortcut from 'electron-localshortcut'

import { bugs, homepage } from '../package.json'
import thedeskInfo from '../info.json'

global.TheDeskInfo = JSON.stringify(Object.assign({
  productName: app.getName(),
  homePage: homepage,
  versions: Object.assign(pick(process.versions, ["chrome","electron","node"]), {internal: app.getVersion()}),
}, thedeskInfo))

const isDevelopment = process.env.NODE_ENV !== 'production'

// イベントリスナや`createWindow`関数が参照するグローバル変数
let createdAppProtocol = false
  , windows = {}

ContextMenu()

// Standard schemeはreadyの前に登録する必要がある
protocol.registerStandardSchemes(['app'], { secure: true })

// Windowを作る
async function createWindow(windowName, loadPath, windowOptions, singleton, lastAction, openDevTools) {
  if (typeof windows[windowName] !== 'undefined') {
    windows[windowName].show()
    return
  }

  // 引数のバリデーション
  if (typeof windowOptions !== 'object') windowOptions = {}
  if (typeof lastAction !== 'function') lastAction = () => {}

  let win = new BrowserWindow(windowOptions)

  // ページの表示が完了するまで非表示にする
  win.hide()
  win.webContents.on('did-finish-load', () => {
    windows[windowName].show()
  })

  win.on('closed', () => {
    windows[windowName] = undefined
  })

  let openUrl = (event, url) => {
    if (url === process.env.WEBPACK_DEV_SERVER_URL + loadPath) {
      return
    }
    event.preventDefault()
    shell.openExternal(url, {
      activate: false
    }, (err) => {
      if (err) console.log(err)
    })
  }
  win.webContents.on('will-navigate', openUrl)
  win.webContents.on('new-window', openUrl)

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // `electron:serve`で起動した時の読み込み
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL + loadPath)
  } else {
    // ビルドしたアプリでの読み込み
    if (!createdAppProtocol) {
      createProtocol('app')
      createdAppProtocol = true
    }
    win.loadURL(`app://./${loadPath}`)
  }

  if (isDevelopment && openDevTools) win.webContents.openDevTools()

  lastAction(win)

  windows[windowName] = win
}

function openMainWindow() {
  const winOpts = {
    icon: path.join(__static, 'icon.png'),
    width: 800,
    height: 600,
    autoHideMenuBar: true,
  }
  createWindow('main', 'index.html', winOpts, true, (win) => {
    localShortcut.register(win, 'F5', () => windows.main.reload())
  }, !process.env.IS_TEST)
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (typeof windows.main === 'undefined') {
    openMainWindow()
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installVueDevtools()
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  openMainWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}

const template = [
  {
    label: app.getName(),
    submenu: [
      {
        label: process.platform !== 'darwin' ? 'About' : `About ${app.getName()}`,
        click: () => {
          const winOpts = {
            width: 296,
            height: 432,
            resizable: false,
            minimizable: false,
            maximizable: false,
            fullscreenable: false,
            autoHideMenuBar: true,
            titleBarStyle: 'hiddenInset',
          }
          createWindow('about', 'about.html', winOpts, true, (win) => {
            win.setMenuBarVisibility(false)
            win.webContents.on('before-input-event', (event, input) => {
              if (typeof windows.about !== 'undefined')
                windows.about.webContents.setIgnoreMenuShortcuts(input.key !== "Escape")
            })
            localShortcut.register(win, 'Esc', () => windows.about.destroy())
          })
        }
      },
    ]
  },
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'pasteandmatchstyle' },
      { role: 'delete' },
      { role: 'selectall' },
    ]
  },
  {
    label: 'View',
    submenu: [
      { role: 'reload' },
      { role: 'forcereload' },
      { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'togglefullscreen' },
    ]
  },
  {
    role: 'Window',
    submenu: [
      { role: 'minimize' },
      { role: 'close' },
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Report an issue',
        click: () => shell.openExternal(`${bugs.url}/new`),
      },
      {
        label: 'Learn More',
        click: () => shell.openExternal(thedeskInfo.documentURL),
      }
    ]
  }
]

if (process.platform === 'darwin') {
  template[0].submenu.push(
    { type: 'separator' },
    { role: 'services' },
    { type: 'separator' },
    { role: 'hide' },
    { role: 'hideothers' },
    { role: 'unhide' },
    { type: 'separator' },
    { role: 'quit' },
  )

  template[1].submenu.push(
    { type: 'separator' },
    {
      label: 'Speech',
      submenu: [
        { role: 'startspeaking' },
        { role: 'stopspeaking' },
      ]
    }
  )

  template[3].submenu = [
    { role: 'close' },
    { role: 'minimize' },
    { role: 'zoom' },
    { type: 'separator' },
    { role: 'front' },
  ]
}

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)