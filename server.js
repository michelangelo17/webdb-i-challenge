const express = require('express')
const apiRouter = require('./routes/api')

const server = express()

server.use('/api', express.json(), apiRouter)

module.exports = server
