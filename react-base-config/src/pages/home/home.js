import React,{Component,Fragment } from "react"
import { connect } from 'react-redux'
import {getList,deleteItem} from "../../store/home/action"
import {getAddressList} from "../../service/user"
import { Card,Button,Icon} from "antd"
import "./home.less"
class Home extends Component{
    constructor(props){
        super(props)
        this.addListItem = this.addListItem.bind(this)
    }
    async componentDidMount(){
        const {data,code} = await getAddressList()
        if(code===1){
            this.props.getList(data)
        }
    }
    render(){
        const {addressList} = this.props
        return(
            <Fragment>
                <div className="card-warp">
                    {
                        addressList.map((item,index) =>{
                            return (
                                <div className="card-item" key={index} >
                                    <Card  title={item.contact}>
                                        <p>收获地址：{item.address}</p>
                                        <p>联系人：{item.telephone}</p>
                                    </Card>
                                    <span className="icon-warp" onClick={()=>{this.props.deleteItem(index)}} >
                                        <Icon type="close-circle" />
                                    </span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="buttom-warp">
                    <Button onClick={this.addListItem} type="primary">添加一条数据</Button>
                </div>
            </Fragment>
        )
    }
    // 添加一条数据
    addListItem(){
        // const item = {"id":2003954,"name":"满100减10","instructions":"满50减10","useRules":"满50减10;仅限网游大作使用","effectiveStartTime":"2019-06-10 10:08:26","effectiveEndTime":"2019-07-11 10:08:28","status":1,"denomination":"10","gameProp":1}
        // this.props.addList(item)
    }
}
const mapStateToProps = (state) => {
    const {addressList} = state.Home
    return {addressList}
}
const mapDispatchToProps = (dispatch)=>({
    getList:list=>{ dispatch(getList(list))},
    deleteItem:index=>{ dispatch(deleteItem(index))}
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)