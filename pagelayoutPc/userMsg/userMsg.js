// pagelayoutPc/userMsg/userMsg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    customNavBarHeight: 0,
    statusbar: 0,
    navigationbar: 0,
    systemName: "",
    systemVerion: ""
  },

  onLoad: function (options) {
    var that = this;
    wx.setBackgroundColor({
      backgroundColor: '#ffffff',
      backgroundColorBottom: "#ffffff"
    })

    const res = wx.getSystemInfoSync()
    var statusbarH = res.statusBarHeight;// 获取状态栏高度
    this.setData({
      statusbar: statusbarH
    })
    console.log("1----" + statusbarH);
    let customNavBarHeight = res.statusBarHeight + res.screenWidth * 88 / 750; // 记得转换
    this.setData({
      customNavBarHeight: customNavBarHeight,
      navigationbar: customNavBarHeight - statusbarH
    })

    console.log("2----" + customNavBarHeight + "--------" + this.data.navigationbar);

    // 初始化蓝牙模块
    // 初始化主机模式
    wx.getSystemInfo({
      success: (result) => {
        console.log(JSON.stringify(res))
        var data = result.system.split(" ");
        console.log(data[0] + "-------" + data[1])
        that.setData({
          systemName: data[0],
          systemVerion: data[1]
        })
      },
      fail: (res) => {

      }
    })

    if (this.data.systemName != "" && this.data.systemName == "android") {
      // 开启一次即可
      wx.openBluetoothAdapter({
        mode: 'central',
        success(res) {
          console.log("Android初始化蓝牙设备成功")
        },
        fail(res) {

        }
      })
    } else if (this.data.systemName != "" && this.data.systemName == "iOS") {
      // 开启主机
      wx.openBluetoothAdapter({
        mode: 'central',
        success(res) {
          console.log("iOS初始化蓝牙主机设备成功")
          wx.startBluetoothDevicesDiscovery({
            allowDuplicatesKey: false
          })
        },
        fail(res) {
          if (res.errCode !== 10001) return
          wx.onBluetoothAdapterStateChange((res) => {
            if (!res.available) return
            // 开始搜寻附近的蓝牙外围设备
            wx.startBluetoothDevicesDiscovery({
              allowDuplicatesKey: false,
            })
          })
        }
      })
      // 开启从机
      wx.openBluetoothAdapter({
        mode: 'peripheral',
        success(res) {
          console.log("iOS初始化蓝牙从机设备成功")
        },
        fail(res) {

        }
      })
    }
    console.log(this.data.systemName)
    console.log(this.data.systemVerion)

    // 监听扫描到新设备事件
    wx.onBluetoothDeviceFound((res) => {
      res.devices.forEach((device) => {
        // 这里可以做一些过滤
        console.log('Device Found', device)
      })
      // 找到要搜索的设备后，及时停止扫描
      wx.stopBluetoothDevicesDiscovery()
    })
  },

  openBluetooth(res) {

  },

  scanBluetooth() {
    this.initBlue();
  },

  // ArrayBuffer转16进度字符串示例
  ab2hex(buffer) {
    var hexArr = Array.prototype.map.call(
      new Uint8Array(buffer),
      function (bit) {
        return ('00' + bit.toString(16)).slice(-2)
      }
    )
    return hexArr.join('');
  },

  // 初始化蓝牙设备
  initBlue: function () {
    var that = this;
    wx.openBluetoothAdapter({//调用微信小程序api 打开蓝牙适配器接口
      success: function (res) {
        // console.log(res)
        wx.showToast({
          title: '初始化成功',
          icon: 'success',
          duration: 800
        })
        that.findBlue();//2.0
      },
      fail: function (res) {//如果手机上的蓝牙没有打开，可以提醒用户
        wx.showToast({
          title: '请开启蓝牙',
          icon: 'fails',
          duration: 1000
        })
      }
    })
  },

  // 开启搜索蓝牙设备
  findBlue() {
    var that = this
    wx.startBluetoothDevicesDiscovery({
      allowDuplicatesKey: false,
      interval: 0,
      success: function (res) {

        wx.showLoading({
          title: '正在搜索设备',
        })
        that.getBlue()//3.0
      }
    })
  },

  // 获取搜索到的设备信息
  getBlue() {
    var that = this
    wx.getBluetoothDevices({
      success: function (res) {
        wx.hideLoading();
        for (var i = 0; i < res.devices.length; i++) {
          console.log("----" + JSON.stringify(res.devices[i]))


          //that.data.inputValue：
          /**表示的是需要连接的蓝牙设备ID，简单点来说就是我想要连接这个蓝牙设备，
          所以我去遍历我搜索到的蓝牙设备中是否有这个ID
          */
          // if (res.devices[i].name == that.data.inputValue ||
          //   res.devices[i].localName == that.data.inputValue) {
          //   that.setData({
          //     deviceId: res.devices[i].deviceId,
          //     consoleLog: "设备：" + res.devices[i].deviceId,
          //   })
          //   that.connetBlue(res.devices[i].deviceId);//4.0
          //   return;
          // }
        }
      },
      fail: function () {
        console.log("搜索蓝牙设备失败")
      }
    })
  },

  // 获取到设备之后连接蓝牙设备
  connetBlue(deviceId) {
    var that = this;
    wx.createBLEConnection({
      // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
      deviceId: deviceId,//设备id
      success: function (res) {
        wx.showToast({
          title: '连接成功',
          icon: 'fails',
          duration: 800
        })
        console.log("连接蓝牙成功!")
        wx.stopBluetoothDevicesDiscovery({
          success: function (res) {
            console.log('连接蓝牙成功之后关闭蓝牙搜索');
          }
        })
        that.getServiceId()//5.0
      }
    })
  },

  // 连接上需要的蓝牙设备之后，获取这个蓝牙设备的服务uuid
  getServiceId() {
    var that = this
    wx.getBLEDeviceServices({
      // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
      deviceId: that.data.deviceId,
      success: function (res) {
        var model = res.services[0]
        that.setData({
          services: model.uuid
        })
        that.getCharacteId()//6.0
      }
    })
  },

  // 
  getCharacteId() {
    var that = this
    wx.getBLEDeviceCharacteristics({
      // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
      deviceId: that.data.deviceId,
      // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
      serviceId: that.data.services,
      success: function (res) {
        for (var i = 0; i < res.characteristics.length; i++) {//2个值
          var model = res.characteristics[i]
          if (model.properties.notify == true) {
            that.setData({
              notifyId: model.uuid//监听的值
            })
            that.startNotice(model.uuid)//7.0
          }
          if (model.properties.write == true) {
            that.setData({
              writeId: model.uuid//用来写入的值
            })
          }
        }
      }
    })
  },

  // 创建连接，发送指令
  startNotice(uuid) {
    var that = this;
    wx.notifyBLECharacteristicValueChange({
      state: true, // 启用 notify 功能
      // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接 
      deviceId: that.data.deviceId,
      // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
      serviceId: that.data.services,
      // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
      characteristicId: uuid,  //第一步 开启监听 notityid  第二步发送指令 write
      success: function (res) {
        wx.request({
          method: "POST",
          data: {
            xx: nonceId
          },
          url: 'url',
          success(res) {
            //res.data.data.ciphertext：我这边服务返回来的是16进制的字符串，
            //蓝牙设备是接收不到当前格式的数据的，需要转换成ArrayBuffer
            that.sendMy(that.string2buffer(res.data.data.ciphertext))//8.0
            // 服务器返回一个命令  我们要把这个命令写入蓝牙设备
          }
        })
      }
    })
  },

  onRefresh(res) {
    // console.log("---------进行了刷新")
    setTimeout(() => {
      this.setData({
        pulling: false,
      })
    }, 5000)
  }

})