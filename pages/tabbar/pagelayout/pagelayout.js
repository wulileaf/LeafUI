// pages/tabbar/pagelayout/pagelayout.js
var tools = require('../../../utils/basetools.js')

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
    }, {
      src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
      id: 1
    }, {
      src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0ff3dc30027f3b615bfe03f1d306ee5.jpg?thumb=1&w=720&h=360',
      id: 2
    },
    ],
    currentIndex: 0,
    cainixihuan: [{
      "name": "2019款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p1.jpg",
      "store": "自营",
      "price": "2600",
      "appraise": "2.6"
    }, {
      "name": "Apple XS Max", // 2018款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色
      "img": "/images/p2.jpg",
      "store": "自营",
      "price": "6499",
      "appraise": "0.6"
    }, {
      "name": "2020款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p3.jpg",
      "store": "自营",
      "price": "13999",
      "appraise": "7.6"
    }, {
      "name": "2019款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p1.jpg",
      "store": "自营",
      "price": "2600",
      "appraise": "2.6"
    }, {
      "name": "Apple XS Max", // 2018款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色
      "img": "/images/p2.jpg",
      "store": "自营",
      "price": "6499",
      "appraise": "0.6"
    }, {
      "name": "2020款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p3.jpg",
      "store": "自营",
      "price": "13999",
      "appraise": "7.6"
    }, {
      "name": "2019款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p1.jpg",
      "store": "自营",
      "price": "2600",
      "appraise": "2.6"
    }, {
      "name": "Apple XS Max", // 2018款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色
      "img": "/images/p2.jpg",
      "store": "自营",
      "price": "6499",
      "appraise": "0.6"
    }, {
      "name": "2020款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p3.jpg",
      "store": "自营",
      "price": "13999",
      "appraise": "7.6"
    }, {
      "name": "2019款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p1.jpg",
      "store": "自营",
      "price": "2600",
      "appraise": "2.6"
    }, {
      "name": "Apple XS Max", // 2018款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色
      "img": "/images/p2.jpg",
      "store": "自营",
      "price": "6499",
      "appraise": "0.6"
    }, {
      "name": "2020款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p3.jpg",
      "store": "自营",
      "price": "13999",
      "appraise": "7.6"
    }],
    screenHeight: 0, // 获取的高度默认为0
    iconHeight: '', // 下降的高度默认为空
    // isture: 0,// 
    showBottom: true, // 底部的显示
    goTop: true, // 显示返回页面顶部按钮
    moreData: [{
      "name": "2020款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p4.jpg",
      "store": "自营",
      "price": "13999",
      "appraise": "7.6"
    }, {
      "name": "2020款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p5.jpg",
      "store": "自营",
      "price": "13999",
      "appraise": "7.6"
    }, {
      "name": "2020款 Apple iPad mini5 7.9英寸 平板电脑(64GB) WLAN版 MUQY2CH/A 金色",
      "img": "/images/p6.jpg",
      "store": "自营",
      "price": "13999",
      "appraise": "7.6"
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // 获取用户手机高度
    wx.getSystemInfo({
      success: function (res) {
        // console.log("-----" + res.windowHeight + "------" + res.screenHeight)
        that.setData({
          screenHeight: res.screenHeight
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
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
    var that = this
    // console.log("onReachBottom方法-----------------")
    tools.Toast("onReachBottom方法", "none")
    // var that = this
    // that.setData({
    //   isture: 1
    // })

    tools.Dialog("正在加载更多数据...");
    // 接口或者本地加载
    // 1，有数据就直接合并到助数组里面显示
    // 2，没有数据就直接显示底部我也是有底线的提示框
    that.setData({
      showBottom: false
    })
    wx.hideLoading();
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
  },

  // 动画等功能的点击事件
  check(res) {
    var that = this
    // console.log(res.currentTarget.dataset.index)
    that.functionList(res.currentTarget.dataset.index);
  },

  // 返回页面顶部
  bindGoTop(res) {
    // tools.Toast("点击了返回页面顶部按钮", "none")
    wx.pageScrollTo({
      scrollTop: 0
    })
    // 隐藏返回顶部按钮
    this.setData({
      showBottom: true,
      goTop: true
    })
  },

  // 微信小程序自带的页面滚动监听事件onPageScroll
  // e.scrollTop获取下滑的具体高度
  onPageScroll: function (e) {
    var that = this
    // console.log(e.scrollTop)
    if (that.data.screenHeight == 0) {
      tools.Toast("获取手机屏幕高度失败", 'none')
    } else if (e.scrollTop > that.data.screenHeight) {
      // 显示强制回到页面顶部的按钮
      // 显示页面底部没有更多数据提示面
      var heg = that.data.screenHeight - e.scrollTop;
      that.setData({
        // iconHeight: heg - 150,
        showBottom: false, // 
        goTop: false
      })
    } else {
      that.setData({
        // iconHeight: heg - 150,
        showBottom: true,
        goTop: true
      })
    }
  },

  // 扫码--20211201
  sunBtnSaoMa() {
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['barCode', 'qrCode', 'datamatrix', 'pdf417'],
      success(res) {
        console.log("扫码返回-----------" + JSON.stringify(res.result))
      },
      fail(res) { }
    })
  },

  // 搜索
  bindSouSuo() {
    console.log("------------点击了搜索")
    tools.NavigateTo('/pagelayoutSp/search/search');
  },
})