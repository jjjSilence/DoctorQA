const config = require('../config.js')
const util = require('/util.js')

function baseRequest(path, myMap) {
  var api = config.host + path;
  var jsonParams = util.signature(myMap);
  console.log('api----------->' + api);
  console.log('加密后参数----->' + JSON.stringify(jsonParams));
  return new Promise((resolve, reject) => {
    wx.request({
      url: api,
      data: jsonParams,
      header: { 'Content-Type': 'json' },
      success: function (res) {
        console.log('----------------------request success start----------------------');
        console.log(res.data);
        resolve(res);
        console.log('---------------------- request success end ----------------------');
      },
      fail: function (err) {
        console.log('----------------------request failure start----------------------');
        console.log(err);
        reject(err)
        console.log('---------------------- request failure end ----------------------');
      }
    })
  })
}

/**
 * 获取openid
 */
function getUserOpenId(code) {
  var myMap = new Map();
  myMap.set('code', code);
  // myMap.set('appid', 'wx0ddae34af7f215d9');
  // myMap.set('appkey', 'wx0ddae34af7f215d9');
  var json = util.map2Json(myMap);
  console.log('加密前参数----->' + JSON.stringify(json));
  return baseRequest('wechat/getUserInfo', myMap).then(res => res.data)
}

module.exports = {
  getUserOpenId
}