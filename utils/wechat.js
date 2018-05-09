// 微信登录
function login() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: resolve, fail: reject
    })
  })
}

// 获取用户信息
function getUserInfo() {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({
      success: resolve, fail: reject
    })
  })
}

function testPromise() {
  return new Promise((resolve, reject) => {
    login()
      .then(res => {

        var json = {};
        var expert = {};
        expert['name'] = '李云';
        expert['年纪'] = '23';
        expert['code'] = '0';

        json['data'] = expert;
        json['msg'] = '请求成功'
       
        res['data'] = json;
        res['errcode'] = 200;
        if(res.data.data.code==0){
          console.log('res')
          resolve(res.data.data)
        }
      })
  })

}

module.exports = {
  login,
  getUserInfo,
  testPromise
}