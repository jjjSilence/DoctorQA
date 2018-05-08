// pages/myquestions/myquestions.js
const data = require('../data/data_questions.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTab: ['全部', '已答', '未答'],
    currentTab: "0",
    tipmsg: '请输入问题内容',
    unAnswerQues: data.unAnswerQues.data,
    hiddenHeader: false,
    hiddenFooter: true,
    unAnswer: false,
  },

  switchTab: function (e) {
    var index = e.currentTarget.dataset.idx
    this.setData({
      currentTab: index,
      unAnswer: index == 2 ? true : false,
    });
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