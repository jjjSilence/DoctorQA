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

module.exports = {
  login,
  getUserInfo
}