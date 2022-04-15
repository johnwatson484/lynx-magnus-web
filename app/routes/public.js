module.exports = [{
  method: 'GET',
  path: '/assets/{path*}',
  handler: {
    directory: {
      path: [
        'app/public/css',
        'app/public/scripts',
        'app/public/assets',
        'app/public/images'
      ]
    }
  }
}, {
  method: 'GET',
  path: '/app-ads.txt',
  handler: function (_request, h) {
    return h.file('app/public/assets/app-ads.txt')
  }
}]
