import React from 'react'
import { Select } from 'antd';
const { Option } = Select;
import './index.scss'
export default (props) => {
    return (
        <Select
            className='select-style'
            showSearch
            style={props.style}
            onChange={(value) => {props.targetListChange(value, props.index)}}
            value = {props.currentSelectValue}
            disabled = {props.disabled}
        >
            {
                props.targetList.map((v, i) => {
                    return (
                        <Option value = {v.value} key={i}>
                            {v.label}
                        </Option>
                    )
                })
            }
        </Select>
    )
}
