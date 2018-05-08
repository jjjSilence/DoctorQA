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

    // 登录
    that.getUserOpenId(function (err, openid) {
      if (err){
        console.log('callback--->' + '请求失败')
      }else{
        console.log('callback--->' +openid)
      }
     
    });

    // 用户信息的授权请求
    wx.getSetting({
      success(res) {
        console.log('success wx.getSetting');
        // 查询用户是否授权'scope.userInfo'
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo,不会弹框
          console.log('已经授权')
          that.getuserInfo();
        } else {
          // 还未授权，弹框请求用户授权
          console.log('还未授权，弹框请求用户授权');
          that.getuserInfo();
        }
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
    hasUserInfo: false,
    userInfo: null,
    openid: null,
    a: 'a'
  },

  // 获取openid 
  getUserOpenId: function (callback) {
    var that = this
    if (that.globalData.openid) {
      callback(null, that.globalData.openid)
    } else {
      wechat.login()
        .then(res => {
          console.log(res.code)
          project.getUserOpenId(res.code)
            .then(res => {
              var openid = res.openid;
              that.globalData.openid = openid;
              callback(null, openid);
            })
            .catch(err => {
              callback(err, null);
            })
        })
    }
  },

  // 获取用户信息
  getuserInfo: function () {
    wechat.getUserInfo()
      .then(res => {
        console.log('授权成功');
        this.globalData.userInfo = res.userInfo
        if (this.userInfoReadyCallback) {
          this.userInfoReadyCallback(res)
        }
      }).catch(res => {
        console.log("login faile" + res.errMsg)
      })
  }
})