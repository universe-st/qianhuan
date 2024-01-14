'use strict';
window.qhly_import(function(lib, game, ui, get, ai, _status){
    game.qhly_addEasterEgg({
        type:'kill',//击杀类彩蛋。
        player:'guanyu',//击杀者。
        target:'caoren',//被击杀者。
        filter:function(playerName,targetName,event){
            return true;//筛选器。
        },
        audio:'',//播放语音。
        skinAudio:'',//当前角色有皮肤时，在皮肤语音文件夹查找。
        motion:function(player,target){
            player.say("威震华夏!");//击杀时执行代码。
        },
    });

    game.qhly_addEasterEgg({
        type:'damage',//伤害类彩蛋。
        player:['caocao','re_caocao'],//造成伤害者。
        target:'guojia',//受到伤害者。
        filter:function(playerName,targetName,event){
            return true;//筛选器。
        },
        audio:'',//播放语音。
        skinAudio:'',//当前角色有皮肤时，在皮肤语音文件夹查找。
        motion:function(player,target){
            target.say("主公饶命啊!");//伤害时执行代码。
        },
    });
});