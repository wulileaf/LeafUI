// var baseurl = 'http://brightfood.acsalpower.com:8888/WxApi.asmx/'
// var baseurl = 'http://kanebo.acsalpower.com:8888/WxApi.asmx/' // 测试服务器地址
var baseurl = 'https://kanebo.acsalpower.com/WxApi.asmx/' // 正式服务器地址
// var ak = 'fO0FOuhwoh3zOKGqHNYcYHY4xBXryq7V' // 用于定位的AK
var ak= "8wkTMsam8cNNubqxqE5QiGDmyIMgCTtq" //填写申请到的ak
var imageurl = 'http://kanebo.acsalpower.com/photograph' // 图片访问的地址

// 登录
var login = 'WxUserLogin'
// 当日拜访
var userplan = 'WxUserGetPlan'
// 提交报告
var report = 'WxSubReport'
// 计划外门店
var store = 'WxUserStoreList'
// 修改密码
var password = 'ResetPassword'
// 消息
var message = 'GetMessageList'
// 获取计划外数据
var outplan = 'WxUserGetPlanOut'
// SKU库存
var sku = "GetProductList"
// 获取各类拜访报告
var getreport = "WxUserGetReport"
// 仅获取当日全部考勤数据
var moregetreports = "WxUserMoreGetReports"


module.exports = {
  BaseUrl: baseurl,
  Login: login,
  UserPlan: userplan,
  AK: ak,
  Report: report,
  Store: store,
  Password: password,
  Message: message,
  Outplan: outplan,
  SKU: sku,
  Imageurl: imageurl,
  Getreport: getreport,
  MoreGetReports: moregetreports
}