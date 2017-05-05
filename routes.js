const express = require('express')
const routes = express.Router()
const fs = require('fs')

const functions = require('./functions')
const lib = ("./library.json")
const hist = ("./history.json")
let name
let path
let findId

module.exports = routes

routes.get('/', (req, res) => {
  res.redirect('/index')
})
routes.get('/index', (req, res) => {
  functions.getFileContents(hist, (err, contents) => {
    if (err) {
      return res.send(err.message).status(500)
    }
    console.log(contents)
    res.render('index', contents)
  })
})

routes.post('/save', (req, res) => {
  const inputName = req.body.humanName
  let result = 0

  const nameNum = functions.namesToNumber(inputName)
  console.log(functions.namesToNumber(inputName))
  if (nameNum <= 4) {
    result = 1
  } else if (nameNum > 4 && nameNum <= 8) {
    result = 2
  } else if (nameNum > 8 && nameNum <= 12) {
    result = 3
  } else if (nameNum > 13 && nameNum <= 16) {
    result = 4
  } else if (nameNum > 16 && nameNum <= 20) {
    result = 5
  } else if (nameNum > 20 && nameNum <= 24) {
    result = 6
  } else if (nameNum > 24 && nameNum <= 28) {
    result = 7
  } else if (nameNum === 13) {
    result = 8
  } else if (nameNum > 28 && nameNum <= 36) {
    result = 9
  } else if (nameNum > 36) {
    result = 10
  }

  functions.getFileContents(lib, (err, contents) => {
    if (err) {
      return res.send(err.message).status(500)
    }

    findId = contents.unicorns.find((unicorn) => {
      return unicorn.id === result
    })

    functions.getFileContents(hist, (err, contents) => {
      if (err) {
        return res.send(err.message).status(500)
      }
      console.log(findId)
      findId.human = req.body.humanName
      delete findId.id

      contents.submissions.push(findId)
      let edited = JSON.stringify(contents.submissions)
      edited = `{"submissions": ${edited}}`
      fs.writeFile(hist, edited, (err) => {
        if (err) {
          return err
        }
      })
    })

    res.redirect('myunicorn')
  })
})
routes.get('/myunicorn', (req, res) => {
  console.log(findId)
  res.render('myunicorn', findId)
})

routes.get('/history', (req, res) => {
  functions.getFileContents(hist, (err, contents) => {
    if (err) {
      return res.send(err.message).status(500)
    }
    console.log(contents)
    res.render('history', contents)
  })
})
