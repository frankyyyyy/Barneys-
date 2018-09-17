//app.js
App({
  globalData: {
    menuList: [],
    current: [],
    showButton: true
  },
  onLaunch: function () {
    wx.showLoading({
      title: '加载中',
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    var data = require('utils/data.js');
    var list = data.mtData().list;
    this.globalData.menuList = list;
    this.globalData.current = data.today();
    wx.hideLoading();
  }
})