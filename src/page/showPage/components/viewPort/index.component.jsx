import React from 'react'
import ChartView from '../../../customizeChart/ChartConfiguration/components/view/chartView'

export default (props) => {
    // console.log("props", props)
    function renderChart(index, height, width) {
        return (
            <ChartView
                data={props.currentPageInfo.data[index].data}
                chartTypeValue={props.currentPageInfo.data[index].chartTypeValue}
                chartDatatype={props.currentPageInfo.data[index].chartDatatype}
                height={height}
                width={width}
            />
        )
    }


    function pageMode() {
        // console.log("props.currentPageInfo.type",props.currentPageInfo.type)
        switch (props.currentPageInfo.type) {
            case "double":
                return (
                    <div className = "double">
                        <div>
                            {renderChart(0, 700, 600)}
                        </div>
                        <div>
                            {renderChart(1, 700, 600)}
                        </div>
                    </div>
                )
            case "tri":
                return (
                    <div className = 'tri'>
                        <div>
                            {renderChart(0, 700, 400)}
                        </div>
                        <div>
                            {renderChart(1, 700, 400)}
                        </div>
                        <div>
                            {renderChart(2, 700, 400)}
                        </div>
                    </div>
                )
        }
    }

    return (
        <div className="viewPortWrap">
            {
                props.currentPageInfo.type !== '' &&
                pageMode() 
            }

        </div>
    )
}