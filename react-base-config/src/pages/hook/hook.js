import React,{ Fragment,useState,useEffect} from "react"
export default function Hook (props){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log(`点我第${count}次`)
    })
    return (
        <Fragment>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    点我
                </button>
            </div>
        </Fragment>
    )
}