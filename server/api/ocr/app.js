const express = require('express')
const app = express()
const fs = require('fs')
const multer = require('multer')
const {TessaractWorker} = require('tesseract.js')

const worker = new TessaractWorker()

//cb === callback
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, './uploads')
  },
  filename: (req, res, cb) => {
    cb(null, req.file)
  }
})

const upload = multer({storage: storage}).single('avatar')
app.set('view engine', 'ejs')

// app.get('/uploads', (req, res) => {
//   console.log("heyyy!!!")
// })

//ROUTES

app.get('/api/receipt', (req, res) => {
  res.render('index')
})
