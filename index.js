const server = require('./server.js')

const PORT = process.env.PORT || 4000

server.use((err, req, res, next) =>
  res.status(500).json({ message: 'Something went wrong', error: err.message })
)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})
