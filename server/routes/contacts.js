const express = require('express')

const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
  db.getContacts()
    .then((results) => {
      res.json({ results })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/add', (req, res) => {
  db.addContacts(req.body)
    .then(() => {
      res.redirect('/add')
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
