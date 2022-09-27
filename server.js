const express = require("express")
const userRouter = require("./routes/users")

//# panggil express
const app = express()

//# panggil express json
app.use(express.json())

app.get("/", (req, res) => {
  res.send("halo hai")
})

// import router user
app.use("/users", userRouter)

// listen untuk mendengarkan jalan di port berapa
const PORT = 8000
app.listen(PORT, () => {
  console.log(`running on port ${PORT}`)
})
