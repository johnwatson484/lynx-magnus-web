const { agent } = require('skywalking-backend-js')

function startMonitoring () {
  if (process.env.SKYWALKING_COLLECTOR_ADDRESS) {
    agent.start({
      serviceName: process.env.SKYWALKING_SERVICE_NAME,
      collectorAddress: process.env.SKYWALKING_COLLECTOR_ADDRESS
    })
  }
}

module.exports = startMonitoring
