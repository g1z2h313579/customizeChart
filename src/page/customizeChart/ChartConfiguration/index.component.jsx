import React from 'react'
import DataConfig from './components/dataConfig/index.component'
import ChartType from './components/chartType/index.component'
import ChartView from './components/view/chartView'
import './index.scss'




export default class ChartConfiguration extends React.Component {
    constructor(props) {
        super(props)
        this.viewContainer = React.createRef()
    }


    render() {
        return (
            <div className="configModal">
                <div className='dataConfig'>
                    <DataConfig {...this.props.dataConfig} {...this.props.common} />
                </div>
                <div className='chartType'>
                    <ChartType {...this.props.chartType}  />
                </div>
                <div className='view' ref = {this.viewContainer}>
                    <ChartView
                        data = {this.props.chartView.modalChartData}
                        chartTypeValue = {this.props.chartView.chartTypeValue}
                        chartDatatype = {this.props.chartView.chartDatatype}
                        height = {this.viewContainer.current && this.viewContainer.current.offsetHeight - 100 || 300}
                        width = {this.viewContainer.current && this.viewContainer.current.offsetWidth || 316}
                    />

                </div>
            </div>
        )
    }
}



