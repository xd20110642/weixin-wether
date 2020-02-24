/**
 * 封装http请求
 */
export function get(baseURL='',params=''){
  console.log("params", params)
  wx.showLoading({
    title: '加载中',
  })

  return new Promise((resolve,reject) => {
    wx.request({
      url: baseURL,
      data: params,
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        let { statusCode, data:{data}}=res;
        if (statusCode === 200){
          resolve(data)
        }else{
          reject(res)
        }
        console.log("res",res)
      },
      fail: function(res) {},
      complete: function(res) {
        wx.hideLoading()
      },
    })
  })
}