import React from 'react'
import { Radio } from 'antd';


export default (props) => {
    // console.log(props,'props')
    return (
        <div className='chartType'>
            <Radio.Group onChange={props.chartTypeChange} value={props.chartTypeValue}>
                {
                    props.chartTypeList.map((v, i) => {
                        return (
                            <Radio value = {v.value} key = {i}>{v.label}</Radio>
                        )
                    })
                }
            </Radio.Group>

        </div>
    )
}