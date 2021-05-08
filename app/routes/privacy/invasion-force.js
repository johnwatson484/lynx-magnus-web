module.exports = [{
  method: 'GET',
  path: '/privacy/invasion-force',
  handler: (request, h) => {
    return h.view('privacy/invasion-force')
  }
}]
