// pagelayoutPc/userMsg/userMsg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    customNavBarHeight: 0,
    statusbar: 0,
    navigationbar: 0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const res = wx.getSystemInfoSync()
    var statusbarH = res.statusBarHeight;// 获取状态栏高度
    this.setData({
      statusbar: statusbarH
    })
    console.log("1----" + statusbarH)
    let customNavBarHeight = res.statusBarHeight + res.screenWidth * 88 / 750; // 记得转换
    this.setData({
      customNavBarHeight: customNavBarHeight,
      navigationbar: customNavBarHeight - statusbarH
    })

    console.log("2----" + customNavBarHeight + "--------" + this.data.navigationbar)
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