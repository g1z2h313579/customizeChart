import React from 'react'
import SelectComponent from '../../../ChartConfiguration/components/components/selectComponent/index.component'
import ChartView from '../../../ChartConfiguration/components/view/chartView'
export default (props) => {


    function showSelectOrChart(type, index, width, height) {
        return (
            <>
                {
                    props.pageData[type].isCheckChart[index] ?
                        <>
                        <span className = 'editAgain' onClick = {() => {props.editAgain(type,index)}}>切换卡片</span>
                        <ChartView
                            data={props.pageData[type].data[index].data}
                            chartTypeValue={props.pageData[type].data[index].chartTypeValue}
                            chartDatatype={props.pageData[type].data[index].chartDatatype}
                            height={height}
                            width={width}
                        />
                        </>
                        :
                        <SelectComponent
                            targetListChange={props.pageSelectOnChnage}
                            targetList={props.pageSelectList}
                            currentSelectValue={props.pageData[type].selectList[index]}
                            index={`${type}-${index}`}
                        />

                }
            </>
        )
    }


    function chooseShowPage(mode) {
        // console.log("props.pageData", props.pageData)
        // console.log("mode", mode)
        switch (mode) {
            case 'double':
                return (
                    <div className="double">
                        <div>
                            {showSelectOrChart('double', 0, 600, 700)}
                        </div>
                        <div>
                            {showSelectOrChart('double', 1, 600, 700)}
                        </div>
                    </div>
                )
            case 'tri':
                return (
                    <div className="tri">
                        <div>
                            {showSelectOrChart('tri', 0, 400, 700)}
                        </div>
                        <div>
                            {showSelectOrChart('tri', 1, 400, 700)} 
                        </div>
                        <div>
                            {showSelectOrChart('tri', 2, 400, 700)}
                        </div>
                    </div>
                )
        }
    }

    return (
        <div className='pageView'>
            {
                chooseShowPage(props.mode)
            }

        </div>
    )
}