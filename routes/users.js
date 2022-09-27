const express = require("express")

const router = express()

const dataUser = [
  {
    id: "2",
    name: "shol",
    role: "user",
  },
]

router.get("/", (req, res) => {
  res.send(dataUser)
})

router.post("/", (req, res) => {
  const payload = req.body
  dataUser.push(payload)
  res.send("data berhasil ditambahkan")
})

module.exports = router
