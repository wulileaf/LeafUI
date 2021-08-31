// pages/tabbar/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // setTime: '',
    // num: 0,
    // showpic: null,
    // hidepic: null,


    list: ['啦啦啦', '嚯嚯嚯'],
    lists: ['啦啦啦', '嚯嚯嚯'],
    page: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var _this = this;
    // var num = _this.data.num;
    // var animation = wx.createAnimation({}) //创建一个动画实例
    // _this.setData({
    //   //创建一个计时器
    //   setTime: setInterval(function () {
    //     _this.setData({
    //       num: num++
    //     })

    //     if (num > 2) {
    //       num = 0;
    //     }
    //     //淡入
    //     animation.opacity(1).step({
    //       duration: 1500
    //     }) //描述动画
    //     _this.setData({
    //       showpic: animation.export()
    //     }) //输出动画
    //     //淡出
    //     animation.opacity(0).step({ duration: 1500 })
    //     _this.setData({ hidepic: animation.export() })
    //   }, 4000)
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      op: 1,
      mr: 0
    })
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
})