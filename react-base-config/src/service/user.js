import $axios from "./request"

export const getAddressList = async ()=>{
    const params = {
        type:1
    }
    const {data} = await $axios.post('user/getAddressList',params)
    return data
}