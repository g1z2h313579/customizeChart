import React from 'react';
import interval from './chart/interval/chart';
import line from './chart/line/chart'
import { chartType } from '../../../index/index.data'


class ChartView extends React.Component{
    constructor (props){
        super(props);
        this.container = React.createRef();
    }

    componentDidMount() {
        // console.log("this.props",this.props)
        let config = {
            container : this.container.current,
            data : this.props.data,
            chartDatatype : this.props.chartDatatype,
            height : this.props.height,
            width : this.props.width
        };
        switch(chartType[this.props.chartTypeValue]){
            case 'interval':
                this.chart = new interval(config)
            break
            case 'line':
                this.chart = new line(config)
            break
            default:
                this.chart = null
        }
        
    }

    componentWillReceiveProps(nextprops){
        // console.log("nextprops",nextprops)
        // console.log("this.container.current",this.container.current)
        let config = {
            container : this.container.current,
            data : nextprops.data,
            chartDatatype : nextprops.chartDatatype,
            height : nextprops.height,
            width : nextprops.width
        };
        if(this.props.chartTypeValue != nextprops.chartTypeValue){
            this.chart ? this.chart.chart.destroy() : this.chart = null
            switch(chartType[nextprops.chartTypeValue]){
                case 'interval':
                    this.chart = new interval(config)
                break
                case 'line':
                    this.chart = new line(config)
                break
                default:
                    this.chart = null
            }
        }else if(JSON.stringify(this.props.data) != JSON.stringify(nextprops.data)){
            this.chart ? this.chart.changeData(nextprops.data,nextprops.chartDatatype, nextprops.height, nextprops.width) : this.chart = null
        }
        if(this.chart){
            this.chart.chart.changeWidth(nextprops.width)
            this.chart.chart.changeHeight(nextprops.height)
        }
    }

    render(){
        return (
            <div ref = {this.container}></div>
        )
    }
}

export default ChartView