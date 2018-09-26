// pages/index/index.js
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentSelect: 0,
    pagesId: [],
    pageIndexs: [],
    pageNumber: 0,
    tagPercent: 100
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 显示loading
    wx.showLoading({
      title: '拼命加载中....',
      mask: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
    // 云端读取图片地址
    const db = wx.cloud.database();
    db.collection('picAddresses').get({
      // 读取成功
      success: function (res) {
        var count = res.data[0].count
        var addresses = []
        for (var x = 1; x <= count; x++) {
          var address = res.data[0][x]
          addresses.push(address)
        }
        var index = 1;
        var newPageIndexs = [];
        while (index <= count) {
          newPageIndexs.push(index);
          index++;
        }
        // 输出常量
        that.setData({
          pagesId: addresses,
          pageIndexs: newPageIndexs,
          pageNumber: count,
          tagPercent: 100 / count,
        })
      }
    })
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
  // onShareAppMessage: function () {

  // },
  // 同步swiper的index给tabbar
  bindSwiper: function (e) {
    var that = this;
    that.setData({ currentSelect: e.detail.current });
  },
  // 按照tabbar的index同步执行swiper
  switchPage: function (e) {
    var that = this;
    var current = e.target.dataset.current;
    if (this.data.currentSelect != current) {
      that.setData({
        currentSelect: current
      })
    }
  },
  //预览图片
  previewImage: function (e) {
    var index = e.currentTarget.dataset.index;
    var pageUrls = this.data.pagesId;
    wx.previewImage({
      current: pageUrls[index],
      urls: pageUrls,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 读取图片成功
  imageOnLoad: function(){
    wx.hideLoading()
  },
  // 授权按钮功能
  authorize: function(e){
    wx.getUserInfo({
      withCredentials: true,
      lang: '',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})