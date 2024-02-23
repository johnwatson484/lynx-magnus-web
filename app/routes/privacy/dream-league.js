module.exports = [{
  method: 'GET',
  path: '/privacy/dreamleague',
  handler: (_request, h) => {
    return h.view('privacy/dream-league')
  }
}]
