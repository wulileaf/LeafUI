// pages/tabbar/test.js
Page({

  data: {
    // setTime: '',
    // num: 0,
    // showpic: null,
    // hidepic: null,
    list: ['啦啦啦', '嚯嚯嚯'],
    lists: ['啦啦啦', '嚯嚯嚯'],
    page: 1,
    region: ['广东省', '广州市', '海珠区'],
    date: '2016-09-01',
    time: '12:01',
    customItem: '全部'
  },

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

  onReady: function () {
    this.setData({
      op: 1,
      mr: 0
    })
  },

  onShow: function () {

  },

  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },

  bindTimeChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  luiPickerChange(e) {
    console.log("------------点击了---------------" + JSON.stringify(e))
  }
})