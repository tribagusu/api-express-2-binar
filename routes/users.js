const express = require("express")
const router = express()
const { db } = require("../config/dbConfig")

router.get("/", (req, res) => {
  const sqlQuery = "SELECT * FROM user"

  db.query(sqlQuery, (error, result) => {
    if (error) {
      console.log(error)
    } else {
      res.send(result)
    }
  })
})

router.get("/:id", (req, res) => {
  const params = req.params
  const sqlQuery = `SELECT * FROM user WHERE user_id = ${params.id}`

  db.query(sqlQuery, (error, result) => {
    if (error) {
      console.log(error)
    } else {
      res.send(result)
    }
  })
})

module.exports = router
