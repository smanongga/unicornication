const express = require('express')
const routes = express.Router()
<<<<<<< HEAD



routes.get('/', function(req, res) {
  res.render('main')
})

=======
// const functions = require('./functions')
// const lib = ("./library.json")
>>>>>>> a4e989a1bb92c8ff8ffd71f9759e90f1d6b497ef

module.exports = routes



 routes.get('/', (req,res) => {
 functions.getFileContents('', (err,contents) =>{
 if(err){
     return res.send(err.message).status(500)
 }
 console.log(contents)
 res.render('.layouts/main', contents)

   })
 })
