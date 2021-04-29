import React from 'react'
import { Input,Button } from 'antd'

export default (props) => {
    return (
        <div className = "pageConfig">
            <span className = "pageLevel">页面{props.key}</span>
            <Input placeholder="请输入页面/标题名称" value = {props.pageName} onChange = {(e) => {props.pageNameChange(e, props.key)}} />
            <Button type="primary" onClick = {() => {props.addChildPage(props.key)}}>添加子页面</Button>
            <Button type="primary" onClick = {() => {props.toPageConfig(props.key)}}>添加页面内容</Button>
        </div>
    )
}