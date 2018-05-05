/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

var host = "14592619.qcloud.la"

var config = {

  // 下面的地址配合云端 Server 工作
  host,

  // 登录地址，用于建立会话
  loginUrl: 'https://${host}/login',

  // 测试的请求地址，用于测试会话
  requestUrl: 'https://${host}/testRequest',

  // 用code换取openId
  openIdUrl: 'https://${host}/openid'
};

// 模块化：对外暴露的接口
// https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxs/01wxs-module.html
module.exports = config
