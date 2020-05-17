const express = require('express')
const app = express()
const fs = require('fs')
const multer = require('multer')
const {TessaractWorker} = require('tesseract.js')

const worker = new TessaractWorker()

//cb === callback
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
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

app.post('/upload', (req, res) => {
  upload(req, res, err => {
    if (err) return console.log('this is the problem =>', err)

    fs.readFile(`./uploads/${req.file.originalname}`, (err, data) => {
      if (err) return console.log('this is the problem =>', err)

      worker
        .recognize(data, 'eng', {tessjs_create_pdf: '1'})
        .progress(progress => {
          console.log(progress)
        })
        .then(result => {
          res.redirect('/download')
        })
        .finally(() => worker.terminate())
    })
  })
})

app.get('/download', (req, res) => {
  const file = `${__dirname}/tesseract.js-ocr-result.pdf`
  res.download(file)
})
