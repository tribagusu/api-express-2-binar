// const express = require("express")

// const router = express()

// let dataUser = []

// //_ get data
// router.get("/", (req, res) => {
//   res.send(dataUser)
// })

// //_ post data
// router.post("/", (req, res) => {
//   const payload = req.body
//   dataUser.push(payload)
//   res.send("data berhasil ditambahkan")
// })

// //_ get single data
// router.get("/:id", (req, res) => {
//   const param = req.params
//   const data = dataUser.find((item) => item.id == param.id)
//   res.send(data)
// })

// //_ delete data
// router.delete("/:id", (req, res) => {
//   const param = req.params
//   const data = dataUser.filter((item) => item.id != param.id)
//   res.send(data)
// })

// //_ update data
// router.put("/:id", (req, res) => {
//   const param = req.params
//   const newName = req.body.name
//   const newUsers = dataUser.map((item) => {
//     return item.id == param.id ? { ...item, name: newName } : item
//   })
//   dataUser = newUsers
//   res.send(newUsers)
// })

// module.exports = router
