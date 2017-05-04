 const fs = require('fs')

 function getFileContents (lib, cb) {
 fs.readFile((err, contents) => {
   if (err) {
   return err
   }
   const data = JSON.parse(contents)
   cb(null, data)
     })
 }

 module.exports = {
   getFileContents
 }
