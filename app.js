//app.js
App({
  globalData: {
  },
  onLaunch: function () {
    var that = this
    wx.clearStorageSync();
    wx.cloud.init({
      traceUser: true
    })
  }
})