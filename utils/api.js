import {Request} from "../utils/request.js" 

class api extends Request {
  getApi(){
    return this.getData({
      url: '/content.json'
    })
  }
}

export { api }

