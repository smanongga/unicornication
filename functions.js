 const fs = require('fs')

function letterValue(str){
 var alph= {
         a: 1, b: 2, c: 3, d: 4, e: 5, f: 1, g: 2, h: 3, i: 4, j: 5, k: 1,
         l: 2, m:3, n: 4,o: 5, p: 6, q: 1, r: 2, s: 3, t: 4,
         u: 5, v: 1, w: 2, x: 3, y: 4, z: 5,
         A: 1, B: 2, C: 3, D: 4, E: 5, F: 1, G: 2, H: 3, I: 4, J: 5, K: 1,
         L: 2, M:3, N: 4,O: 5, P: 6, Q: 1, R: 2, S: 3, T: 4,
         U: 5, V: 1, W: 2, X: 3, Y: 4, Z: 5
     }
     if(str.length== 1) return alph[str] || ' ';
         return str.split('').map(letterValue);
     }



 function getFileContents (lib, cb) {
 fs.readFile(lib,(err, contents) => {
   if (err) {
   return err
   }
   const data = JSON.parse(contents)

   cb(null, data)
     })
 }



function add(a,b){
  return a+b
}



function namesToNumber(name){

return letterValue(name).reduce(add,0)

}


module.exports = {
  getFileContents,
  namesToNumber
}
