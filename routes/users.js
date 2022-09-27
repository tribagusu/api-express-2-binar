const express = require("express")

const router = express()

const dataUser = [
  {
    id: 1,
    name: "sholjum",
    role: "user",
  },
]

router.get("/", (req, res) => {
  res.send(dataUser)
})

module.exports = router
