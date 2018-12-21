const hotapp = require('../utils/hotapp.js');
class Request {
  baseUrl = `http://92wqy.top`
  getData({
    url
  }) {
    return new Promise((resolve, reject) => {
      hotapp.request({
        useProxy: true,
        url: this.baseUrl + url,
        success: function(res) {
          resolve(res)
        }
      })
    })
  }
}

export {
  Request
}