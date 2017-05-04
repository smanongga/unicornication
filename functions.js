 const fs = require('fs')

 function getFileContents (lib, cb) {
 fs.readFile(lib,(err, contents) => {
   if (err) {
   return err
   }
   const data = JSON.parse(contents)
   console.log(contents)
   cb(null, data)
     })
 }

 module.exports = {
   getFileContents
 }
