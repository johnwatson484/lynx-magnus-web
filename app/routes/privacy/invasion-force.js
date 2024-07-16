module.exports = [{
  method: 'GET',
  path: '/privacy/invasion-force',
  handler: (_request, h) => {
    return h.view('privacy/invasion-force')
  },
}]
