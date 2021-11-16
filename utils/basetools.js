// 获取被点击的item下标的值
var index = function(res) {
  return parseInt(res.currentTarget.dataset.index);
}

// Toast提示
var toast = function(res, show) {
  wx.showToast({
    title: res,
    icon: show
  })
}

// 获取当前时间 格式为：yyyy-MM-dd HH：mm:ss
var time = function() {
  var date = new Date();
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

// 获取当前时间 格式为：yyyy-MM-dd
var ymdtime = function () {
  var date = new Date();
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

// 普通跳转
var navigateTo = function(url) {
  wx.navigateTo({
    url: url,
  })
}

// 带参数的跳转
var navigateToParame = function(url, parame) {
  wx.navigateTo({
    url: url + "?" + parame,
  })
}

/**
 * 获取当前时间
 * 时间格式：yyyy-MM-dd
 */
var getdaytime = function () {
  var date = new Date();
  var myDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  return myDate;
}

module.exports = {
  Index: index, // 获取被点击的item下标的值
  Toast: toast, // Toast提示
  Time: time, // 获取当前时间 格式为：yyyy-MM-dd HH：mm:ss
  YMDtime: ymdtime,// 获取当前时间 格式为：yyyy-MM-dd
  NavigateTo: navigateTo, // 普通跳转
  NavigateToParame: navigateToParame,// 带参数的跳转
  Getdaytime: getdaytime, // 获取日期时间 格式为：yyyy-MM-dd
}