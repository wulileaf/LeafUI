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

/**
 * 获取当前时间
 * 时间格式：yyyy-MM-dd
 */
var getdaytime = function() {
  var date = new Date();
  var myDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  return myDate;
}

// var getdaytime = function() {
//   var date = new Date();
//   var myDate = date.getFullYear() + '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
//   return myDate;
// }

/**
 * 获取当前时间
 * 时间格式：yyyy-MM
 */
var getyeartimea = function() {
  var date = new Date();
  var myDate = date.getFullYear() + '-' + (date.getMonth() + 1);
  return myDate;
}
/**
 * 时间格式：yyyy-MM
 */
var getyeartime = function() {
  var date = new Date();
  var myDate = date.getFullYear() + '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  return myDate;
}

/**
 * 获取当前年份
 */
var getyeard = function() {
  return new Date().getFullYear();
}

/**
 * 获取当前月份
 */
var getmonthd = function() {
  return new Date().getMonth() + 1;
}

/**
 * 获取当前时间
 * 时间格式：yyyy-MM
 */
var nowtime = function() {
  var date = new Date();
  return date.getHours() + ':' + date.getMinutes();
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
    url: url + "?content=" + parame,
  })
}

// 系统自带的加载框
var dialog = function(title) {
  wx.showLoading({
    title: title
  })
}

// 控制月份
var kzmonth = function(month) {
  var date = new Date();
  var nowyear = date.getFullYear();
  var nowdate = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  var czhi = nowdate - month
  if (czhi <= 0) {
    var czmonth = 12 + czhi
    var czyear = date.getFullYear() - 1
    return czyear + '-' + czmonth
  } else if (czhi > 0) {
    var czmonth = czhi
    var czyear = date.getFullYear()
    return czyear + '-' + czmonth
  }
}

module.exports = {
  Index: index, // 获取被点击的item下标的值
  Toast: toast, // Toast提示
  Time: time, // 获取当前时间 格式为：yyyy-MM-dd HH：mm:ss
  Getdaytime: getdaytime, // 获取日期时间 格式为：yyyy-MM-dd
  Getyeartime: getyeartime, // 获取日期时间 格式为：yyyy-MM
  Getyeartimea: getyeartimea, // 获取日期时间 格式为：yyyy-MM
  NavigateTo: navigateTo, // 普通跳转
  NavigateToParame: navigateToParame, // 带参数的跳转
  Nowtime: nowtime, // 获取HH：mm
  KZMonth: kzmonth, // 计算月份差
  Yeard: getyeard, // 获取年份
  Monthd: getmonthd, // 获取月份
  Dialog: dialog, // 系统自带的dialog
}