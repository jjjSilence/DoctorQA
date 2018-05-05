const fetch = require('./fetch')
const config = require('././config')

function baseRequest(api, path, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: '${api}/${path}',
      data: Object.assign({}, params),
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}

function getUserOpenId(code) {
  return baseRequest(config.openIdUrl, null, code).then(res => res.data)
}