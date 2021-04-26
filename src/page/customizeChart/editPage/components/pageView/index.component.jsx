import React from 'react'
import SelectComponent from '../../../ChartConfiguration/components/components/selectComponent/index.component'
import ChartView from '../../../ChartConfiguration/components/view/chartView'
export default (props) => {

    function chooseShowPage(mode) {
        console.log("props.pageData",props.pageData)
        console.log("mode",mode)
        switch (mode) {
            case 'double':
                return (
                    <div className = "double">
                        <div>
                            

                            {
                                props.pageData.double.isCheckChart[0] ?
                                    <ChartView
                                        data={props.pageData.double.data[0].data}
                                        chartTypeValue={props.pageData.double.data[0].chartTypeValue}
                                        chartDatatype={props.pageData.double.data[0].chartDatatype}
                                        height={props.height}
                                        width = {props.width}
                                    />
                                    :
                                    <SelectComponent
                                        targetListChange={props.pageSelectOnChnage}
                                        targetList={props.pageSelectList}
                                        currentSelectValue={props.pageData.double.selectList[0]}
                                        index={'double-0'}
                                    />

                            }
                        </div>
                        <div>
                            {
                                props.pageData.double.isCheckChart[1] ?
                                    <div>zxczxc</div>
                                    :
                                    <SelectComponent
                                        targetListChange={props.pageSelectOnChnage}
                                        targetList={props.pageSelectList}
                                        currentSelectValue={props.pageData.double.selectList[1]}
                                        index={'double-1'}
                                    />

                            }
                        </div>
                    </div>
                )
            case 'tri':
                return (
                    <div className = "tri">
                        <div>sfd</div>
                        <div>wer</div>
                        <div>xcv</div>
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