import { lib,get,_status,ui,game,ai } from './noname.js';

export let PRECONTENT = function (config) {
    //-----Q-----END-----
    if(window.decadeUI && !window.decadeUI.dynamicSkin){
      window.decadeUI.dynamicSkin = {};
    }
        game.qhly_hasExtension = function (str) {
          if (!str || typeof str != 'string') return false;
          if (lib.config && lib.config.extensions) {
            for (var i of lib.config.extensions) {
              if (i.indexOf(str) == 0) {
                if (lib.config['extension_' + i + '_enable']) return true;
              }
            }
          }
          return false;
        };
        if (!lib.qhly_viewskin) {
          lib.qhly_viewskin = {};
        }
        lib.qhly_viewskin['xuanwujianghu'] = {
          name: '玄武江湖',
          onchange: function () {
            game.saveConfig('qhly_viewskin_css', 'newui');
          },
          changeViewSkin: function (view) {
    
          },
          skinPage: function (pageName, view) {
    
          }
        };
    
        lib.qhly_viewskin['shikongshuniu'] = {
          name: '时空枢纽',
          buttonImage: 'extension/千幻聆音/theme/sksn/newui_button_sksn.png',
          buttonPressedImage: 'extension/千幻聆音/theme/sksn/newui_button_selected_sksn.png',
          skinPagePlayAudioButtonImage: 'extension/千幻聆音/theme/wz/qhly_pic_playaudiobutton_wz.png',
          onchange: function () {
            game.saveConfig('qhly_viewskin_css', 'newui_sksn');
          },
          changeViewSkin: function (view) {
    
          },
          skinPage: function (pageName, view) {
    
          }
        };
    
        lib.qhly_viewskin['sanguo'] = {
          name: '三国',
          onchange: function () {
            game.saveConfig('qhly_viewskin_css', 'newui_sanguo');
          },
          skillPageSkillNameColor: '#87CEFA',
          skillPageDerivationSkillColor: '#7FFFD4',
          skinPageSkillNameColor: '#87CEFA',
          skinPageHeadTitleColor: '#90EE90',
          skinPageHeadSkinNameColor: '#EEE9E9',
          changeViewSkin: function (view) {
            view.dragonhead.show();
            view.dragontail.show();
          },
          skinPage: function (pageName, view) {
    
          }
        };
    
        lib.qhly_viewskin['sanguo2'] = {
          name: '三国2',
          buttonImage: 'extension/千幻聆音/theme/sanguo2/newui_button_sanguo2.png',
          buttonPressedImage: 'extension/千幻聆音/theme/sanguo2/newui_button_selected_sanguo2.png',
          onchange: function () {
            game.saveConfig('qhly_viewskin_css', 'newui_sanguo2');
          },
          skillPageSkillNameColor: '#87CEFA',
          skillPageDerivationSkillColor: '#7FFFD4',
          skinPageSkillNameColor: '#87CEFA',
          skinPageHeadTitleColor: '#90EE90',
          skinPageHeadSkinNameColor: '#EEE9E9',
          changeViewSkin: function (view) {
            view.dragonhead.show();
            view.dragontail.show();
          },
          skinPage: function (pageName, view) {
    
          }
        };
    
        lib.qhly_viewskin['wangzhe'] = {
          name: '耀世星辉',
          buttonImage: 'extension/千幻聆音/theme/wz/newui_button_wz.png',
          buttonPressedImage: 'extension/千幻聆音/theme/wz/newui_button_selected_wz.png',
          favouriteImage: 'extension/千幻聆音/theme/wz/newui_fav_wz.png',
          forbidImage: 'extension/千幻聆音/theme/wz/newui_forbid_wz.png',
          checkBoxImage: 'extension/千幻聆音/image/newui_checkbox_unchecked.png',
          checkBoxCheckedImage: 'extension/千幻聆音/theme/wz/newui_checkbox_checked_wz.png',
          skillPagePlayAudioButtonImage: 'extension/千幻聆音/theme/wz/newui_playaudio_wz.png',
          skinPagePlayAudioButtonImage: 'extension/千幻聆音/theme/wz/qhly_pic_playaudiobutton_wz.png',
    
          onchange: function () {
            game.saveConfig('qhly_viewskin_css', 'newui_wz');
          },
          skillPageSkillNameColor: '#87CEFA',
          skillPageDerivationSkillColor: '#7FFFD4',
          skinPageSkillNameColor: '#87CEFA',
          skinPageHeadTitleColor: '#90EE90',
          skinPageHeadSkinNameColor: '#EEE9E9',
          changeViewSkin: function (view) {
    
          },
          skinPage: function (pageName, view) {
    
          }
        };
    
        lib.qhly_viewskin['ranqi'] = {
          name: '染柒的世界',
          buttonImage: 'extension/千幻聆音/theme/rq/newui_button_rq.png',
          buttonPressedImage: 'extension/千幻聆音/theme/rq/newui_button_selected_rq.png',
          favouriteImage: 'extension/千幻聆音/theme/rq/newui_fav_rq.png',
          forbidImage: 'extension/千幻聆音/theme/rq/newui_forbid_rq.png',
          checkBoxImage: 'extension/千幻聆音/image/newui_checkbox_unchecked.png',
          checkBoxCheckedImage: 'extension/千幻聆音/theme/wz/newui_checkbox_checked_wz.png',
    
          onchange: function () {
            game.saveConfig('qhly_viewskin_css', 'newui_rq');
          },
          skillPageSkillNameColor: '#87CEFA',
          skillPageDerivationSkillColor: '#7FFFD4',
          skinPageSkillNameColor: '#87CEFA',
          skinPageHeadTitleColor: '#90EE90',
          skinPageHeadSkinNameColor: '#EEE9E9',
          changeViewSkin: function (view) {
    
          },
          skinPage: function (pageName, view) {
    
          }
        };
    
        lib.qhly_viewskin['jingdian'] = {
          name: '经典怀旧',
          onchange: function () {
    
          },
          changeViewSkin: function (view) {
    
          },
          skinPage: function (pageName, view) {
    
          }
        };
    
    
        lib.qhly_viewskin['shuimo'] = {
          name: '水墨龙吟',
          whr: 2.2028,
          isQiLayout: true,
          buttonTextSpace: false,
          lihuiSupport: true,
          layoutType: 'qi',
          skillPageSkillNameColor: '#FFFFFF',
          skillPageDerivationSkillColor: '#00F5FF',
          skinPageSkillNameColor: '#FFFFFF',
          buttonImage: 'extension/千幻聆音/theme/shuimo/newui_button_shuimo.png',
          buttonPressedImage: 'extension/千幻聆音/theme/shuimo/newui_button_selected_shuimo.png',
          skillPagePlayAudioButtonImage: 'extension/千幻聆音/theme/shuimo/newui_playaudio_shuimo.png',
          skinPagePlayAudioButtonImage: 'extension/千幻聆音/theme/shuimo/qhly_pic_playaudiobutton_shuimo.png',
          onchange: function () {
            game.saveConfig('qhly_viewskin_css', 'newui_shuimo');
          },
          changeViewSkin: function (view) {
    
          },
          skinPage: function (pageName, view) {
    
          }
        };

        lib.qhly_viewskin['newyear'] = {
          name: '水墨龙吟-新春',
          whr: 2.2028,
          isQiLayout: true,
          buttonTextSpace: false,
          lihuiSupport: true,
          layoutType: 'qi',
          skillPageSkillNameColor: '#FFFFFF',
          skillPageDerivationSkillColor: '#00F5FF',
          skinPageSkillNameColor: '#FFFFFF',
          buttonImage: 'extension/千幻聆音/theme/newyear/newui_button_shuimo.png',
          buttonPressedImage: 'extension/千幻聆音/theme/newyear/newui_button_selected_shuimo.png',
          skillPagePlayAudioButtonImage: 'extension/千幻聆音/theme/shuimo/newui_playaudio_shuimo.png',
          skinPagePlayAudioButtonImage: 'extension/千幻聆音/theme/shuimo/qhly_pic_playaudiobutton_shuimo.png',
          onchange: function () {
            game.saveConfig('qhly_viewskin_css', 'newui_newyear');
          },
          changeViewSkin: function (view) {
    
          },
          skinPage: function (pageName, view) {
    
          }
        };
    
        lib.qhly_viewskin['decade'] = {
          name: '十周年',
          whr: 2.22,
          buttonImage: 'extension/千幻聆音/theme/decade/button.jpg',
          buttonPressedImage: 'extension/千幻聆音/theme/decade/buttonsel.jpg',
          favouriteImage: 'extension/千幻聆音/theme/decade/newui_fav_dc.png',
          forbidImage: 'extension/千幻聆音/theme/decade/newui_forbid_dc.png',
          rankImage: 'extension/千幻聆音/theme/decade/newui_rank_dc.png',
          musicImage: 'extension/千幻聆音/theme/decade/newui_music_dc.png',
          checkBoxImage: 'extension/千幻聆音/image/newui_checkbox_unchecked.png',
          checkBoxCheckedImage: 'extension/千幻聆音/theme/wz/newui_checkbox_checked_wz.png',
          skillPagePlayAudioButtonImage: 'extension/千幻聆音/theme/decade/skillvoice.png',
          skinPagePlayAudioButtonImage: 'extension/千幻聆音/theme/wz/qhly_pic_playaudiobutton_wz.png',
    
          onchange: function () {
            game.saveConfig('qhly_viewskin_css', 'newui_dc');
          },
          changeViewSkin: function (view) {
    
          },
          skinPage: function (pageName, view) {
    
          }
        };
    
        lib.qhly_viewskin['shousha'] = {
          name: '手杀',
          whr: 2.22,
          buttonImage: 'extension/千幻聆音/theme/shousha/chr_detail_skill_button_normal.jpg',
          buttonPressedImage: 'extension/千幻聆音/theme/shousha/chr_detail_skill_button_selected.jpg',
          favouriteImage: 'extension/千幻聆音/theme/shousha/newui_fav_ss.png',
          forbidImage: 'extension/千幻聆音/theme/shousha/newui_forbid_ss.png',
          rankImage: 'extension/千幻聆音/theme/shousha/newui_rank_ss.png',
          musicImage: 'extension/千幻聆音/theme/shousha/newui_music_ss.png',
          skinImage: 'extension/千幻聆音/theme/shousha/newui_skin_ss.png',
          checkBoxImage: 'extension/千幻聆音/image/newui_checkbox_unchecked.png',
          checkBoxCheckedImage: 'extension/千幻聆音/theme/wz/newui_checkbox_checked_wz.png',
          skillPagePlayAudioButtonImage: 'extension/千幻聆音/theme/decade/skillvoice.png',
          skinPagePlayAudioButtonImage: 'extension/千幻聆音/theme/wz/qhly_pic_playaudiobutton_wz.png',
          hasJs:true,
          onchange: function () {
            game.saveConfig('qhly_viewskin_css', 'newui_ss');
          },
          changeViewSkin: function (view) {
    
          },
          skinPage: function (pageName, view) {
    
          }
        };
    
        lib.qhly_viewskin['lolbig'] = {
          name: '海克斯科技',
          whr: 1.77778,
          isLolBigLayout: true,
          buttonTextSpace: false,
          favouriteImage: 'extension/千幻聆音/theme/lolbig/newui_fav_lol.png',
          lihuiSupport: true,
          layoutType: 'lolbig',
          skillPageSkillNameColor: '#C0B588',
          skillPageDerivationSkillColor: '#00F5FF',
          skinPageSkillNameColor: '#FFFFFF',
          buttonImage: 'extension/千幻聆音/theme/lolbig/newui_button_lol.png',
          buttonPressedImage: 'extension/千幻聆音/theme/lolbig/newui_button_selected_lol.png',
          skillPagePlayAudioButtonImage: 'extension/千幻聆音/theme/lolbig/newui_playaudio_lol.png',
          skinPagePlayAudioButtonImage: 'extension/千幻聆音/theme/lolbig/qhly_pic_playaudiobutton_lol.png',
          checkBoxCheckedImage: 'extension/千幻聆音/theme/lolbig/newui_checkbox_checked_lol.png',
          checkBoxImage: 'extension/千幻聆音/theme/lolbig/newui_checkbox_unchecked_lol.png',
          onchange: function () {
            game.saveConfig('qhly_viewskin_css', 'newui_lolbig');
          },
          changeViewSkin: function (view) {
    
          },
          skinPage: function (pageName, view) {
    
          }
        };
        if (!lib.config.dev) {
          game.saveConfig('dev', true);
          if (_status.connectMode) return;
          lib.cheat.i();
        }
        if ((lib.config.qhly_currentViewSkin == 'decade' || lib.config.qhly_currentViewSkin == 'shousha') && !lib.config['extension_千幻聆音_qhly_decadeCloseDynamic']) window._qhlyThunder = true;//用于判断是否打开的是千幻聆音雷修版
        window._qhlyThunderKey = ['init', 'uninit', 'reinit', 'playDynamic', 'stopDynamic', 'showCharacter'];
        lib.qhly_path = lib.assetURL + 'extension/千幻聆音/';
        window.qhly_version = 5;
        var cssUrl = lib.assetURL + 'extension/千幻聆音';
        lib.init.css(cssUrl, 'extension');
        if(lib.config.qhly_viewskin_css){
          if(lib.config.qhly_viewskin_css.indexOf('extension/') == 0){
            lib.init.css(lib.assetURL+lib.config.qhly_viewskin_css,'main');
          }else{
            lib.init.css(cssUrl + '/theme', lib.config.qhly_viewskin_css ? lib.config.qhly_viewskin_css : 'newui');
          }
        }else{
          lib.init.css(cssUrl + '/theme','newui');
        }
        window.qhly_import = function (func) {
          func(lib, game, ui, get, ai, _status);
        };
        window.qhly_import_safe = function (func) {
          try {
            func(lib, game, ui, get, ai, _status);
          } catch (e) {
            alert("JS文件解析失败");
          }
        };
        lib.init.js(lib.qhly_path + '/data/sanguoskininfo.js');
        lib.init.js(lib.qhly_path + 'skinShare.js');
        lib.init.js(lib.qhly_path + 'skinEdit.js');
        lib.init.js(lib.qhly_path + '/data/dom-to-image.js');
        lib.init.js(lib.qhly_path, 'skinChange', function () {
          let str = '千幻聆音：检测到skinChange.js中';
          const keys = ['source', 'audio', 'image'];
          let value = [];
          let alerted = false;
          Object.keys(lib.qhly_skinChange).forEach(character => {
            Object.keys(lib.qhly_skinChange[character]).forEach(skin => {
              Object.keys(lib.qhly_skinChange[character][skin]).forEach(key => {
                if (keys.includes(key)) {
                  value.add(key);
                  if (typeof lib.qhly_skinChange[character][skin][key] != 'string') {
                    str += (character + '的皮肤“' + skin + '”中的“' + key + '”属性填写错误，请检查！');
                    alert(str);
                    alerted = true;
                  }
                  if (key != 'source') {
                    lib.qhly_skinChange[character][skin][key + '1'] = lib.qhly_skinChange[character][skin][key];
                    if (key == 'audio') lib.qhly_skinChange[character][skin][key + '2'] = skin + '/';
                    else {
                      lib.qhly_skinChange[character][skin][key + '2'] = character + '/' + skin + '.jpg';
                    }
                  }
                }
              })
              if (value.length < 3 && !alerted) {
                str += (character + '的皮肤“' + skin + '”中的属性填写不全，请检查至少包含source、audio、image这3条属性！');
                alert(str);
              }
              str = '千幻聆音：检测到skinChange.js中';
              value = [];
            })
          })
        });
        if(lib.qhly_viewskin[lib.config.qhly_currentViewSkin] && lib.qhly_viewskin[lib.config.qhly_currentViewSkin].hasJs){
          let hasJs = lib.qhly_viewskin[lib.config.qhly_currentViewSkin].hasJs;
          if(typeof hasJs == 'string'){
            lib.init.jsForExtension([lib.qhly_path+"model/diy.js",hasJs]);
          }else if(hasJs){
            var vsJsPath = lib.qhly_path + 'theme/'+lib.config.qhly_currentViewSkin+"/code/"+lib.config.qhly_currentViewSkin+".js";
            lib.init.jsForExtension(vsJsPath);
          }
        }
        window.qhly_audio_redirect = {
    
        };
        if(lib.config.qhly_funcLoadInPrecontent || game.qhly_hasExtension('如真似幻')){
          window.qhly_inPercontent = true;
          window.qhly_extension_package.content(config,window.qhly_extension_package);
          window.qhly_inPercontent = false;
        }
};