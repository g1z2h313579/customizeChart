import React,{useState, useEffect} from 'react';
import {observer} from 'mobx-react';
import state from './index.state'


let functionComponent = () => {

    // let [count,setCount] = useState(0)

    useEffect(() => {
        state.changeNum()
        // return state.clearNum
        
        // console.log(count,'========')
    },[])
    // setCount(1)
    // console.log(count,'1111111')
    return (
        <>
            <h2>this is a function Component</h2>
            <h3>change data with mobx :{ state.num }</h3>
        </>
    )
}

export default observer(functionComponent)