const express = require("express")
const app = express()
const PORT = 3000

const sourceRoute = require("./routes/Source")

app.use("/source", sourceRoute);

app.listen(PORT, () => {
  console.log("Server running on port:" + PORT)
})