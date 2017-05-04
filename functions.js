const fs = require('fs')
const lib = require('./library.json')

function getFileContents (lib, cb) {
fs.readFile((err, contents) => {
  if (err) {
    return err
  }
  const data = JSON.parse(contents)
  cb(null, contents)
})
}

module.exports = {
  getFileContents,
}
