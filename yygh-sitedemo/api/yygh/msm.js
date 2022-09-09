import request from '@/utils/request'

const api_name = `/apim/msm`

export default {
    sendCode(mobile) {
        return request({
            url: `${api_name}/send/${mobile}`,
            method: `get`
        })
    }
}