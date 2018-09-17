//app.js
App({
  globalData: {
    current: []
  },
  onLaunch: function () {
    var data = require('utils/data.js');
    this.globalData.current = data.today();
  }
})