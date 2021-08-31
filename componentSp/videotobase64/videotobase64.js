// componentSp/videotobase64/videotobase64.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },

  // 选择视频
  btnVideo() {
    var that = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      camera: 'back',
      success(res) {
        console.log(res.tempFilePath)
        if (res.tempFilePath != "") {
          that.videotobase64(res.tempFilePath);
        }
      },
      fail(res) {

      }
    })
  },


  videotobase64(url) {
    wx.getFileSystemManager().readFile({
      filePath: url,
      encoding: 'base64',
      success(res) {
        console.log(res.data)
      }
    });
  }
})