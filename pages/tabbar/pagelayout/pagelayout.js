// pages/tabbar/pagelayout/pagelayout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagesurl: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573919960528&di=14ff7c5d89eedbc6237b0372526d3c42&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Fim%2Frc%2FQJ6900929898.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069583&di=c5cd4bf5c939be2139da029faf5b7db6&imgtype=0&src=http%3A%2F%2Fhuafans.dbankcloud.com%2Fpic%2F2017%2F11%2F09%2F5e73598b6db356c260d5093de507ae75_IMG_20171109_075558.jpg%3Fmode%3Ddownload',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069586&di=849a4ecdd3fcbfb876d002dc6985d3c6&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2017%2F09%2F18%2FFuvM4lfZ_p0U91e0avTVbm69Q9bu.jpg%2521730x0.jpg'
    ],
    pingou: [{
      "programmeId": 1,
      "programmeImage": ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069586&di=849a4ecdd3fcbfb876d002dc6985d3c6&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2017%2F09%2F18%2FFuvM4lfZ_p0U91e0avTVbm69Q9bu.jpg%2521730x0.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573926069583&di=c5cd4bf5c939be2139da029faf5b7db6&imgtype=0&src=http%3A%2F%2Fhuafans.dbankcloud.com%2Fpic%2F2017%2F11%2F09%2F5e73598b6db356c260d5093de507ae75_IMG_20171109_075558.jpg%3Fmode%3Ddownload"],
      "programmeName": "韭菜"
    }, {
      "programmeId": 2,
      "programmeImage": ["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2615645149,859447379&fm=26&gp=0.jpg"],
      "programmeName": "菠菜"
    }, {
      "programmeId": 3,
      "programmeImage": ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573971527647&di=551566c45f7300d2d777740aee67f99e&imgtype=0&src=http%3A%2F%2Fpic70.nipic.com%2Ffile%2F20150628%2F20578453_004635190000_2.jpg"],
      "programmeName": "香葱"
    }, {
      "programmeId": 4,
      "programmeImage": ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573971569682&di=3f9ccb1c55bcdc647f3c8fa8dd890434&imgtype=0&src=http%3A%2F%2Fimages.zon100.com%2Fimg%2F10001284%2F1100155314%2F1100208411_1000.jpg"],
      "programmeName": "生菜"
    }, {
      "programmeId": 5,
      "programmeImage": ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573971601472&di=69609d188237fd91f20d44b9a9482eda&imgtype=0&src=http%3A%2F%2Fphoto.16pic.com%2F00%2F22%2F08%2F16pic_2208648_b.jpg"],
      "programmeName": "油菜"
    }, {
      "programmeId": 6,
      "programmeImage": ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573971633385&di=12bf23a17257c69b65b70a0fe3d57dbf&imgtype=0&src=http%3A%2F%2Fsh.sinaimg.cn%2F2015%2F0506%2FU10201P18DT20150506172427.jpg"],
      "programmeName": "辣椒"
    }, {
      "programmeId": 7,
      "programmeImage": ["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2239997658,993144528&fm=26&gp=0.jpg"],
      "programmeName": "冬瓜"
    }],
    advertTwoData: [{
      color: "7AB900",
    }, {
      color: "9DB9D1",
    }, {
      color: "78BBFE",
    }, {
      color: "E67A56",
    }],

    duration: "500",
    imgUrls: [
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a0ff3dc30027f3b615bfe03f1d306ee5.jpg?thumb=1&w=720&h=360',
      'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2320573b3be643e29f5270a97e1a9c1d.jpg?thumb=1&w=720&h=360'
    ],
    current: 0,

    bannerData: [
      {
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b51889744910df7979a2f672434da84e.jpg?thumb=1&w=720&h=360',
        id: 0
      },
      {
        src: 'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37dfdc929ee9a4313facb0b23ebcd721.jpg?thumb=1&w=720&h=360',
        id: 1
      },
      {
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