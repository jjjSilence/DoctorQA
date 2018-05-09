// pages/myquestions/myquestions.js
const data = require('../data/data_questions.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tab数据
    navTab: ['全部', '已答', '未答'],
    // 选择tab索引
    currentTab: "0",
    // 搜索框的提示语
    tipmsg: '请输入问题内容',
    // [全部list,已答list, 未答list]
    allQuesList: new Array(),
    // [已答type，已答type, 未答type]
    types: [false,false,true],
    // 显示当前界面的数据列表
    questionList: null,
    // 显示当前界面的数据列表
    questionStr: null,
    // template的设置
    setting: {
      // 是否隐藏刷新动画
      hiddenHeader: false,
      // 是否隐藏加载动画
      hiddenFooter: true,
      // 是否隐藏回复按钮
      hiddenReplay: true,
    },

  },

  switchTab: function (e) {
    var index = e.currentTarget.dataset.idx
    this.setData({
      currentTab: index,
      questionList: this.data.allQuesList[index],
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
    var unAnswerQues = data.unAnswerQues.data;
    var answerQues = data.answerQues.data;
    var array = this.data.allQuesList;

    array.push(answerQues);
    array.push(answerQues);
    array.push(unAnswerQues);

    this.setData({
      questionList: array[0]
    })
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