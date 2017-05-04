const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')

const router = require('./routes')

const server = express()

  //  middleware
server.engine('hbs', hbs({
  extname : 'hbs',
  defaultLayout: 'main'

}))

server.set('view engine', 'hbs')

server.use(express.static('public'))
server.use(bodyParser.urlencoded({extended : false}))
server.use('/', router)

module.exports = server
