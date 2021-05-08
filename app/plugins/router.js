const routes = [].concat(
  require('../routes/home'),
  require('../routes/privacy/team-picker'),
  require('../routes/privacy/invasion-force'),
  require('../routes/public')
)

module.exports = {
  plugin: {
    name: 'router',
    register: (server, options) => {
      server.route(routes)
    }
  }
}
