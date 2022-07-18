const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  db.getDates()
    .then((result) => {
      res.json(result)
    })
    .catch(() => {
      res.status(500).send('server error')
    })
})

module.exports = router
