// 封装picker组件
Component({
  properties: {
    pickerName: {
      type: String,
      value: ""
    },
    mode: {
      type: String,
      value: ""
    },
    region: {
      type: Array,
      value: []
    },
    customItem: {
      type: String,
      value: ""
    },
    pickerValue: {
      type: String,
      value: ""
    }
  },

  data: {

  },

  methods: {
    // picker的点击事件
    luiPickerChange(res) {
      // console.log("点击的事件-------------" + JSON.stringify(res))
      const myEventDetail = {
        value: res.detail.value
      }
      this.triggerEvent('luiPickerChange', myEventDetail)
    },

  }





})