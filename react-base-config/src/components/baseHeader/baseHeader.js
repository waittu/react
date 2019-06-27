import React,{Component,Fragment} from "react"
import {NavLink} from "react-router-dom"
import routers from "../../router"
import "./baseHeader.less"
class baseHeader extends Component{
    constructor(props){
        super(props)
        this.state = {
            routers
        }
    }
    render(){
        return (
            <Fragment>
                <div className="header-warp">
                    <div className="header-content">
                        {
                            routers.map((item,index)=>{
                                return (
                                    <NavLink exact key={index} to={item.path} activeClassName="active">{item.titleName}</NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default baseHeader