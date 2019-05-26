var yesno = [
    {
        text: "はい",
        value: "yes"
    }, {
        text: "いいえ",
        value: "no"
    }
];
var sound = [
    {
        text: "なし",
        value: "none"
    }, {
        text: "既定",
        value: "default"
    }, {
        text: "Custom 1",
        value: "c1"
    }, {
        text: "Custom 2",
        value: "c2"
    }, {
        text: "Custom 3",
        value: "c3"
    }, {
        text: "Custom 4",
        value: "c4"
    }
];
var envConstruction = [
    {
        id: "popup",
        storage: "popup",
        checkbox: false,
        doubleText: false,
        setValue: 0,
        width: 50,
        text: {
            head: "新規通知のポップアップお知らせの表示秒数",
            desc: '0に設定すると表示されません',
            after: "秒"
        }
    }, {
        id: "notf",
        storage: "nativenotf",
        checkbox: true,
        setValue: "yes",
        text: {
            head: "ネイティブ通知設定",
            desc: "Portableバージョンでは表示できません。",
            checkbox: yesno
        }
    }, {
        id: "width",
        storage: "width",
        checkbox: false,
        doubleText: false,
        width: 50,
        setValue: 300,
        text: {
            head: "マルチカラムの最低横幅",
            desc: "画面全体の横幅÷コラム数がこの値を超えた時、横スクロールとなります。",
            after: "px 以上"
        }
    }, {
        id: "fixwidth",
        storage: "fixwidth",
        checkbox: false,
        doubleText: false,
        setValue: 300,
        width: 50,
        text: {
            head: "TweetDeckの限定の最低横幅",
            desc: "",
            after: "px 以上"
        }
    }, {
        id: "size",
        storage: "size",
        checkbox: false,
        doubleText: false,
        width: 50,
        setValue: 13,
        text: {
            head: "フォントサイズ",
            desc: '<span style="font-size:13px">13px(絶対指定)</span>',
            after: "px"
        }
    }, {
        id: "ha",
        storage: "ha",
        checkbox: true,
        setValue: false,
        text: {
            head: "ハードウェアアクセラレーションの無効化",
            desc: "表示(特に設定画面)が乱れる場合に「はい」を選択してください。自動で再起動します。",
            checkbox: [
                {
                    text: "はい",
                    value: "true"
                }, {
                    text: "いいえ",
                    value: "false"
                }
            ]
        }
    }
];
var tlConstruction = [
    {
        id: "time",
        storage: "datetype",
        checkbox: true,
        setValue: "absolute",
        text: {
            head: "時間表記設定",
            desc: '相対時間の例:"1分前","3日前"<br>絶対時間の例"23:25:21","2017年12月30日 23:59:00"<br>混合表示は、当日のトゥートのみ相対、それ以外は絶対で表示 ',
            checkbox: [
                {
                    text: "相対時間",
                    value: "relative"
                }, {
                    text: "絶対時間",
                    value: "absolute"
                }, {
                    text: "両方表示",
                    value: "double"
                }, {
                    text: "混合表示",
                    value: "medium"
                }

            ]
        }
    }, {
        id: "ul",
        storage: "locale",
        checkbox: true,
        setValue: "yes",
        text: {
            head: "独自ロケールを使用",
            desc: "対応サーバーではそのサーバーにあわせた言語表示ができます。",
            checkbox: yesno
        }
    }, {
        id: "nsfw",
        storage: "nsfw",
        checkbox: true,
        setValue: "yes",
        text: {
            head: "非表示設定の画像(NSFW)を隠す",
            desc: "きつめのぼかしがかかります。",
            checkbox: yesno
        }
    }, {
        id: "cw",
        storage: "cw",
        checkbox: true,
        setValue: "yes",
        text: {
            head: "非表示設定のテキスト(CW)を隠す",
            desc: "",
            checkbox: yesno
        }
    }, {
        id: "rp",
        storage: "replyct",
        checkbox: true,
        setValue: "hidden",
        text: {
            head: "リプライ数表示",
            desc: "",
            checkbox: [
                {
                    text: "2以上のとき1+と表示",
                    value: "hidden"
                }, {
                    text: "2以上のとき1+と表示",
                    value: "all"
                }

            ]
        }
    }, {
        id: "gif",
        storage: "gif",
        checkbox: true,
        setValue: "yes",
        text: {
            head: "アイコンのアニメーションを再生する",
            desc: "",
            checkbox: yesno
        }
    }, {
        id: "tag",
        storage: "tag-range",
        checkbox: true,
        setValue: "local",
        text: {
            head: "タグタイムラインの表示範囲",
            desc: "",
            checkbox: [
                {
                    text: "接続しているサーバー",
                    value: "all"
                }, {
                    text: "検索対象のサーバーのみ",
                    value: "local"
                }

            ]
        }
    }, {
        id: "via",
        storage: "viashow",
        checkbox: true,
        setValue: "no",
        text: {
            head: "viaを表示する",
            desc: "",
            checkbox: yesno
        }
    }, {
        id: "mov",
        storage: "mouseover",
        checkbox: true,
        setValue: "no",
        text: {
            head: "アクションメニューを非表示",
            desc: "「マウスオーバー」はすこし鬱陶しいと思うかもしれません。",
            checkbox: [
                {
                    text: "マウスオーバーで表示",
                    value: "yes"
                }, {
                    text: "クリックで表示",
                    value: "click"
                }, {
                    text: "いいえ",
                    value: "no"
                }

            ]
        }
    }, {
        id: "notfm",
        storage: "setasread",
        checkbox: true,
        setValue: "yes",
        text: {
            head: "通知を開いているとき、通知新着お知らせを表示する",
            desc: "",
            checkbox: yesno
        }
    }, {
        checkbox: false,
        doubleText: true,
        data: [
            {
                id: "sentence",
                storage: "sentence",
                width: 50,
                setValue: 500,
                text: { after: "行 以上 または" }
            }, {
                id: "letters",
                storage: "letters",
                width: 50,
                setValue: 7000,
                text: { after: "文字 以上" }
            }
        ],
        text: {
            head: "指定行数以上を折りたたむ",
            desc: "5文字以下のトゥートは折りたたみません。また、折りたたみ時は改行が描画されません。改行のみを行数とカウントします。",
        }
    }, {
        id: "img-height",
        storage: "img-height",
        checkbox: false,
        doubleText: false,
        width: 80,
        setValue: 200,
        text: {
            head: "画像の高さ",
            desc: 'オプション:「full」と指定すると全ての画像をクロップしません。',
            after: "px"
        }
    }, {
        id: "ticker",
        storage: "ticker_ok",
        checkbox: true,
        setValue: "no",
        text: {
            head: "#InstanceTickerを使う",
            desc: 'トゥートした人の所属サーバーをわかりやすく彩ります(自サーバー以外のトゥート向け)。<a href="https://cdn.weep.me/mastodon/">#InstanceTickerについて</a> Copyright 2018 weepjp, kyori19.',
            checkbox: yesno
        }
    }, {
        id: "anime",
        storage: "animation",
        checkbox: true,
        setValue: "yes",
        text: {
            head: "タイムラインのアニメーション",
            desc: "",
            checkbox: yesno
        }
    }, {
        id: "replySound",
        storage: "replySound",
        checkbox: true,
        setValue: "none",
        text: {
            head: "リプライの通知音",
            desc: "",
            checkbox: sound
        }
    }, {
        id: "favSound",
        storage: "favSound",
        checkbox: true,
        setValue: "none",
        text: {
            head: "お気に入り登録の通知音",
            desc: "",
            checkbox: sound
        }
    }, {
        id: "btSound",
        storage: "btSound",
        checkbox: true,
        setValue: "none",
        text: {
            head: "ブーストの通知音",
            desc: "",
            checkbox: sound
        }
    }, {
        id: "followSound",
        storage: "followSound",
        checkbox: true,
        setValue: "none",
        text: {
            head: "フォローの通知音",
            desc: "",
            checkbox: sound
        }
    }
];
var postConstruction = [
    {
        id: "cw-text",
        storage: "cw-text",
        checkbox: false,
        doubleText: false,
        width: 150,
        setValue: "",
        text: {
            head: "デフォルトの警告文",
            desc: "",
            after: ""
        }
    }, {
        checkbox: false,
        doubleText: true,
        data: [
            {
                id: "cw_sentence",
                storage: "cw_sentence",
                width: 50,
                setValue: 500,
                text: { after: "行 以上 または" }
            }, {
                id: "cw_letters",
                storage: "cw_letters",
                width: 50,
                setValue: 7000,
                text: { after: "文字 以上" }
            }
        ],
        text: {
            head: "長文投稿時に警告",
            desc: "下で指定した以上のトゥートを投稿するときにCWするかのダイアログを表示します。",
        }
    }, {
        id: "cws",
        storage: "always-cw",
        checkbox: true,
        setValue: "no",
        text: {
            head: "標準でCWを設定",
            desc: "",
            checkbox: yesno
        }
    }, {
        id: "vis",
        storage: "vis",
        checkbox: true,
        setValue: "public",
        text: {
            head: "デフォルトの公開設定",
            desc: "",
            checkbox: [
                {
                    text: "公開(Public)",
                    value: "public"
                }, {
                    text: "未収載(Unlisted)",
                    value: "unlisted"
                }, {
                    text: "非公開(Private)",
                    value: "private"
                }, {
                    text: "ダイレクト(Direct)",
                    value: "direct"
                }, {
                    text: "前回の投稿設定を記憶する(サーバーごとに記憶されます)",
                    value: "memory"
                }, {
                    text: "マストドンアカウント設定の既定値",
                    value: "useapi"
                }
            ]
        }
    }, {
        id: "img",
        storage: "img",
        checkbox: true,
        setValue: "no-act",
        text: {
            head: "画像投稿設定",
            desc: "",
            checkbox: [
                {
                    text: "画像を投稿し、画像のURLを最後に表示",
                    value: "url"
                }, {
                    text: "画像を投稿するがURLは表示しない",
                    value: "no-act"
                }
            ]
        }
    }, {
        id: "box",
        storage: "box",
        checkbox: true,
        setValue: "yes",
        text: {
            head: "投稿ボックスの挙動",
            desc: "",
            checkbox: [
                {
                    text: "たたむ",
                    value: "yes"
                }, {
                    text: "投稿後も隠さない",
                    value: "no"
                }, {
                    text: "枠外クリックで閉じない(起動時に展開)",
                    value: "absolute"
                }
            ]
        }
    }, {
        id: "quote",
        storage: "quote",
        checkbox: true,
        setValue: "nothing",
        text: {
            head: "引用形式",
            desc: "",
            checkbox: [
                {
                    text: "URLのみ",
                    value: "simple"
                }, {
                    text: "URLとアカウント名(相手に通知)",
                    value: "mention"
                }, {
                    text: "本文・URL・アカウント名",
                    value: "full"
                }, {
                    text: "使わない(TL上にボタンも表示されません)",
                    value: "nothing"
                }
            ]
        }
    }, {
        id: "main",
        storage: "mainuse",
        checkbox: true,
        setValue: "remain",
        text: {
            head: "投稿後や起動時のアカウント",
            desc: "メインアカウントはアカウント設定で指定できます。投稿以外のアカウント選択にも影響します。",
            checkbox: [
                {
                    text: "最後に使用したアカウント",
                    value: "remain"
                }, {
                    text: "メインアカウント",
                    value: "main"
                }
            ]
        }
    }, {
        id: "sec",
        storage: "sec",
        checkbox: true,
        setValue: "public",
        text: {
            head: "セカンダリートゥートボタン",
            desc: "",
            checkbox: [
                {
                    text: "表示しない",
                    value: "nothing"
                }, {
                    text: "公開(Public)",
                    value: "public"
                }, {
                    text: "未収載(Unlisted)",
                    value: "unlisted"
                }, {
                    text: "非公開(Private)",
                    value: "private"
                }, {
                    text: "ダイレクト(Direct)",
                    value: "direct"
                }, {
                    text: "ローカル限定",
                    value: "local",
                    kirishima: true,
                    kirishimaText: "非対応インスタンスでは「未収載」になります。"
                }
            ]
        }
    }, {
        id: "zero",
        storage: "emoji-zero-width",
        checkbox: true,
        setValue: "normal",
        setValue: "no",
        text: {
            head: "絵文字にゼロ幅スペースを使う",
            desc: "",
            checkbox: yesno
        }
    }
]