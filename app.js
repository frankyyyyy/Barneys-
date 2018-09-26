//app.js
App({
  globalData: {
  },
  onLaunch: function () {
    wx.clearStorageSync();
    wx.cloud.init({
      traceUser: true
    })
  }
})