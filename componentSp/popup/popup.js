Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  out: function() {
    this.setData({
      showModal: false
    })
  },

  bindKown() {
    this.setData({
      showModal: false
    })
  },

  bindCancel() {
    console.log("点击了取消")
    this.setData({
      showModal: false
    })
  },

  btn_show() {
    this.setData({
      showModal: true
    })
  }
})


// 问题:
// 1，知道了和取消这个高度这里没有做固定限制；这里面在不同机型上呈现的高度会不一样，可以根据自己实际情况调整。
// 2，当图片的高度设置为负值时，下面对应的高度需要做一定的调整；要不然会导致弹出框变形。
// 3，当蒙层遇到内容可以滑动的时候，会出现显示异常的问题；这里已经解决。
// 4，适配的问题。