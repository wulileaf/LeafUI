var reqUrlBase = require('../utils/baseurl')

/**
 * @author leaf
 * @version 1.0
 * @param reqUrl 接口请求地址
 * @param reqType 接口请求类型
 * @param sCallBack 接口请求成功的返回
 * @param fCallBack 接口请求失败的返回
 * @param reqParam 接口请求的参数数据 json格式默认
 * @Note 小程序method = post application/x-www-form-urlencoded 会将数据转换成 query string 
 * @Note 小程序method = post application/json 会对数据进行 JSON 序列化
 * @Date 2019/7/6
 * @UpDate 2019/7/6
 * @testResult OK
 */
function $ajaxRequest(reqUrl, reqType, sCallBack, fCallBack, reqParam) {
  wx.request({
    url: reqUrlBase.BaseUrl + reqUrl,
    method: reqType,
    data: reqParam,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    success(res) {
      sCallBack(res);
    },
    fail(res) {
      fCallBack(res);
    }
  })
}

module.exports = {
  $ajaxRequest
}