var tools = require('../../utils/basetools.js')
var baseurl = require('../../utils/baseurl.js')
var parser = require('../../libs/dom-parser.js')
var reportid = require('../../utils/reportdesign.js')

// var storepictrueurl = '../../user/storepictrue/storepictrue'
// http请求头的值
var httpheadervalue = 'application/x-www-form-urlencoded'

/**
 * @Notes 和尊-佳丽宝 图片拍摄
 * @author leaf
 * @version 1.0.8
 * @Date 2018/10/18
 * @Update 2018/12/18
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionSheetHidden: true, // 显示或者取消弹出框
    actionSheetItems: [{
      bindtap: 'Menu1',
      txt: '拍照'
    },
    {
      bindtap: 'Menu2',
      txt: '从手机相册选择'
    },
    {
      bindtap: 'Menu3',
      txt: '删除图片'
    }
    ],
    photodata: [{
      "address": "/images/add.png", // 图片的临时地址
      "name": "主陈列图片", // 图片的类型
      "url": "" // 1就是表示拍照的那个照片
    }],
    ofphotodata: [],
    index: '', // 对数据进行处理时需要用的参数(主陈列照片)
    mors: '',
    pictures: '3', // 用于控制主陈列和促销图片拍摄的数量，默认为各3张,最小值为0不能为空，上限为11
    storename: '',
    empname: '',
    templateId: '',
    upornup: '0', // 开始拜访报告没有提交
    title: '图片提交压缩测试',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var titlename = options.title
    // 修改页面头部的文字
    wx.setNavigationBarTitle({
      title: titlename
    })
    // 2018/11/2修改处
    // 获取 StoreName,EmpName
    // photodata中name字段的照片类型
    // 获取templateId作为报告上传时使用
    try {
      var storename = wx.getStorageSync('DGStoreName')// 导购门店名称
      var empname = wx.getStorageSync('EmpName')
      console.log('that.data.storename=====' + storename + "EmpName====" + empname)
    } catch (e) {
      tools.Toast("获取storename/empname异常", 'none')
    }
    var tmpid = options.templateId
    var array = that.data.photodata
    array[0].name = titlename
    that.setData({
      storename: storename,
      empname: empname,
      templateId: tmpid,
      photodata: array,
      title: titlename
    })
    that.checkstaute(); // 检查进店拜访状态
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

  /**
   * 设置手机拍照报告
   * 2018/11/6
   */
  photoRerport(templateId, photoList) {
    var that = this
    var storeid = wx.getStorageSync('DGStoreId')
    var empid = wx.getStorageSync('EmpId')
    var time = that.gettime();
    var js = "{\"ReportMain\":{\"InputType\":\"1\",\"TemplateVersion\":\"1\",\"EmpId\":\"" + empid + "\",\"ReportDate\":\"" + time + "\",\"ClientId\":\"" + storeid + "\",\"ClientType\":\"1\",\"TemplateId\":\"" + templateId + "\",\"ReportDetailList\":[],\"STR5\":\"\",\"STR6\":\"\",\"STR7\":\"\",\"INT1\":\"\",\"INT2\":\"\",\"STR1\":\"\",\"STR2\":\"\",\"STR3\":\"\",\"STR4\":\"\",\"PhotoList\":" + JSON.stringify(photoList) + "}}"
    return js
  },

  /**
   * 获取当前时间
   * 时间格式：yyyy-MM-dd hh:mm:ss
   */
  gettime: function () {
    // 获取当前时间
    var date = new Date();
    var myDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    return myDate;
  },

  /**
   * 确认提交
   */
  jppzphoto: function () {
    var that = this;
    // var upornupdata = that.data.upornup
    // console.log("upornupdata=" + upornupdata)
    // if (upornupdata == '0') {
    //   tools.Toast('请先进行门店拜访！', 'none')
    // } else if (upornupdata == '1') {
    wx.showModal({
      title: '提示',
      content: "确定提交报告吗？",
      success: function (res) {
        if (res.confirm) {
          wx.showLoading({
            title: '正在提交...',
          })
          var ofphotodatalength = that.data.ofphotodata.length
          if (ofphotodatalength == 0) {
            wx.hideLoading();
            tools.Toast("没有要提交的数据", 'none')
          } else if (ofphotodatalength > 0) {
            // var reportid = that.judgetmpid(that.data.templateId);
            // var json = that.photoRerport(reportid, that.data.ofphotodata);
            // console.log(json + "json")
            // wx.hideLoading() // cs
            console.log("------------" + JSON.stringify(that.data.ofphotodata[0].Photo))
            wx.request({
              url: 'http://thspd.acsalpower.com:8888/DataWebService.asmx/TestPhoto',
              method: 'POST',
              header: {
                'content-type': httpheadervalue
              },
              data: {
                str: that.data.ofphotodata[0].Photo
              },
              success: function (res) {
                wx.hideLoading();
                tools.Toast("-----" + JSON.stringify(res), 'none')
                console.log("提交结果----------" + JSON.stringify(res))
                // var jsdata = res.data;
                // if (jsdata.Status == 1) {
                //   wx.hideLoading();
                //   tools.Toast("", 'none')
                // } else if (jsdata.Status == -1) {
                //   that.changstate(that.data.templateId);
                //   wx.hideLoading();
                //   tools.Toast(jsdata.Message, 'none')
                // }
              },
              fail: function (res) {
                // that.changstate(that.data.templateId);
                wx.hideLoading();
                tools.Toast('提交数据异常', 'none')
              }
            })
          }
        } else {
          tools.Toast('点击了取消', 'none')
        }
      }
    })
    // }
  },

  /**
   * 拍照
   * @param photoname照片的名称
   * @param ptype用于判断主陈列照片拍照和促销陈列照片拍照的标识 0为主陈列,1为促销
   * 注：主陈列或者促销最多限制各3张
   * 
   */
  pzimage(id, photoname, ptype, length) {
    var that = this;
    // var length = 0; //默认不循环
    // var pictures = that.data.pictures
    wx.chooseImage({
      count: 3, // 1.0.8修改处
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        const tempFilePaths = res.tempFilePaths // 图片的临时地址
        for (var i = 0; i < length; i++) {
          var imgurl = tempFilePaths[i]
          if (imgurl != undefined) {
            // 在这里定义需要的数据格式
            var data = {
              "address": tempFilePaths[i],
              "name": photoname, // 图片的类型
              "url": "1", // 长按时区别拍照
            }
            // 2018/11/2修改处
            var time = that.gettime();
            console.log('that.data.storename=====' + that.data.storename + "EmpName====" + that.data.empname)
            var mod = {
              "id": "1",
              "StoreName": that.data.storename,
              "EmpName": that.data.empname,
              "PhotoStyle": photoname,
              "PhotoArea": "",
              "Remark": photoname,
              "ShotTime": time,
              "Photo": ""
            }

            // 主陈列照片
            that.data.photodata.push(data)
            that.setData({
              photodata: that.data.photodata
            })
            // console.log("主陈列添加图片后的结果为" + JSON.stringify(that.data.photodata))

            // 2018/11/2修改
            // 添加正式数据图片
            // 不要展示
            mod.Photo = wx.getFileSystemManager().readFileSync(imgurl, "base64") // 用于上传的图片地址，是个同步接口
            that.data.ofphotodata.push(mod)
          }
        }
      },
    })
  },

  /**
   * 修改图片
   * , mors
   */
  change(phototype, index) {
    var that = this;
    // 2018/11/2修改处
    // var storename = wx.getStorageSync('StoreName')
    // var empname = wx.getStorageSync('EmpName')
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: [phototype],
      success: function (res) {
        const tempFilePaths = res.tempFilePaths // 图片的临时地址
        // 2018/11/2修改图片值涉及到图片base64编码的改变
        that.data.photodata[index].address = tempFilePaths[0]
        that.setData({
          photodata: that.data.photodata
        })
        // 修改图片
        var photo = wx.getFileSystemManager().readFileSync(tempFilePaths[0], "base64") // 用于上传的图片地址，是个同步接口
        that.data.ofphotodata[index - 1].Photo = photo
      },
    })
  },

  /**
   * 主陈列拍照
   * @param 主陈列拍照
   * @param 0
   * photodata：表示进行展示的数组
   * index：获取待拍照图片的下标
   * that.data.pictures - configl：为了判断是否已经拍满了所设置的张数上限
   * length:计算还能拍几张
   */
  btndate: function (res) {
    var that = this;
    var configl = that.data.photodata.length - 1
    var length = that.data.pictures - configl
    var index = parseInt(res.currentTarget.dataset.index)
    // console.log('走了btndate方法获取到的下标为===' + index)
    var url = that.data.photodata[index].url;
    if (that.data.pictures > 3) {
      // wx.showToast({
      //   title: '拍摄图片上限设置不能超过3张',
      //   icon: 'none'
      // })
      tools.Toast('拍摄图片上限设置不能超过3张', 'none')
    } else {
      if (url == '') {
        if (length == 0) {
          // wx.showToast({
          //   title: that.data.title + '图片最多只能拍摄' + that.data.pictures + '张', // 1.0.8修改处
          //   icon: 'none'
          // })
          tools.Toast(that.data.title + '图片最多只能拍摄' + that.data.pictures + '张', 'none')
        } else if (length > 0) {
          that.pzimage(2, that.data.title, 0, length); // 1.0.8修改处
        }
      } else if (url != '') {
        // 有图片就给用户显示
        // 可以在这里判断是长按还是短按（待确认）
        var address = that.data.photodata[index].address;
        wx.previewImage({
          urls: [address],
        })
      }
    }
  },

  /**
   * 长按操作
   * 主陈列照片
   */
  lbtn: function (res) {
    var that = this;
    var index = parseInt(res.currentTarget.dataset.index)
    var url = that.data.photodata[index].url;
    if (url != '') {
      this.setData({
        index: index,
        actionSheetHidden: !this.data.actionSheetHidden
      })
    } else if (url == '') {

    }
  },

  /**
   * 点击取消
   * 点击取消按钮和点击空白页面取消都会走的方法
   */
  actionSheetbindchange: function () {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },

  /**
   * 选择了菜单1
   * 手机拍照
   */
  bindMenu1: function () {
    var that = this;
    var index = that.data.index // 主陈列
    var phototype = 'camera'
    that.hidden();
    that.change(phototype, index);
  },

  /**
   * 选择了菜单2
   * 从手机相册选择
   */
  bindMenu2: function () {
    var that = this;
    var index = that.data.index // 主陈列
    var mors = that.data.mors
    var phototype = 'album'
    that.hidden();
    that.change(phototype, index);
  },

  /**
   * 选择了菜单3
   * 删除图片
   */
  bindMenu3: function () {
    var that = this;
    that.data.photodata.splice(that.data.index, 1)
    this.setData({
      photodata: that.data.photodata,
      actionSheetHidden: !this.data.actionSheetHidden
    })
    // 修改处
    // 2018/11/2
    var index = that.data.index
    that.data.ofphotodata.splice(index - 1, 1)
  },

  /**
   * 隐藏底部弹出框
   */
  hidden() {
    var that = this
    that.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },

  /**
   * 确认状态
   * 
   * 这里要判断是否是进行了打卡操作
   */
  checkstaute() {
    var that = this;
    try {
      var data = wx.getStorageSync("upclock")
      // console.log("data=" + data)
      if (data == '1') {
        that.setData({
          upornup: '1'
        })
      } else if (data == '0' || data == '') {
        that.setData({
          upornup: '0'
        })
      }
    } catch (e) { }
  },

  /**
   * 判断报告 templateId
   */
  judgetmpid(templateId) {
    var tmpId = '';
    if (templateId == '0') {
      return reportid.DGCLPZid
    } else if (templateId == '1') {
      return reportid.DGCXPZid
    }
  },

  /**
   *  0表示没有提交报告，1表示已经提交报告
   */
  savestate(templateId) {
    if (templateId == '0') {
      wx.setStorageSync("DGCLPZid", '1')
    } else if (templateId == '1') {
      wx.setStorageSync("DGCXPZid", '1')
    }
  },

  /**
   * 0表示没有提交报告，1表示已经提交报告
   */
  changstate(templateId) {
    if (templateId == '0') {
      wx.setStorageSync("DGCLPZid", '0')
    } else if (templateId == '1') {
      wx.setStorageSync("DGCXPZid", '0')
    }
  }
})