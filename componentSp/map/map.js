// componentSp/map/map.js
var bmap = require('../../libs/bmap-wx.min.js');
var wxMarkerData = [];
var tools = require('../../utils/tools')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleName: "map",
    latitude: '', // 纬度
    longitude: '', // 经度
    address: '', //地址
    ak: "fO0FOuhwoh3zOKGqHNYcYHY4xBXryq7V", //填写申请到的ak
    showlocation: true,// 地图上显示的定位点
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.getDWMSg();
  },

  // 获取定位信息
  getDWMSg() {
    var that = this;
    // 新建bmap对象
    var BMap = new bmap.BMapWX({
      ak: that.data.ak
    });
    var fail = function (data) {
      console.log("-----------" + JSON.stringify(data))
      tools.Toast('定位失败', 'none')
    };
    var success = function (data) {
      //返回数据内，已经包含经纬度
      //使用wxMarkerData获取数据
      wxMarkerData = data.wxMarkerData;
      //把所有数据放在初始化data内
      that.setData({
        latitude: wxMarkerData[0].latitude,
        longitude: wxMarkerData[0].longitude,
        address: wxMarkerData[0].address
      });
    }
    // 发起regeocoding检索请求 
    BMap.regeocoding({
      fail: fail,
      success: success,
      iconPath: '',
      iconTapPath: ''
    });
  },

  // 刷新定位点
  pause() {
    wx.createMapContext("map").moveToLocation();
  },

  btnred() {
    tools.Toast("点击了", 'none');
  }

})