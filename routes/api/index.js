const router = require('express').Router()
const accountsRouter = require('./accounts')

module.exports = [router.use('/accounts', accountsRouter)]
