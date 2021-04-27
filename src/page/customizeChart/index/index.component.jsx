import React from 'react';
import ChartItem from '../chart/index.component'
import { observer } from 'mobx-react'
import { Modal } from 'antd';
import { toJS } from 'mobx'
import state from './index.state'
import { Switch } from 'antd'
import moment from 'moment'
import ChartConfiguration from '../ChartConfiguration/index.component'
import EditPage from '../editPage/index.component'

import './index.scss'

@observer
class CustomizeChart extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentWillMount() {
        if(window.location.pathname === "/customizeChart?isEditPage=true"){
            state.editPage(true)
        }
    }

    componentDidMount() {
        
    }


    render() {
        // console.log("toJS(state.chartConfigList)",toJS(state.chartConfigList))
        return (
            <div className='customizeChart'>
                {
                    !state.isEditPage &&
                    <>
                    <div className='changeShowType'>
                        <span onClick={() => { state.editPage(true) }} style = {{cursor : 'pointer', marginLeft : "40px"}}>编辑页面</span>
                        <span>编辑卡片</span><Switch checked={state.isChangePage} onChange={state.onChange} />
                    </div>
                    <div className='viewPort'>
                        {
                            toJS(state.chartConfigList).map((v, i, arr) => {
                                if (i === arr.length - 1 && state.isChangePage) {
                                    return (
                                        <div
                                            className={state.isChangePage ? 'chartItemWarp mask' : 'chartItemWarp'}
                                            key={i} ref={this.chartItemWarp}
                                            onClick={() => { state.addChart() }}
                                        >
                                            添加卡片
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div
                                            className={state.isChangePage ? 'chartItemWarp shake mask' : 'chartItemWarp'}
                                            key={i} ref={this.chartItemWarp}
                                            onClick={() => { state.changeChartType(v, i) }}
                                        >
                                            {
                                                state.isChangePage &&
                                                <div className='deleteItem' onClick={(e) => { state.deleteChartItem(v, i, e) }}> x </div>
                                            }
                                            <ChartItem
                                                chartView={{
                                                    chartTypeValue: v.chartTypeValue,
                                                    modalChartData: v.data,
                                                    chartDatatype: v.chartDatatype,
                                                    height: 380
                                                }}

                                            />
                                        </div>

                                    )

                                }
                            })
                        }

                    </div>

                    <Modal
                        title="图形配置"
                        visible={state.modalVisible}
                        onOk={state.handleOk}
                        onCancel={state.handleCancel}
                        width={'80%'}
                    >
                        <ChartConfiguration
                            common={{
                                data: toJS(state.currentChartData),                             //当前图形数据
                                index: toJS(state.currentItemIndex)                            //当前图形数据索引
                            }}

                            dataConfig={{
                                modalDateChange: state.modalDateChange,                         //modal时间changeFunction
                                targetList: toJS(state.targetList),                          //select的optionlist
                                targetListChange: state.targetListChange,                    //select onchange
                                selectTargetList: toJS(state.selectTargetList),             //selectList
                                addSelect: state.addSelect,
                                decreaseSelect: state.decreaseSelect,
                                dimensionChange: state.dimensionChange,                       //维度onchange
                                dimensionList: toJS(state.dimensionList),
                                dimensionCurrentSelect: toJS(state.dimensionCurrentSelect),
                                cardNameOnChange: state.cardNameOnChange,
                                cardNameValue: toJS(state.cardNameValue),
                                date: toJS(state.modalYearMonth).momentDate
                            }}

                            chartType={{
                                chartTypeChange: state.chartTypeChange,
                                chartTypeValue: toJS(state.chartTypeValue),
                                chartTypeList: toJS(state.chartTypeList)
                            }}

                            chartView={{
                                chartTypeValue: toJS(state.chartTypeValue),
                                modalChartData: toJS(state.modalChartData),
                                chartDatatype: toJS(state.chartDatatype),
                                height: 300
                            }}

                        />
                    </Modal>
                    </>
                }
                {
                    state.isEditPage &&
                    <EditPage/>
                }

            </div>
        )
    }
}

export default CustomizeChart