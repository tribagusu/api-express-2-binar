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

router.post("/", (req, res) => {
  const payload = req.body
  const sqlQuery = `INSERT INTO user(user_name, user_email, user_password) VALUES (?,?,?)`

  db.query(
    sqlQuery,
    [payload.user_name, payload.user_email, payload.user_password],
    (error, result) => {
      if (error) {
        console.log(error)
      } else {
        res.send(result)
      }
    }
  )
})

module.exports = router
