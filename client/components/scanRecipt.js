import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {createWorker} from 'tesseract.js'

export default function ScanRecipt() {
  const worker = createWorker({
    logger: m => console.log(m)
  })
  const doOCR = async () => {
    await worker.load()
    await worker.loadLanguage('eng')
    await worker.initialize('eng')
    const {data: {text}} = await worker.recognize(uploadedImg)
    setOcr(text)
  }
  const [ocr, setOcr] = useState('Recoginizing...')
  useEffect(() => {
    doOcr()
  })
  return <div className="ScanRecipt">{ocr}</div>
}
