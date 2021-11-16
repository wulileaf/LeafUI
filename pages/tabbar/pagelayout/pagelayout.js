// pages/tabbar/pagelayout/pagelayout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagesurl: [
      'https://t7.baidu.com/it/u=631924955,996383527&fm=193&f=GIF',
      'https://t7.baidu.com/it/u=3399334306,3391085092&fm=193&f=GIF',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fdc%2Fd2%2Fe3%2Fdcd2e350f4fcae5d336b04756417c6dd.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634955691&t=a4e8e1df8c9cd0da7e283dea491a5a12'
    ],
    pingou: [{
      "programmeId": 1,
      "programmeImage": ["https://t7.baidu.com/it/u=1758662225,3275993814&fm=193&f=GIF"],
      "programmeName": "韭菜"
    }, {
      "programmeId": 2,
      "programmeImage": ["https://t7.baidu.com/it/u=2218119053,2588246252&fm=193&f=GIF"],
      "programmeName": "菠菜"
    }, {
      "programmeId": 3,
      "programmeImage": ["https://t7.baidu.com/it/u=693761745,3063141380&fm=193&f=GIF"],
      "programmeName": "香葱"
    }, {
      "programmeId": 4,
      "programmeImage": ["https://t7.baidu.com/it/u=2285878850,295087639&fm=193&f=GIF"],
      "programmeName": "生菜"
    }, {
      "programmeId": 5,
      "programmeImage": ["https://t7.baidu.com/it/u=1696138720,546733917&fm=193&f=GIF"],
      "programmeName": "油菜"
    }, {
      "programmeId": 6,
      "programmeImage": ["https://t7.baidu.com/it/u=4278887619,2170418697&fm=193&f=GIF"],
      "programmeName": "辣椒"
    }, {
      "programmeId": 7,
      "programmeImage": ["https://t7.baidu.com/it/u=631924955,996383527&fm=193&f=GIF"],
      "programmeName": "冬瓜"
    }],
    advertTwoData: [{
      color: "#7AB900",
    }, {
      color: "#9DB9D1",
    }, {
      color: "#78BBFE",
    }, {
      color: "#E67A56",
    }],

    duration: "500",
    imgUrls: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0ff3dc30027f3b615bfe03f1d306ee5.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2320573b3be643e29f5270a97e1a9c1d.jpg?thumb=1&w=720&h=360'
    ],
    current: 0,
    bannerData: [{
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360',
        id: 0
      },{
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
        id: 1
      },{
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0ff3dc30027f3b615bfe03f1d306ee5.jpg?thumb=1&w=720&h=360',
        id: 2
      },
    ],
    currentIndex: 0,
    pingouhuadong: [{
      programmeName: "男装"
    }, {
      programmeName: "女装"
    }, {
      programmeName: "男鞋"
    }, {
      programmeName: "女鞋"
    }, {
      programmeName: "童装"
    }, {
      programmeName: "包包"
    }, {
      programmeName: "厨卫"
    }, {
      programmeName: "手机"
    }, {
      programmeName: "箱包"
    }, {
      programmeName: "饰品"
    }, {
      programmeName: "家纺"
    }]
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

  bannerChange: function (e) {
    let current = e.detail.current;
    this.setData({
      currentIndex: current
    })
  }
})