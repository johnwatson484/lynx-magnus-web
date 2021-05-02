const agent = require('skywalking-backend-js')

function startMonitoring () {
  if (process.env.SW_AGENT_COLLECTOR_BACKEND_SERVICES) {
    agent.default.start()
  }
}

module.exports = startMonitoring
