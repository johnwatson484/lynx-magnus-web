module.exports = [{
  method: 'GET',
  path: '/',
  handler: (_request, h) => {
    return h.view('home', { location: 'home' })
  }
}]
