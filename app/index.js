const startMonitoring = require('./apm')
const createServer = require('./server')

startMonitoring()

createServer()
  .then(server => server.start())
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
