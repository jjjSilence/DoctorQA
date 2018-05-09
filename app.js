//app.js
const config = require('config.js')
const wechat = require('./utils/wechat.js')
const project = require('./utils/project.js')

App({

  onLaunch: function () {

    console.log('onLaunch');

    var that = this;

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 用户信息的授权请求
    wx.getSetting({
      success(res) {
        console.log('success wx.getSetting');
        // 查询用户是否授权'scope.userInfo'
        // if (res.authSetting['scope.userInfo']) {
        //   // 已经授权，不会弹框
        //   console.log('已经授权')
        //   that.getUserOpenid();
        // } else {
        //   // 还未授权，弹框请求用户授权
        //   console.log('还未授权，弹框请求用户授权');
        //   that.getUserOpenid();
        // }
      },
      fail() {
        console.log('fail wx.getSetting')
      },
      complete() {
        console.log('complete wx.getSetting')
      }
    })
  },

  globalData: {
    // 微信登录code
    code: null,
    // 微信用户信息
    userInfo: null,
    // 查询登录状态
    openid: null,
    // 是否是专家登录
    doctor: true,
    // 专家信息
    doctorInfo: null
  },

  // 获取用户openid
  getUserOpenid() {
    var that = this;
    that.getLoginCode().then(function (data) {
      console.log('code=====>' + data)
      return that.getUserInfo();
    }).then(function (data) {
      console.log('userInfo=====>' + JSON.stringify(data));
      return that.getUserData();
    }).then(function (data) {

      that.globalData.openid = JSON.parse(data).openid
      that.globalData.doctorInfo = JSON.parse(data).expert
      console.log('openid=====>' + that.globalData.openid);
    })
  },

  // 请求后台接口，获取用户信息
  getUserData() {
    var code = this.globalData.code;
    var userInfo = this.globalData.userInfo;
    return new Promise((resolve, reject) => {
      project.getUserData(code, userInfo.nickName, userInfo.gender, userInfo.avatar).then(res => {
        console.log('userData=====>' + res);
        resolve(res)
      }).catch(err => {
        console.log('err=====>' + err);
      })
    })
  },

  // 获取登录code
  getLoginCode: function () {
    return new Promise((resolve, reject) => {
      wechat.login()
        .then(res => {
          console.log(res)
          this.globalData.code = res.code;
          resolve(res.code)
        })
    })
  },


  // 获取用户信息
  getUserInfo: function () {
    return new Promise((resolve, reject) => {
      if (this.globalData.userInfo == null) {
        wechat.getUserInfo()
          .then(res => {
            var userInfo = res.userInfo;
            resolve(res.userInfo);
            this.globalData.userInfo = userInfo;
            if (this.userInfoReadyCallback) {
              this.userInfoReadyCallback(res)
            }
          }).catch(res => {
            reject(res);
            console.log("getUserInfo faile" + res.errMsg)
          })
      } else {
        resolve(this.globalData.userInfo);
      }
    })
  }

})
