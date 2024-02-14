import {lib,get,_status,ui,game,ai} from './noname.js';

export let CONFIG = {
    /*
    "qhly_newui":{
        "name":"新UI",
        "intro":"打开此选项，将使用新版千幻UI。",
        "init":lib.config.qhly_newui === undefined ? true:lib.config.qhly_newui,
        onclick:function(item){
            game.saveConfig('extension_千幻聆音_qhly_newui',item);
            game.saveConfig('qhly_newui',item);
        }
    },*/
    "qhly_uishezhi": {
      "name": "<font size='5' color='blue'>UI设置》</font>",
      "clear": true,
    },
    "qhly_currentViewSkin": {
      "name": "UI套装",
      "intro": "设置UI套装样式。",
      "item": {},
      "init": lib.config.qhly_currentViewSkin === undefined ? 'xuanwujianghu' : lib.config.qhly_currentViewSkin,
      onclick: function (item) {
        if (lib.qhly_viewskin[item] && lib.qhly_viewskin[item].onchange) {
          lib.qhly_viewskin[item].onchange();
        }
        game.saveConfig('qhly_currentViewSkin', item);
        game.saveConfig('extension_千幻聆音_qhly_currentViewSkin', item);
        if (confirm("是否重启游戏以应用新UI？")) {
          game.reload();
        }
      }
    },
    "qhly_layoutFitX": {
      "name": "横向拉伸适应",
      "intro": "打开此选项后，若横向布局未铺满，将拉伸至铺满布局。",
      "init": lib.config.qhly_layoutFitX === undefined ? false : lib.config.qhly_layoutFitX,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_layoutFitX', item);
        game.saveConfig('qhly_layoutFitX', item);
      }
    },
    "qhly_layoutFitY": {
      "name": "纵向拉伸适应",
      "intro": "打开此选项后，若纵向布局未铺满，将拉伸至铺满布局。",
      "init": lib.config.qhly_layoutFitY === undefined ? false : lib.config.qhly_layoutFitY,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_layoutFitY', item);
        game.saveConfig('qhly_layoutFitY', item);
      }
    },
    "qhly_vMiddle": {
      "name": "纵向居中",
      "intro": "打开此选项后，在【水墨龙吟】【海克斯科技】套装中，技能和介绍字数较少时将居中显示。",
      "init": lib.config.qhly_vMiddle === undefined ? true : lib.config.qhly_vMiddle,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_vMiddle', item);
        game.saveConfig('qhly_vMiddle', item);
      }
    },
    "qhly_fontsize1": {
      "name": "正文字号",
      "intro": "打开此选项，可调整字号（仅对新UI生效）。",
      "init": lib.config.qhly_fontsize1 === undefined ? "5" : lib.config.qhly_fontsize1,
      "item": {
        "1": "很微小",
        "2": "微小",
        "3": "较小",
        "4": "小",
        "5": "中",
        "6": "大",
        "7": "较大",
        "8": "巨大",
        "9": "超级大",
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_fontsize1', item);
        game.saveConfig('qhly_fontsize1', item);
      }
    },
    "qhly_gongnengshezhi": {
      "name": "<font size='5' color='blue'>功能设置》</font>",
      "clear": true,
    },
    "qhly_replaceCharacterCard2": {
      "name": "替换默认资料卡",
      "intro": "打开此选项，将使用千幻聆音的资料卡替换无名杀默认的资料卡。",
      "init": lib.config.qhly_replaceCharacterCard2 === undefined ? 'info' : lib.config.qhly_replaceCharacterCard2,
      "item": {
        'nonereplace': '不替换',
        'nonereplace2': "系统资料卡不显示换肤",
        'info': '千幻资料卡',
        'window': '千幻皮肤小窗'
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_replaceCharacterCard2', item);
        game.saveConfig('qhly_replaceCharacterCard2', item);
      }
    },
    "qhly_nolihuiOrigin": {
      "name": "无立绘皮肤显示原皮",
      "intro": "设置此选项，支持立绘的套装中，没有立绘资源的皮肤会显示原皮的立绘。",
      "init": lib.config.qhly_nolihuiOrigin === undefined ? false : lib.config.qhly_nolihuiOrigin,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_nolihuiOrigin', item);
        game.saveConfig('qhly_nolihuiOrigin', item);
      }
    },
    "qhly_smallwiningame": {
      "name": "小窗口换皮肤",
      "intro": "打开此选项，游戏内点击皮肤图标将弹出小窗口。",
      "init": lib.config.qhly_smallwiningame === undefined ? false : lib.config.qhly_smallwiningame,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_smallwiningame', item);
        game.saveConfig('qhly_smallwiningame', item);
      }
    },
    "qhly_smallwindowstyle": {
      "name": "小窗口样式",
      "intro": "可切换小窗口的样式。",
      "init": lib.config.qhly_smallwindowstyle === undefined ? 'decade' : lib.config.qhly_smallwindowstyle,
      "item": {
        'dragon': '龙头',
        'common': '经典',
        'decade': '十周年',
        'shousha': '手杀'
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_smallwindowstyle', item);
        game.saveConfig('qhly_smallwindowstyle', item);
      }
    },
    "qhly_dragonsize": {
      "name": "龙头小窗口大小",
      "intro": "设置小窗口的大小（仅对龙头样式有效）",
      "init": lib.config.qhly_dragonsize === undefined ? '1.00' : lib.config.qhly_dragonsize,
      "item": {
        '0.45': '超级小',
        '0.55': '特小',
        '0.60': '小',
        '0.80': '较小',
        '1.00': '适中',
        '1.20': '较大',
        '1.50': '大',
        '1.65': '特大',
        '1.80': '超级大',
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_dragonsize', item);
        game.saveConfig('qhly_dragonsize', item);
      }
    },
    "qhly_forbidExtPage": {
      "name": "禁用附加页功能",
      "intro": "打开此选项，在千幻资料页将无法通过点击【简介】访问附加页面，也不会有小箭头。",
      "init": lib.config.qhly_forbidExtPage === undefined ? false : lib.config.qhly_forbidExtPage,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_forbidExtPage', item);
        game.saveConfig('qhly_forbidExtPage', item);
      }
    },
    "qhly_dragonlocation": {
      "name": "龙头小窗口位置",
      "intro": "设置小窗口的位置（仅对龙头样式有效）",
      "init": lib.config.qhly_dragonlocation === undefined ? 'center' : lib.config.qhly_dragonlocation,
      "item": {
        'head': '头像上',
        'center': '正中央',
        'drag': '可拖曳',
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_dragonlocation', item);
        game.saveConfig('qhly_dragonlocation', item);
      }
    },
    "qhly_smallwinclosewhenchange": {
      "name": "自动关闭小窗口",
      "intro": "打开此选项，在小窗口内更换皮肤后，小窗口自动关闭。",
      "init": lib.config.qhly_smallwinclosewhenchange === undefined ? false : lib.config.qhly_smallwinclosewhenchange,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_smallwinclosewhenchange', item);
        game.saveConfig('qhly_smallwinclosewhenchange', item);
      }
    },
    "qhly_titlereplace": {
      "name": "武将标题内容",
      "intro": "设置此选项，可调整部分界面武将旁小字的内容。",
      "init": lib.config.qhly_titlereplace === undefined ? "title" : lib.config.qhly_titlereplace,
      "item": {
        "title": "武将标题",
        "skin": "皮肤名",
        "pkg": "武将包名",
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_titlereplace', item);
        game.saveConfig('qhly_titlereplace', item);
      }
    },
    /*
    "qhly_recordWin": {
      "name": "展示战绩",
      "intro": "打开此选项，可以在千幻资料页查看战绩。",
      "init": lib.config.qhly_recordWin === undefined ? false : lib.config.qhly_recordWin,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_recordWin', item);
        game.saveConfig('qhly_recordWin', item);
      }
    },*/
    "qhly_randskin": {
      "name": "随机皮肤",
      "intro": "打开此选项，游戏开始时，会随机更换皮肤。",
      "init": lib.config.qhly_randskin === undefined ? false : lib.config.qhly_randskin,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_randskin', item);
        game.saveConfig('qhly_randskin', item);
      }
    },
    "qhly_extcompat": {
      "name": "扩展兼容",
      "intro": "打开此选项，千幻聆音将在一定程度上兼容大部分带有阵亡配音的扩展。如果不玩扩展武将，关闭此选项可提升性能。",
      "init": lib.config.qhly_extcompat === undefined ? true : lib.config.qhly_extcompat,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_extcompat', item);
        game.saveConfig('qhly_extcompat', item);
      }
    },
    "qhly_lutou": {
      "name": "适配露头",
      "intro": "打开此选项，将外框调整适配露头的情况。",
      "init": lib.config.qhly_lutou === undefined ? false : lib.config.qhly_lutou,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_lutou', item);
        game.saveConfig('qhly_lutou', item);
      }
    },
    /*
    此功能暂且关闭。
    "qhly_audioPlus":{
      "name":"音频功能增强",
      "intro":"打开此选项，将开启一些和音频增强相关的功能。但可能导致和部分修改了playAudio的扩展不兼容。",
      "init":lib.config.qhly_audioPlus === undefined ? false : lib.config.qhly_audioPlus,
      onclick:function(item){
        game.saveConfig('extension_千幻聆音_qhly_audioPlus', item);
        game.saveConfig('qhly_audioPlus', item);
      }
    },*/
    "qhly_lutouType": {
      "name": "露头模式",
      "intro": "仅在适配露头生效时生效。",
      "init": lib.config.qhly_lutouType === undefined ? 'decade' : lib.config.qhly_lutouType,
      item: {
        'decade': '十周年露头',
        'shousha': '手杀露头',
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_lutouType', item);
        game.saveConfig('qhly_lutouType', item);
      }
    },
    "qhly_skinButton": {
      "name": "头像显示换肤按钮",
      "intro": "打开此选项，人物头像上会出现换肤按钮。（重启后生效）",
      "init": lib.config.qhly_skinButton === undefined ? false : lib.config.qhly_skinButton,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_skinButton', item);
        game.saveConfig('qhly_skinButton', item);
      }
    },
    "qhly_showrarity": {
      "name": "显示武将等阶",
      "intro": "打开此选项，资料页内会显示武将等阶。",
      "init": lib.config.qhly_showrarity === undefined ? false : lib.config.qhly_showrarity,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_showrarity', item);
        game.saveConfig('qhly_showrarity', item);
      }
    },
    "qhly_name_pattern":{
      "name": "武将名显示",
      "intro": "设置此选项，可调整界面武将名显示的内容。",
      "init": lib.config.qhly_name_pattern === undefined ? "full" : lib.config.qhly_name_pattern,
      "item": {
        "full":"携带前缀",
        "full_pure":"携带前缀（过滤样式）",
        "raw":"武将姓名",
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_name_pattern', item);
        game.saveConfig('qhly_name_pattern', item);
      }
    },
    'qhly_dragButton': {
      "name": "换肤按钮可拖曳",
      "intro": "打开此选项，人物头像上的换肤按钮可以拖动位置。（重启后生效）",
      "init": lib.config.qhly_dragButton === undefined ? false : lib.config.qhly_dragButton,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_dragButton', item);
        game.saveConfig('qhly_dragButton', item);
      }
    },
    'qhly_dragButtonPosition': {
      "name": "换肤按钮拖曳同步",
      "intro": "如选择同步，拖动一名角色的换肤按钮时，其他角色将联动拖动。（重启后生效）",
      item: {
        'no': "不同步",
        'yes': '同步',
      },
      "init": lib.config.qhly_dragButtonPosition === undefined ? 'yes' : lib.config.qhly_dragButtonPosition,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_dragButtonPosition', item);
        game.saveConfig('qhly_dragButtonPosition', item);
      }
    },
    "qhly_notbb": {
      "name": "防啰嗦功能",
      "intro": "打开此选项后，在固定的时间内，相同的技能不会触发多次语音。",
      item: {
        'none': '关闭',
        '2': '2秒',
        '3': '3秒',
        '4': '4秒',
        '5': '5秒',
        '6': '6秒',
        '7': '7秒',
        '8': '8秒',
        '9': '9秒',
        '10': '10秒',
      },
      "init": lib.config.qhly_notbb === undefined ? 'none' : lib.config.qhly_notbb,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_notbb', item);
        game.saveConfig('qhly_notbb', item);
      }
    },
    "qhly_notbb_range": {
      "name": "防啰嗦范围",
      "intro": "设置防啰嗦的范围。",
      item: {
        'skill': '相同技能',
        'character': '相同角色',
        'all': "所有角色",
      },
      "init": lib.config.qhly_notbb_range === undefined ? 'skill' : lib.config.qhly_notbb_range,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_notbb_range', item);
        game.saveConfig('qhly_notbb_range', item);
      }
    },
    "qhly_originSkinPath": {
      "name": "本体武将皮肤目录",
      "intro": "可设置本体武将的皮肤目录。",
      "init": lib.config.qhly_originSkinPath === undefined ? "extension/千幻聆音/sanguoskin/" : lib.config.qhly_originSkinPath,
      "item": {
        "extension/千幻聆音/sanguoskin/": "千幻聆音目录",
        "extension/千幻聆音/sanguolutouskin/": "千幻露头目录",
        "image/skin/": "本体目录",
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_originSkinPath', item);
        game.saveConfig('qhly_originSkinPath', item);
        var s = confirm("是否重启游戏以应用新配置？");
        if (s) {
          game.reload();
        }
      }
    },
    "qhly_extSkinPath": {
      "name": "扩展武将皮肤目录",
      "intro": "可设置扩展武将的皮肤目录（仍优先扩展的skin.js设置）。",
      "init": lib.config.qhly_extSkinPath === undefined ? "default" : lib.config.qhly_originSkinPath,
      "item": {
        "default": "扩展skin文件夹",
        "extension/千幻聆音/sanguoskin/": "千幻聆音目录",
        "extension/千幻聆音/sanguolutouskin/": "千幻露头目录",
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_extSkinPath', item);
        game.saveConfig('qhly_extSkinPath', item);
        var s = confirm("是否重启游戏以应用新配置？");
        if (s) {
          game.reload();
        }
      }
    },
    "qhly_autoChangeSkin": {
      "name": "自动切换皮肤",
      "intro": "打开此选项，皮肤会自动随时间随机切换。",
      "init": lib.config.qhly_autoChangeSkin === undefined ? "close" : lib.config.qhly_autoChangeSkin,
      "item": {
        "close": "关闭",
        "10": "每10秒",
        "30": "每半分钟",
        "60": "每1分钟",
        "120": "每2分钟",
        "600": "每10分钟",
      },
      onclick: function (item) {
        var open = false;
        if (lib.config.qhly_autoChangeSkin == 'close' || !lib.config.qhly_autoChangeSkin) {
          if (item !== 'close') {
            open = true;
          }
        }
        game.saveConfig('extension_千幻聆音_qhly_autoChangeSkin', item);
        game.saveConfig('qhly_autoChangeSkin', item);
        if (open) {
          if (game.qhly_autoChangeSkin) {
            game.qhly_autoChangeSkin();
          } else {
            alert("打开扩展才生效。");
          }
        } else {
          if (_status.qhly_changeSkinFunc) {
            clearTimeout(_status.qhly_changeSkinFunc);
          }
        }
      }
    },
    "qhly_listdefaultpage": {
      "name": "列表进入默认页面",
      "intro": "可设置通过武将列表进入千幻聆音目录时，默认显示的页面。",
      "init": lib.config.qhly_listdefaultpage === undefined ? "introduce" : lib.config.qhly_listdefaultpage,
      "item": {
        "introduce": "人物简介",
        "skill": "技能描述",
        "skin": "皮肤信息",
        "config": "相关配置",
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_listdefaultpage', item);
        game.saveConfig('qhly_listdefaultpage', item);
      }
    },
    "qhly_doubledefaultpage": {
      "name": "双击默认页面",
      "intro": "可设置通过在游戏内双击武将头像进入千幻聆音目录时，默认显示的页面。",
      "init": lib.config.qhly_doubledefaultpage === undefined ? "skill" : lib.config.qhly_doubledefaultpage,
      "item": {
        "introduce": "人物简介",
        "skill": "技能描述",
        "skin": "皮肤信息",
        "config": "相关配置",
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_doubledefaultpage', item);
        game.saveConfig('qhly_doubledefaultpage', item);
      }
    },
    "qhly_guozhan": {
      "name": "国战皮肤",
      "intro": "打开此选项后，国战模式下，皮肤将从gz_开头的文件夹读取。",
      "init": lib.config.qhly_guozhan === undefined ? true : lib.config.qhly_guozhan,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_guozhan', item);
        game.saveConfig('qhly_guozhan', item);
      }
    },
    "qhly_skinconfig": {
      "name": "皮肤配置",
      "intro": "打开此选项后，可以进行一些额外的皮肤配置。",
      "init": lib.config.qhly_skinconfig === undefined ? false : lib.config.qhly_skinconfig,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_skinconfig', item);
        game.saveConfig('qhly_skinconfig', item);
      }
    },
    "qhly_editmode": {
      "name": "编辑模式",
      "intro": "打开此选项后，在千幻详情页可以编辑武将台词。",
      "init": lib.config.qhly_editmode === undefined ? false : lib.config.qhly_editmode,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_editmode', item);
        game.saveConfig('qhly_editmode', item);
      }
    },
    "qhly_skillingame": {
      "name": "显示对局技能",
      "intro": "打开此选项后，对局中查看武将技能界面时，将显示对局中的技能。",
      "init": lib.config.qhly_skillingame === undefined ? false : lib.config.qhly_skillingame,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_skillingame', item);
        game.saveConfig('qhly_skillingame', item);
      }
    },
    "qhly_keymarkopen": {
      "name": "技能关键字高亮",
      "intro": "打开此选项后，技能中相关关键字将会被高亮。",
      "init": lib.config.qhly_keymarkopen === undefined ? false : lib.config.qhly_keymarkopen,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_keymarkopen', item);
        game.saveConfig('qhly_keymarkopen', item);
        if (item) {
          var ori = lib.config.qhly_keymark;
          if (!ori) {
            ori = "锁定技:blue;限定技:orange;觉醒技:red;使命技:gold;#出牌阶段:#00FF00;#摸牌阶段:#00FF00;#弃牌阶段:#00FF00;#准备阶段:#00FF00;#结束阶段:#00FF00;";
          }
          game.qhly_editDialog("关键字高亮设置", "#开头为全部高亮，否则为首次出现高亮。", ori, function (value, dialog) {
            value = value.replaceAll("：", ":");
            value = value.replaceAll("；", ";");
            value = value.replaceAll("\n", "");
            value = value.replaceAll("\r", "");
            value = value.replaceAll(" ", "");
            game.saveConfig("qhly_keymark", value);
            dialog.delete();
          }, function (dialog) {
            return true;
          });
        }
      }
    },
    "qhly_chooseButtonOrigin":{
      "name": "选将界面显示原皮",
      "intro": "设置此选项，选将界面将显示角色的原有皮肤。",
      "init": lib.config.qhly_chooseButtonOrigin === undefined ? false : lib.config.qhly_chooseButtonOrigin,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_chooseButtonOrigin', item);
        game.saveConfig('qhly_chooseButtonOrigin', item);
      }
    },
    "qhly_mvp": {
      "name": "播放MVP武将的胜利语音",
      "init": false,
    },
    "qhly_decadeConfig": {
      "name": "<font size='5' color='blue'>十周年及手杀样式专用设置》</font>",
      "clear": true,
    },
    "qhly_decadeCloseDynamic": {
      "name": "关闭所有动皮效果",
      "init": false,
      onclick: function (item) {
        if (item === true) {
          if (game.players) {
            for (var i = 0; i < game.players.length; i++) {
              if (game.players[i].stopDynamic) game.players[i].stopDynamic();
            }
          }
        } else {
          if (!window.decadeUI) {
            alert("侦测到十周年UI未正常开启，无法使用动皮功能！");
            lib.config['extension_千幻聆音_qhly_decadeCloseDynamic'] = true;
            this.classList.add('on');
            return;
          }
        }
        game.saveConfig('extension_千幻聆音_qhly_decadeCloseDynamic', item);

      }
    },
    "qhly_close_circle_top":{
      "name": "关闭圆顶",
      "intro": "设置此选项，角色框将不会显示顶部圆弧。",
      "init": lib.config.qhly_close_circle_top === undefined ? false : lib.config.qhly_close_circle_top,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_close_circle_top', item);
        game.saveConfig('qhly_close_circle_top', item);
      }
    },
    "qhly_playerwindow": {
      "name": "单击武将呼出菜单",
      "init": true,
    },
    "qhly_formatDS": {
      "name": "自动调整动皮参数",
      "init": true,
    },
    "qhly_editDynamic": {
      "name": "调节待机及大页面",
      "intro": "使用千幻聆音调节待机及大页面中动皮效果。",
      "init": true,
    },
    "qhly_noSkin": {
      "name": "无静皮时显示",
      "intro": "当只有动皮没有静皮时显示内容。",
      "item": {
        "noSkin": "无相应静皮资源",
        "origin": "原皮",
      },
      "init": lib.config.qhly_noSkin === undefined ? "noSkin" : lib.config.qhly_noSkin,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_noSkin', item);
        game.saveConfig('qhly_noSkin', item);
      }
    },
    "qhly_dom2image": {
      "name": "显示生成静皮按钮",
      "intro": "只有动皮没有静皮时，在右上角显示生成静皮的按钮",
      "init": true,
    },
    "qhly_decadeDynamic": {
      "name": "小窗动皮关闭",
      "init": "three",
      "item": {
        "none": "不关闭",
        "three": "多于3个时关闭",
        "always": "保持关闭",
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_decadeDynamic', item);
        if (item == 'none') alert("强烈建议设置为“多于3个时关闭”或“保持关闭”，否则可能因为小窗内动皮过多导致动画丢失！")
      }
    },
    "qhly_decadeChangeEffect": {
      "name": "换肤特效",
      "init": true,
    },
    "qhly_guozhanDS": {
      "name": "国战动皮适配",
      "init": true,
    },
    "qhly_decadeDengjie": {
      "name": "小窗人物等阶",
      "init": lib.config['extension_千幻聆音_qhly_decadeDengjie'] === undefined ? "auto" : lib.config['extension_千幻聆音_qhly_decadeDengjie'],
      "item": {
        "one": "一阶",
        "two": "二阶",
        "three": "三阶",
        "four": "四阶",
        "five": "五阶",
        "auto": "跟随角色评级",
      },
    },
    "qhly_decadeAuto": {
      "name": "自动换肤间隔",
      "intro": "调节自动换肤时间",
      "init": lib.config['extension_千幻聆音_qhly_decadeAuto'] === undefined ? "30" : lib.config['extension_千幻聆音_qhly_decadeAuto'],
      "item": {
        "10": "每10秒",
        "30": "每半分钟",
        "60": "每1分钟",
        "120": "每2分钟",
        "600": "每10分钟",
      },
    },
    "qhly_shoushaTexiao": {
      "name": "大页面出框特效",
      "init": true,
    },
    "qhly_ignoreClips": {
      "name": "忽略clipSlots",
      "init": false,
    },
    "qhly_yinxiaoshezhi": {
      "name": "<font size='5' color='blue'>音效设置》</font>",
      "clear": true,
    },
    "qhly_closeVoice": {
      "name": "关闭点击音效",
      "intro": "打开此选项，可关闭点击音效。",
      "init": lib.config.qhly_closeVoice === undefined ? false : lib.config.qhly_closeVoice,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_closeVoice', item);
        game.saveConfig('qhly_closeVoice', item);
      }
    },
    "qhly_currentMusic": {
      "name": "设置BGM",
      "intro": "设置此选项，可以选择游戏背景音乐。将覆盖系统的配置。",
      "init": lib.config.qhly_currentMusic ? lib.config.qhly_currentMusic : 'system',
      "item": {
        'system': '跟随系统',
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_currentMusic', item);
        game.saveConfig('qhly_currentMusic', item);
      }
    },
    "qhly_enableCharacterMusic": {
      "name": "角色BGM",
      "intro": "打开此选项，可以在设置界面设置角色专属BGM，重启后生效。",
      "init": lib.config.qhly_enableCharacterMusic === undefined ? false : lib.config.qhly_enableCharacterMusic,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_enableCharacterMusic', item);
        game.saveConfig('qhly_enableCharacterMusic', item);
      }
    },
    "qhly_modemusicconfig": {
      "name": "<b>模式BGM</b>",
      "intro": "设置当前模式的BGM。",
      item: {
        'system': '不特别配置',
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_modemusicconfig', item);
        game.saveConfig('qhly_modemusicconfig_' + get.mode(), item);
      }
    },
    "qhly_shuimolingyin": {
      "name": "<font size='5' color='blue'>水墨龙吟相关设置》</font>",
      "clear": true,
    },
    "qhly_hanggaoxiufu": {
      "name": "技能名行高调整",
      "intro": "设置此选项，可调整【水墨龙吟】界面按钮的文字行高。",
      "init": lib.config.qhly_hanggaoxiufu === undefined ? "250" : lib.config.qhly_hanggaoxiufu,
      "item": {
        "250": "250%",
        "260": "260%",
        "270": "270%",
        "280": "280%",
        "290": "290%",
        "300": "300%",
        "310": "310%",
        "320": "320%",
        "330": "330%",
        "340": "340%",
        "350": "350%",
        "360": "360%",
        "370": "370%",
        "380": "380%",
        "390": "390%",
        "400": "400%"
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_hanggaoxiufu', item);
        game.saveConfig('qhly_hanggaoxiufu', item);
      }
    },
    "qhly_hanggaoxiufu2": {
      "name": "按钮行高调整",
      "intro": "设置此选项，可调整【水墨龙吟】界面按钮的文字行高。",
      "init": lib.config.qhly_hanggaoxiufu2 === undefined ? "250" : lib.config.qhly_hanggaoxiufu2,
      "item": {
        "250": "250%",
        "260": "260%",
        "270": "270%",
        "280": "280%",
        "290": "290%",
        "300": "300%",
        "310": "310%",
        "320": "320%",
        "330": "330%",
        "340": "340%",
        "350": "350%",
        "360": "360%",
        "370": "370%",
        "380": "380%",
        "390": "390%",
        "400": "400%",
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_hanggaoxiufu2', item);
        game.saveConfig('qhly_hanggaoxiufu2', item);
      }
    },
    "qhly_shilizihao": {
      "name": "势力字号调整",
      "intro": "设置此选项，可调整【水墨龙吟】界面按钮的势力字号。",
      "init": lib.config.qhly_shilizihao === undefined ? "65" : lib.config.qhly_shilizihao,
      "item": {
        "50": "50",
        "55": "55",
        "60": "60",
        "65": "65",
        "70": "70",
        "75": "75",
        "80": "80",
        "85": "85",
        "90": "90",
        "95": "95",
        "100": "100",
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_shilizihao', item);
        game.saveConfig('qhly_shilizihao', item);
      }
    },
    "qhly_lihuiSupport": {
      "name": "显示立绘",
      "intro": "设置此选项，【水墨龙吟】套装将显示立绘。",
      "init": lib.config.qhly_lihuiSupport === undefined ? false : lib.config.qhly_lihuiSupport,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_lihuiSupport', item);
        game.saveConfig('qhly_lihuiSupport', item);
      }
    },
    "qhly_hideShuimoCover": {
      "name": "隐藏墨迹",
      "intro": "设置此选项，【水墨龙吟】将隐藏上面的墨迹，以显示全皮肤。",
      "init": lib.config.qhly_hideShuimoCover === undefined ? false : lib.config.qhly_hideShuimoCover,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_hideShuimoCover', item);
        game.saveConfig('qhly_hideShuimoCover', item);
      }
    },
    "qhly_lolconfig": {
      "name": "<font size='5' color='blue'>海克斯科技相关设置》</font>",
      "clear": true,
    },
    "qhly_lolhanggaoxiufu": {
      "name": "技能名行高调整",
      "intro": "设置此选项，可调整【海克斯科技】界面按钮的文字行高。",
      "init": lib.config.qhly_lolhanggaoxiufu === undefined ? "250" : lib.config.qhly_lolhanggaoxiufu,
      "item": {
        "250": "250%",
        "260": "260%",
        "270": "270%",
        "280": "280%",
        "290": "290%",
        "300": "300%",
        "310": "310%",
        "320": "320%",
        "330": "330%",
        "340": "340%",
        "350": "350%",
        "360": "360%",
        "370": "370%",
        "380": "380%",
        "390": "390%",
        "400": "400%"
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_lolhanggaoxiufu', item);
        game.saveConfig('qhly_lolhanggaoxiufu', item);
      }
    },
    "qhly_lolhanggaoxiufu2": {
      "name": "按钮行高调整",
      "intro": "设置此选项，可调整【海克斯科技】界面按钮的文字行高。",
      "init": lib.config.qhly_lolhanggaoxiufu2 === undefined ? "250" : lib.config.qhly_lolhanggaoxiufu2,
      "item": {
        "250": "250%",
        "260": "260%",
        "270": "270%",
        "280": "280%",
        "290": "290%",
        "300": "300%",
        "310": "310%",
        "320": "320%",
        "330": "330%",
        "340": "340%",
        "350": "350%",
        "360": "360%",
        "370": "370%",
        "380": "380%",
        "390": "390%",
        "400": "400%",
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_hanggaoxiufu2', item);
        game.saveConfig('qhly_hanggaoxiufu2', item);
      }
    },
    "qhly_lolshilizihao": {
      "name": "势力字号调整",
      "intro": "设置此选项，可调整【海克斯科技】界面按钮的势力字号。",
      "init": lib.config.qhly_lolshilizihao === undefined ? "65" : lib.config.qhly_lolshilizihao,
      "item": {
        "50": "50",
        "55": "55",
        "60": "60",
        "65": "65",
        "70": "70",
        "75": "75",
        "80": "80",
        "85": "85",
        "90": "90",
        "95": "95",
        "100": "100",
      },
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_lolshilizihao', item);
        game.saveConfig('qhly_lolshilizihao', item);
      }
    },
    "qhly_jianrongxing": {
      "name": "<font size='5' color='blue'>兼容性相关设置》</font>",
      "clear": true,
    },
    "qhly_funcLoadInPrecontent": {
      "name": "预处理加载",
      "intro": "设置此选项，将在预处理阶段加载此扩展的函数，可兼容部分美化扩展。",
      "init": lib.config.qhly_funcLoadInPrecontent === undefined ? false : lib.config.qhly_funcLoadInPrecontent,
      onclick: function (item) {
        game.saveConfig('extension_千幻聆音_qhly_funcLoadInPrecontent', item);
        game.saveConfig('qhly_funcLoadInPrecontent', item);
      }
    },
    "qhly_qitashezhi": {
      "name": "<font size='5' color='blue'>其他》</font>",
      "clear": true,
    },
    "qhly_clear": {
      "name": "<b>点击清空皮肤设置</b>",
      "clear": true,
      onclick: function () {
        game.saveConfig('qhly_skinset', {
          skin: {

          },
          skinAudioList: {

          },
          audioReplace: {

          }
        });
        alert("游戏将自动重启。");
        game.reload();
      }
    },
    "qhly_restore": {
      "name": "<b>点击恢复官方的皮肤设置</b>",
      "clear": true,
      onclick: function () {
        if (lib.config.qhly_save_offical_skin) {
          game.saveConfig('skin', lib.config.qhly_save_offical_skin);
          game.saveConfig('change_skin', false);
          game.saveConfig('extension_千幻聆音_enable', true);
          game.reload();
        }
      }
    },
    "qhly_plugin": {
      "name": "<b>点击设置插件</b>",
      "clear": true,
      onclick: function () {
        if(window.qhly_openPluginWindow){
          window.qhly_openPluginWindow();
        }
      }
    },
};