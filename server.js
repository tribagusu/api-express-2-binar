const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("halo hai")
})

const PORT = 8000

// listen untuk mendengarkan jalan di port berapa
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
})
