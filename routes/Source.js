const express = require("express")
const router = express.Router()
const fs = require('fs')

router.get("/", (req, res)=> {
  const rawData = fs.readFileSync("model/test_data.json")
  const data = JSON.parse(rawData)
  res.json(data)
})

module.exports = router