import React, { useRef } from 'react'
import ChartView from '../../../customizeChart/ChartConfiguration/components/view/chartView'

export default (props) => {
    console.log("props1111",props)
    const showPageContainer = useRef(null)
    // console.log("showPageContainer",showPageContainer)
    function renderChart(index, type) {
        let t = 1
        if(type === 'double'){
            t = 2
        }else {
            t = 3
        }
        console.log("t",t)
        return (
            <div>
                <ChartView
                    data={props.currentPageInfo.data[index].data}
                    chartTypeValue={props.currentPageInfo.data[index].chartTypeValue}
                    chartDatatype={props.currentPageInfo.data[index].chartDatatype}
                    height={showPageContainer.current && showPageContainer.current.offsetHeight - 80}
                    width={showPageContainer.current && showPageContainer.current.offsetWidth/t}
                />
            </div>

        )
    }


    function pageMode() {
        // console.log("props.currentPageInfo.type",props.currentPageInfo.type)
        switch (props.currentPageInfo.type) {
            case "double":
                return (
                    <div className="double">

                        {renderChart(0,"double")}


                        {renderChart(1,"double")}

                    </div>
                )
            case "tri":
                return (
                    <div className='tri'>

                        {renderChart(0,'tri')}


                        {renderChart(1,'tri')}


                        {renderChart(2,'tri')}

                    </div>
                )
        }
    }

    return (
        <div className="viewPortWrap" ref = {showPageContainer}>
            {
                props.currentPageInfo && props.currentPageInfo.type !== '' &&
                pageMode()
            }

        </div>
    )
}