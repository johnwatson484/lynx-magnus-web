module.exports = [{
  method: 'GET',
  path: '/privacy/teampicker',
  handler: (request, h) => {
    return h.view('privacy/teampicker')
  }
}]
