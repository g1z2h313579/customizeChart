import React from 'react'
import { DatePicker,Input } from 'antd';
import { CloseCircleOutlined, PlusCircleFilled } from '@ant-design/icons';

import SelectComponent from '../components/selectComponent/index.component'
import deletePng from '../../../../../assets/delete.png'

const { MonthPicker } = DatePicker;
export default (props) => {
    return (
        <>
            <div className='time'>
                {/* <MonthPicker onChange={props.modalDateChange} value = {props.date} placeholder="选择年月" /> */}
            </div>
            <div className='targetList blockClass'>
                <span className='title'>选择指标</span>
                <PlusCircleFilled className='add' onClick={() => { props.addSelect() }}/>
                {
                    props.selectTargetList.map((val, index) => {
                        return (
                            <div className='selectItem' key={index}>
                                <SelectComponent
                                    style={ {width: '100%'} }
                                    targetListChange={props.targetListChange}
                                    targetList={props.targetList}
                                    currentSelectValue={val}
                                    index={index}
                                />
                                <span className = 'decrease' onClick = { () => {props.decreaseSelect(index)} }>
                                    <img style={ {width: '15px', height: '15px'} } src={deletePng} alt=""/>
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="dimension blockClass">
                <span className='title'>选择维度</span>
                <SelectComponent
                    style={ {width: 'calc(100% - 35px)'} }
                    targetListChange={props.dimensionChange}
                    targetList={props.dimensionList}
                    currentSelectValue={props.dimensionCurrentSelect}
                    index={null}
                    disabled = {true}
                />
            </div>
            <div className = 'cardName blockClass'>
                <span className='title'>卡片名称</span>
                <Input style={ {width: 'calc(100% - 35px)'} } value = {props.cardNameValue} onChange = {props.cardNameOnChange} />
            </div>
        </>
    )
}
