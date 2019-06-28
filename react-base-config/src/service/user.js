import $axios from "./request"

export const getAddressList = async ()=>{
    const params = {
        type:1
    }
    const {data} = await $axios.post('user/getAddressList',params)
    return data
}
export const getOrderList = async ()=>{
    const params = {
        type:1,
        page:1
    }
    const {data} = await $axios.post('Order/getOrderList',params)
    return data
}