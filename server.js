const express = require("express")
const userRouter = require("./routes/users")

// panggil express
const app = express()
// panggil express json
app.use(express.json())

app.get("/", (req, res) => {
  res.send("halo hai")
})

app.use("/users", userRouter)

const PORT = 8000

// listen untuk mendengarkan jalan di port berapa
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
})
