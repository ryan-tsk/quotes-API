const mongoose = require("mongoose")

const QuoteSchema = new mongoose.Schema({
  source: {
    type: String,
    required: true
  },
  genre:{
    type: String,
    required: true
  },
  originator:{
    type: String,
    required: true
  },
  quote:{
    type: String,
    required: true
  },
  id:{
    type: Number,
    required: true
  }
})

const Quote = mongoose.model("QuoteData", QuoteSchema, "quoteData")
module.exports = Quote