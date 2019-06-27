import React,{Component} from "react"
class listItem extends Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    // 解决渲染问题
    shouldComponentUpdate(nextProps){
        return nextProps.content !== this.props.content?true:false
    }
    render(){
        const {content} = this.props
        return(
            <li onClick={this.handleClick}>{content}</li>
        )
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
}
export default listItem