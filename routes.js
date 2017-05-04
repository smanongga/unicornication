const express = require('express')
const routes = express.Router()


 const functions = require('./functions')
 const lib = ("./library.json")



module.exports = routes



 routes.get('/', (req,res) => {

 functions.getFileContents(lib, (err,contents) =>{
 if(err){
     return res.send(err.message).status(500)
 }
 console.log(contents)
 res.render('layouts/main', contents)

 })
