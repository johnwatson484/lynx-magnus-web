module.exports = [{
  method: 'GET',
  path: '/privacy/teampicker',
  handler: (_request, h) => {
    return h.view('privacy/team-picker')
  },
}]
