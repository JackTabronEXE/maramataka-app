const express = require('express')
const path = require('path')

const server = express()

const dateRoutes = require('./routes/dateroutes')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
server.use('/api/v1', dateRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
