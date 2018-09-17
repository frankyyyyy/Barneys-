// pages/index/index.js
var app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    pageHeight: 0,
    pageWidth: 0,
    currentSelect: 0,
    address: '',
    head: 'https://drive.google.com/uc?export=view&id=',
    pagesId: [],
    pagesUrls: [],
    pageIndexs: [],
    pageNumber: 0,
    tagPercent: 100,
    showButton: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this  
    // 读取当前content
    that.setData({
      pagesId: app.globalData.current.pagesId
    })
    // console.log(data.searchmtdata('2018/9/15').pagesId);
    // 处理pageIndexs
    for (var id of this.data.pagesId) {
      this.data.pagesUrls.push(this.data.head + id)
    }
    var length = this.data.pagesUrls.length;
    var count = 1;
    var newPageIndexs = [];
    while (count <= length) {
      newPageIndexs.push(count);
      count++;
    }
    // 处理pagesUrls
    var pageUrls = [];
    var pageIds = this.data.pagesId;
    var head = this.data.head;
    for (var id of pageIds) {
      pageUrls.push(head + id);
    }
    // 输出常量
    that.setData({
      pagesUrls: pageUrls,
      pageIndexs: newPageIndexs,
      pageNumber: length,
      tagPercent: 100 / length,
      showButton: app.globalData.showButton
    })
    wx.showLoading({
      title: '拼命加载中....',
      mask: true,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
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
    var pageUrls = this.data.pagesUrls
    wx.previewImage({
      current: pageUrls[index],
      urls: pageUrls,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  //从前的版本
  menu: function (e) {
    wx.navigateTo({
      url: '../menu/menu',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  // 读取图片成功
  imageOnLoad: function(){
    wx.hideLoading()
  }
})