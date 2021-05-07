import React from 'react'
import { Radio, Space } from 'antd';
import './index.scss'

export default (props) => {
    // console.log(props,'props')
    return (
        <div className='chartType'>
            {/* <Radio.Group onChange={props.chartTypeChange} value={props.chartTypeValue}>
                <Space direction="vertical">
                    {
                        props.chartTypeList.map((v, i) => {
                            return (

                                <Radio value = {v.value} key = {i}>{v.label}</Radio>
                            )
                        })
                    }
                </Space>
            </Radio.Group> */}
            {
                props.chartTypeList.map((v, i) => {
                    return (
                        <div className = "chartTypeItem" key = {i} onClick = {() => {props.chartTypeChange(v.value)}}>
                            {
                                v.value === props.chartTypeValue &&
                                <img className = "okImg" src = {require(`../../../img/ok.png`).default} />
                            }
                            <img className = "chartImg" src = {require(`../../../img/${v.value}.png`).default} />
                            <span>{v.label}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
