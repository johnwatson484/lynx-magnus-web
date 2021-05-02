const agent = require('skywalking-backend-js')

function startMonitoring () {
  if (process.env.SKYWALKING_COLLECTOR_ADDRESS) {
    agent.default.start({
      serviceName: process.env.SKYWALKING_SERVICE_NAME,
      collectorAddress: process.env.SKYWALKING_COLLECTOR_ADDRESS
    })
  }
}

module.exports = startMonitoring
