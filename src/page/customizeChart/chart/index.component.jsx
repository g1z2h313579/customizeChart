import React from 'react';

import ChartView from '../ChartConfiguration/components/view/chartView'


export default class extends React.Component {


    render() {
        // console.log("this.this.props",this.props)
        return (
            <ChartView
                data={this.props.chartView.modalChartData}
                chartTypeValue={this.props.chartView.chartTypeValue}
                chartDatatype={this.props.chartView.chartDatatype}
                height={this.props.chartView.height}
                width = {this.props.chartView.width}
            />
        )
    }
}


