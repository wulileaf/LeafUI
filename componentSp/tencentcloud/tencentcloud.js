// componentSp/tencentcloud/tencentcloud.js
var tools = require('../../utils/tools')
var pageUrl = require('../../utils/pageAddress')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleName: "TencentCloud",
    tencentcloudtype: [{
      "TypeName": "人脸对比",
      "Color": "#2894FF"
    }, {
      "TypeName": "人身核检",
      "Color": "#FF8040"
    }, {
      "TypeName": "人脸识别",
      "Color": "#A6A6D2"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  jc_txy(res) {
    var index = res.currentTarget.dataset.index
    switch (index) {
      case 0:// 人脸对比
        tools.NavigateTo(pageUrl.TXYFaceContrast);
        break;
      case 1:// 人脸核身
        break;
      case 2:// 人脸识别
        break;
      default:
        break;
    }

  }

})