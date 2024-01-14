//name:"千幻聆音"
//提示：本扩展源代码基于GPL协议向无名杀社区开放，欢迎大家借鉴和参考代码。
game.import("extension", function (lib, game, ui, get, ai, _status) {
  return new Promise((resolve,reject)=>{
      import('./extension/main.js').then(({mainPackage})=>{
        resolve(mainPackage);
      });
  });
});