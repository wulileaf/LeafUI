// componentSp/tencentcloud/facecontrast/facecontrast.js
var base64 = require('../../../utils/base64.js');
const { Add } = require('../../../utils/base64.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    "titleName": "人脸对比",
    imgYSUrl: base64.Add,// 默认背景图片
    imgYSUrlHasItBeen: 0,// 默认值为0,代表没有图片
    imgXZUrl: base64.Add,// 默认背景图片
    imgXZUrlHasItBeen: 0,// 默认值为0,代表没有图片
  },


  onLoad: function (options) {

  },

  onReady: function () {

  },

  // 点击提交进行比对
  upContrastPhoto() {
    wx.request({
      url: 'https://iai.tencentcloudapi.com',
      data: {
        Actionx: 'CompareFace',
        Versiony: '2020-03-03',
        Region: 'ap-guangzhou',
        ImageA: '',
        ImageB: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      },
      fail(res) {

      }
    })
  },

  // 选择原始的图片
  // 0
  btndateys() {
    var that = this
    if (that.data.imgYSUrlHasItBeen == 0) {
      this.photograph(0);
    } else if (that.data.imgYSUrlHasItBeen == 1) {
      this.showPhoto(0);
    }
  },

  // 拍摄现在的图片
  // 1
  btndatexz() {
    var that = this
    if (that.data.imgXZUrlHasItBeen == 0) {
      this.photograph(1);
    } else if (that.data.imgXZUrlHasItBeen == 1) {
      this.showPhoto(1);
    }
  },

  // 选择原始的图片
  // 0
  btndateyslong() {
    var that = this
    if (that.data.imgYSUrlHasItBeen == 0) {
      this.photographlong(0);
    } else if (that.data.imgYSUrlHasItBeen == 1) {
      this.photographlong(0);
    }
  },


  // 拍摄现在的图片
  // 1
  btndatexzlong() {
    var that = this
    if (that.data.imgXZUrlHasItBeen == 0) {
      this.photographlong(1);
    } else if (that.data.imgXZUrlHasItBeen == 1) {
      this.photographlong(1);
    }
  },

  // 拍照
  // ps：短按
  photograph(index) {
    var that = this;
    var sourcetype;
    if (index == 0) {
      sourcetype = 'album'
    } else if (index == 1) {
      sourcetype = 'camera';
    }
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: [sourcetype],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        if (index == 0) {
          that.setData({
            imgYSUrl: tempFilePaths,
            imgYSUrlHasItBeen: 1
          })
        } else if (index == 1) {
          that.setData({
            imgXZUrl: tempFilePaths,
            imgXZUrlHasItBeen: 1
          })
        }
      }
    })
  },

  // 长按
  photographlong(index) {
    var that = this;
    wx.showActionSheet({
      itemList: ['相册', '拍照', '删除'],
      success(res) {
        // console.log("---------" + res.tapIndex)
        switch (res.tapIndex) {
          case 0:// 相册
            that.photograph(index)
            break;
          case 1:// 拍照
            that.photograph(index)
            break;
          case 2:// 删除
            if (index == 0) {
              that.setData({
                imgYSUrl: base64.Add,
                imgYSUrlHasItBeen: 0
              })
            } else if (index == 1) {
              that.setData({
                imgXZUrl: base64.Add,
                imgXZUrlHasItBeen: 0
              })
            }
            break;
          default:
            break;
        }
      },
      fail(res) {
        // console.log("----1------" + res.errMsg)
      }
    })
  },

  // 显示预览
  showPhoto(index) {
    var that = this
    if (index == 0) {
      wx.previewImage({
        urls: that.data.imgYSUrl // 需要预览的图片http链接列表,直接给图片拍摄后的链接地址就可以了
      })
    } else if (index == 1) {
      wx.previewImage({
        urls: that.data.imgXZUrl // 需要预览的图片http链接列表,直接给图片拍摄后的链接地址就可以了
      })
    }
  }
})