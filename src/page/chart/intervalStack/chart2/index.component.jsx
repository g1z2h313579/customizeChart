import React from 'react';
import chart from './chart';


const data = [
    { label : '东区', type : '投决', value : 123, value1 : -12 },
    { label : '东区', type : '压力测试', value : 222, value1 : -12 },
    { label : '东区', type : '平安净收益', value : -12, value1 : -12 },
    { label : '南区', type : '投决', value : 321, value1 : -321 },
    { label : '南区', type : '压力测试', value : 333, value1 : -321 },
    { label : '南区', type : '平安净收益', value : -321, value1 : -321 },
    { label : '西区', type : '投决', value : 444, value1 : -222 },
    { label : '西区', type : '压力测试', value : 555, value1 : -222 },
    { label : '西区', type : '平安净收益', value : -222, value1 : -222 },
]

// const data = [
//     { label : '东区', value2 : 222, value : 123, value1 : -12 },
// ]

class IntervalStackLine extends React.Component{
    constructor (props){
        super(props);
        this.container = React.createRef();
    }

    componentDidMount() {
        let config = {
            container : this.container.current,
            data : data
        };
        // console.log("chart",chart)
        new chart(config)
    }

    render(){
        return (
            <div ref = {this.container}></div>
        )
    }
}

export default IntervalStackLine