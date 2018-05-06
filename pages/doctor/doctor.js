// pages/doctor/doctor.js
import temp from '../template/template.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['我的问题', '个人中心'],
    tipmsg: '请输入问题内容',
    currentTab: "0",
    item: {
      tipmsg: '请输入问题内容',
      currentTab: "0",
      navTab: ['未答', '已答', '全部']
    }
  },

  click: function () {
    temp.switchTab("输出消息");
  },

  /**
   * 跳转到相应界面
   */
  goPage: function (e) {
    var index = e.currentTarget.dataset.idx;
    this.setData({
      currentTab: index
    })
    wx: wx.setNavigationBarTitle({
      title: this.data.titles[index]
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})