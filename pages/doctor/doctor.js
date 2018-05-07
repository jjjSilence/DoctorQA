// pages/doctor/doctor.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 底部items
    titles: ['我的问题', '个人中心'],
    // 底部tab的索引
    showIndex: "0",
    // 我的问题tabs
    navTab: ['未答', '已答', '全部'],
    // 我的问题tab的索引
    currentTab: "0",

  },

  // 我的问题--顶部tab的切换
  switchTab: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    });
  },

  /**
   * 底部tab--跳转到相应界面
   */
  goPage: function (e) {
    var index = e.currentTarget.dataset.idx;
    this.setData({
      showIndex: index
    })
    wx: wx.setNavigationBarTitle({
      title: this.data.titles[index]
    })
  },

  onPullDownRefresh:function() {

    console.log("好用不?")
    wx.showToast({
      title: '没事儿别乱拉',
      icon: 'success',
      duration: 2000
    })

    wx.stopPullDownRefresh();  

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.showNavigationBarLoading();
    // 
    // wx.showLoading({ title: '拼命加载中...' })
    // setTimeout(function(){
    // wx.hideLoading();
    // }, 2000)
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