const express = require("express")
const Quote = require("../model/Quotes")
const router = express.Router()

router.get("/", async (req, res)=> {
  const quoteData = await Quote.findOne()
  res.send(quoteData)
})

module.exports = router