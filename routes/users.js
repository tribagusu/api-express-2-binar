const express = require("express")

const router = express()

const dataUser = [
  {
    id: 1,
    name: "shol",
    role: "user",
  },
  {
    id: 2,
    name: "jum",
    role: "user",
  },
  {
    id: 3,
    name: "yay",
    role: "user",
  },
]

// get data
router.get("/", (req, res) => {
  res.send(dataUser)
})

// post data
router.post("/", (req, res) => {
  const payload = req.body
  dataUser.push(payload)
  res.send("data berhasil ditambahkan")
})

// get single data
router.get("/:id", (req, res) => {
  const userId = req.params
  const user = dataUser.find((item) => (item.id = userId.id))
  res.send(user)
})

module.exports = router
