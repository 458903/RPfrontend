import request from '@/utils/request'

const api_name = `/ucenter/user-info/wx`

export default {
  getLoginParam() {
    return request({
      url: `${api_name}/getLoginParam`,
      method: `get`
    })
  }
}