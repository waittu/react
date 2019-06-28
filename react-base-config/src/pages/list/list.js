import React, {Fragment,useState,useEffect} from "react"
import {getOrderList} from "../../service/user"
function List(){
    const [title] = useState('我是列表的标题')
    const [orderList,setOrderList] =useState([])
    // 生命周期
    useEffect(()=>{
        const getList = async ()=>{
            const {data,code} = await getOrderList()
            if(code===1){
                setOrderList(data)
            }
        }
        getList()
    },[])
    return(
        <Fragment>
            <div>{title}</div>
            <div>{JSON.stringify(orderList)}</div>
        </Fragment>
    )
}
export default List