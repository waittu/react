import React,{Component,Fragment } from "react"
import ListItem from "./listItem"
class List extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:['头部按摩','精油推背'],
            addItemValue:""
        }
    }
    inputChange(event){
        this.setState({
            addItemValue:event.target.value
        })
    }
    addListItem(){
        const {list,addItemValue} = this.state
        if(!addItemValue){
            return;
        }
        this.setState({
            list:[...list,addItemValue],
            addItemValue:""
        })
    }
    deleteItem(index){
        const {list} = this.state
        list.splice(index,1)
        this.setState({
            list 
        })
    }
    render(){
        const {list,addItemValue} = this.state
        return (
            <Fragment>
                <input type="text" 
                    value={addItemValue} 
                    placeholder="输入你要的服务" 
                    onChange={this.inputChange.bind(this)}/>
                <button onClick={this.addListItem.bind(this)}>添加列表</button>
                <ul>
                    {
                        list.map((item,index)=>{ 
                            return (
                                <ListItem 
                                    key={index}
                                    content={item}
                                    index={index}
                                    deleteItem={this.deleteItem.bind(this)}
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}
export default List