import React,{ useRef } from 'react'
import SelectComponent from '../../../ChartConfiguration/components/components/selectComponent/index.component'
import ChartView from '../../../ChartConfiguration/components/view/chartView'
import './index.scss'
export default (props) => {

    const inputEl = useRef(null);

    function showSelectOrChart(type, index, t) {
        console.log("inputEl",inputEl.current && inputEl.current.offsetWidth)
        console.log("t",t)
        return (
            <div className='content' >
                {
                    props.pageData[type].isCheckChart[index] ?
                        <>
                            <span className='editAgain' onClick={() => { props.editAgain(type, index) }}>切换卡片</span>
                            <ChartView
                                data={props.pageData[type].data[index].data}
                                chartTypeValue={props.pageData[type].data[index].chartTypeValue}
                                chartDatatype={props.pageData[type].data[index].chartDatatype}
                                height={inputEl.current && inputEl.current.offsetHeight - 100}
                                width={inputEl.current && inputEl.current.offsetWidth * t}
                            />
                        </>
                        :
                        <>
                            <span className='card-name'>卡片名称：</span>
                            <SelectComponent
                                style={{ width: '60%' }}
                                targetListChange={props.pageSelectOnChnage}
                                targetList={props.pageSelectList}
                                currentSelectValue={props.pageData[type].selectList[index]}
                                index={`${type}-${index}`}
                            />
                            
                        </>
                }
            </div>
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
                            {showSelectOrChart('double', 0, 0.49 )}
                        </div>
                        <div>
                            {showSelectOrChart('double', 1, 0.49 )}
                        </div>
                    </div>
                )
            case 'tri':
                return (
                    <div className="tri">
                        <div>
                            {showSelectOrChart('tri', 0, 0.31)}
                        </div>
                        <div>
                            {showSelectOrChart('tri', 1, 0.31)}
                        </div>
                        <div>
                            {showSelectOrChart('tri', 2, 0.31)}
                        </div>
                    </div>
                )
        }
    }

    return (
        <div className='pageView' ref={inputEl}>
            {
                chooseShowPage(props.mode)
            }

        </div>
    )
}
