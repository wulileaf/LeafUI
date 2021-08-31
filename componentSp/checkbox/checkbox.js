// componentSp/checkbox/checkbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleName: "checkbox",
    items: [
      { name: '1', value: '浅蓝', color: '#2894FF', checked: 'true' },
      { name: '2', value: '橙色', color: '#FF8040' },
      { name: '3', value: '浅灰', color: '#A6A6D2' },
      { name: '4', value: '浅紫', color: '#C07AB8' },
      { name: '5', value: '黄色', color: '#FFDC35' }
    ],
    itemsData: [
      { 'value': '蓝色', color: '#2894FF' },
      { 'value': '橙色', color: '#FF8040' },
      { 'value': '灰色', color: '#A6A6D2' },
      { 'value': '浅紫', color: '#C07AB8' },
      { 'value': '黄色', color: '#FFDC35' }
    ],
    itemsDatatx: [
      { 'value': '蓝色', color: '#2894FF' },
      { 'value': '橙色', color: '#FF8040' },
      { 'value': '灰色', color: '#A6A6D2' },
      { 'value': '浅紫', color: '#C07AB8' },
      { 'value': '黄色', color: '#FFDC35' }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // checkbox点击响应事件
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },



  //多选
  userCheck: function (e) {
    let index = e.currentTarget.dataset.id;//获取用户当前选中的索引值
    let checkBox = this.data.itemsData;
    if (checkBox[index].checked) {
      this.data.itemsData[index].checked = false;
    } else {
      this.data.itemsData[index].checked = true;
    }
    this.setData({
      itemsData: this.data.itemsData
    })
    //返回用户选中的值
    let value = checkBox.filter((item, index) => {
      return item.checked == true;
    })
    console.log(JSON.stringify(value))
  },


  // 

  userChecktx(e) {
    let index = e.currentTarget.dataset.id;//获取用户当前选中的索引值
    let checkBox = this.data.itemsDatatx;
    if (checkBox[index].checked) {
      this.data.itemsDatatx[index].checked = false;
    } else {
      this.data.itemsDatatx[index].checked = true;
    }
    this.setData({
      itemsDatatx: this.data.itemsDatatx
    })
    //返回用户选中的值
    let value = checkBox.filter((item, index) => {
      return item.checked == true;
    })
    console.log(JSON.stringify(value))
  }
})