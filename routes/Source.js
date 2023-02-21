const express = require("express")
const Quote = require("../model/Quotes")
const router = express.Router()

router.get("/", async (req, res)=> {
  if (Object.keys(req.query).length ===0){
    await Quote.findOne().then(data => {res.send(data)})
  }
  Quote.findOne(req.query).then(data=> {res.send(data)})
})

module.exports = router