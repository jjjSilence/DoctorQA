const config = require('../config.js')
const util = require('/util.js')

function baseRequest(path, myMap) {
  var api = config.openIdUrl;
  var jsonParams = util.signature(myMap);
  console.log('加密后参数-----' + JSON.stringify(jsonParams));
  return new Promise((resolve, reject) => {
    wx.request({
      url: '${api}/${path}',
      data: jsonParams,
      header: { 'Content-Type': 'json' },
      success: resolve,
      fail: reject
    })
  })
}



function getUserOpenId(code) {
  var myMap = new Map();
  myMap.set('code', code);
  myMap.set('appid', 'wx0ddae34af7f215d9');
  var json = util.map2Json(myMap);
  console.log('加密前参数-----' + JSON.stringify(json));
  // return 'dddd';
  return baseRequest('wechat/getUserInfo', myMap).then(res => res.data)
}

module.exports = {
  getUserOpenId
}