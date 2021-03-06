import React from 'react';
import ChartItem from '../chart/index.component'
import { observer } from 'mobx-react'
import { Button, Modal } from 'antd';
import { toJS } from 'mobx'
import state from './index.state'
import { Switch, DatePicker } from 'antd'
import moment from 'moment'
import ChartConfiguration from '../ChartConfiguration/index.component'
import EditPage from '../editPage/index.component'
import editPagePng from '../../../assets/edit-page.png'
import editCardPng from '../../../assets/edit-card.png'
import settingPng from '../../../assets/setting.png'
import deletePng from '../../../assets/delete.png'
import {
    PlusCircleFilled,
} from '@ant-design/icons'
import './index.scss'
const { MonthPicker } = DatePicker;
@observer
class CustomizeChart extends React.Component {
    constructor(props) {
        super(props)
        this.cardContainer = React.createRef()
        this.state = {
            cardHeight: 0,
            cardWidth: 0
        }
    }

    componentWillMount() {
        // if (window.location.pathname === "/customizeChart?isEditPage=true") {
        //     // state.cancelPage()
        //     state.editPage(true)
        // }
    }

    componentWillUpdate() {
        // console.log("this.cardContainer",this.cardContainer.current.offsetHeight)
        // if(this.cardContainer.current){
        //     this.setState({
        //         cardHeight : this.cardContainer.current.offsetHeight,
        //         cardWidth : this.cardContainer.current.offsetWidth
        //     })
        // }
    }

    componentDidMount() {
        if (this.cardContainer.current && this.cardContainer.current.offsetWidth) {
            this.setState({
                cardHeight: 260,
                cardWidth: this.cardContainer.current.offsetWidth * 0.44
            })
        }

    }


    render() {

        return (
            <div className='customizeChart'>

                {/* !state.isEditPage && */}
                <>
                    <div className='changeShowType'>
                        <Button icon={<img style={{ width: '15px', height: '15px', marginBottom: '5px', marginRight: '5px' }} src={editPagePng} alt="" />} onClick={() => { state.editPage() }} className='editPageBtn' type="primary">??????</Button>
                        <Button icon={<img style={{ width: '15px', height: '15px', marginBottom: '5px', marginRight: '5px' }} src={editCardPng} alt="" />} onClick={() => { state.onChange() }} className='editCardBtn' type="primary">????????????</Button>
                        <span style={{ marginRight: '20px' }}>
                            <MonthPicker onChange={state.modalDateChange} value={state.date} placeholder="????????????" />
                        </span>
                    </div>
                    <div className='viewPort' ref={this.cardContainer}>
                        {
                            toJS(state.chartConfigList).map((v, i, arr) => {
                                if (i === arr.length - 1 && state.isChangePage) {
                                    return (
                                        <div
                                            className={state.isChangePage ? 'chartItemWarp mask' : 'chartItemWarp'}
                                            key={i} ref={this.chartItemWarp}
                                            onClick={() => { state.addChart() }}
                                            ref={this.cardContainer2}
                                        >
                                            <Button className='addCardBtn' type="primary" shape="round" icon={<PlusCircleFilled />}>
                                                ????????????
                                            </Button>
                                        </div>
                                    )
                                } else {
                                    return (

                                        <div
                                            className={state.isChangePage ? 'chartItemWarp' : 'chartItemWarp'}
                                            key={i} ref={this.chartItemWarp}
                                            // onClick={() => { state.changeChartType(v, i) }}
                                            ref={this.cardContainer}
                                        >
                                            {/* {
                                                state.isChangePage &&
                                                <img onClick={(e) => { state.deleteChartItem(v, i, e) }} className='deleteItem' src={deletePng} alt="" />
                                            } */}
                                            <div className="title">{v.cardNameValue}</div>
                                            <ChartItem
                                                chartView={{
                                                    chartTypeValue: v.chartTypeValue,
                                                    modalChartData: v.data,
                                                    chartDatatype: v.chartDatatype,
                                                    height: this.state.cardHeight,
                                                    width: this.state.cardWidth
                                                }}

                                            />
                                            {
                                                state.isChangePage &&
                                                <div className="btn">
                                                    <img src={require('../img/del.png').default} onClick={(e) => { state.deleteChartItem(v, i, e) }} />
                                                    <img style={{ marginRight: '10px' }} src={require('../img/bianji.png').default} onClick={() => { state.changeChartType(v, i) }} />
                                                </div>
                                            }

                                        </div>

                                    )

                                }
                            })
                        }

                    </div>

                    <Modal
                        className='chartConfig'
                        title={<div><img style={{ width: '15px', height: '15px', marginRight: '5px', marginBottom: '2px' }} src={settingPng} alt="" /><span style={{ marginLeft: '5px' }}>????????????</span></div>}
                        closable={false}
                        visible={state.modalVisible}
                        width={'80%'}
                        footer={
                            [
                                <Button className='cancel' key="back" size='small' onClick={state.handleCancel}>
                                    ??????
                                </Button>,
                                <Button className='submit' key='submit' size='small' type="primary" onClick={state.handleOk}>
                                    ??????
                                </Button>
                            ]
                        }
                    >
                        <ChartConfiguration
                            common={{
                                data: toJS(state.currentChartData),                             //??????????????????
                                index: toJS(state.currentItemIndex)                            //????????????????????????
                            }}

                            dataConfig={{
                                modalDateChange: state.modalDateChange,                         //modal??????changeFunction
                                targetList: toJS(state.targetList),                          //select???optionlist
                                targetListChange: state.targetListChange,                    //select onchange
                                selectTargetList: toJS(state.selectTargetList),             //selectList
                                addSelect: state.addSelect,
                                decreaseSelect: state.decreaseSelect,
                                dimensionChange: state.dimensionChange,                       //??????onchange
                                dimensionList: toJS(state.dimensionList),
                                dimensionCurrentSelect: toJS(state.dimensionCurrentSelect),
                                cardNameOnChange: state.cardNameOnChange,
                                cardNameValue: toJS(state.cardNameValue),
                                date: toJS(state.modalYearMonth).momentDate,
                                tagName: toJS(state.tagName),
                                tagNameOnChange: state.tagNameOnChange
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
                            }}

                        />
                    </Modal>
                </>

                {/* {
                    state.isEditPage &&
                    <EditPage/>
                } */}

            </div>
        )
    }
}

export default CustomizeChart
