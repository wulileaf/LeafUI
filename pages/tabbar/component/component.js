const app = getApp();
var loadMoreView, page;
var testData = require('../../../utils/testData')
var pageUrl = require('../../../utils/pageAddress')
var tools = require('../../../utils/tools')
Page({

  // 页面初始化
  data: {
    index: 0, //选择的下拉列表下标
    OrderData: testData.OrderData,
    donghua: "", // 控制动画显示的
    isShowTabBar: false, // 控制TabBar的显示和关闭
    // ProductData: testData.OrderData.ProductData
  },

  onLoad(options) {

  },

  // 点击--查看详情
  bindSeeDetails(e) {
    console.log(JSON.stringify(e))
    var nindex = e.currentTarget.dataset.index
  },

  // 一级item点击事件
  // 点击展开
  itemOnClick(e) {
    var nindex = e.currentTarget.dataset.index
    var list = this.data.OrderData
    if (list[nindex].SelectShow == true) {
      list[nindex].SelectShow = false
    } else {
      list[nindex].SelectShow = true
    }
    this.setData({
      OrderData: list
    })
  },

  // 二级item点击事件
  // 点击展开
  // itemOnClickChildNode(e) {
  //   console.log("--------2---------" + JSON.stringify(e))
  //   var nindex = e.currentTarget.dataset.index
  //   var list = this.data.OrderData.ProductData
  //   if (list[nindex].ChildNodeSelectShow == true) {
  //     list[nindex].ChildNodeSelectShow = false
  //   } else {
  //     list[nindex].ChildNodeSelectShow = true
  //   }
  //   this.setData({
  //     ProductData: list
  //   })
  // },


  // 二级item点击事件
  itemSecondLevelOnClick(e) {
    var that = this
    var index = e.currentTarget.dataset.index
    var id = e.currentTarget.dataset.id
    switch (id) {
      case 0:// 表单组件
        that.formcomponents(index);
        break
      case 1:// 地图
        that.map(index);
        break;
      case 2:// icon图标
        that.icon(index);
        break;
      case 3:// 导航
        that.navigation(index);
        break;
      case 4:// 图片/视频转Base64
        that.pvtobase64(index);
        break;
      case 5:// 人脸识别
        that.facerecognition(index);
        break;
      case 6:// 自定义组件
        that.customcomponents(index);
        break;
      default:
        break;
    }
  },

  // 表单组件
  formcomponents(index) {
    switch (index) {
      case 0:// button
        tools.NavigateTo(pageUrl.Button);
        break
      case 1:// checkbox
        tools.NavigateTo(pageUrl.CheckBox);
        break;
      case 2:// from
        tools.NavigateTo(pageUrl.From)
        break;
      case 3:// picker
        tools.NavigateTo(pageUrl.Picker)
        break;
      default:
        break;
    }
  },

  // 地图
  map(index) {
    switch (index) {
      case 0:
        tools.NavigateTo(pageUrl.Map);
        break;
      default:
        break;
    }
  },

  // icon图标
  icon(index) {
    switch (index) {
      case 0:
        tools.NavigateTo(pageUrl.Icon);
        break;
      default:
        break;
    }
  },

  // 导航
  navigation(index) {
    switch (index) {
      case 0:
        tools.NavigateTo(pageUrl.Tabbar);
        break;
      default:
        break;
    }
  },

  // 图片/视频转Base64
  pvtobase64(index) {
    switch (index) {
      case 0:
        tools.NavigateTo(pageUrl.PhotoTobBase64);
        break;
      case 1:
        tools.NavigateTo(pageUrl.VideoToBase64);
        break;
      case 2:
        tools.NavigateTo(pageUrl.PictureCompression);
        break;
      default:
        break;
    }
  },


  // 人脸识别
  facerecognition(index) {
    switch (index) {
      case 0:// 腾讯云
        tools.NavigateTo(pageUrl.TencentCloud)
        break;
      case 1:
        break;
      case 2:
        break;
      case 3:
        tools.NavigateTo(pageUrl.ORC)
        break;
      default:
        break;
    }
  },


  // 自定义组件
  customcomponents(index) {
    switch (index) {
      case 0:
        break;
      default:
        break;
    }
  },


})