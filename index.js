const express = require("express")
const mongoose = require("mongoose")
const sourceRoute = require("./routes/Source")
const app = express()
const PORT = 3000

mongoose.connect("mongodb+srv://ryantsk:hFadlvvuHEEtqQir@atlascluster.y0jgvbo.mongodb.net/quotes?retryWrites=true&w=majority", {
  useNewURLParser:true 
})

app.use("/source", sourceRoute)

app.listen(PORT, () => {
  console.log("Server running on port:" + PORT)
})