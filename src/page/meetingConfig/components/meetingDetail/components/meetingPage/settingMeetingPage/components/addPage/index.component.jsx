import React from 'react'
import { Input,Button } from 'antd'

export default (props) => {
    // console.log("props",props)
    return (
        <div className = "pageConfig">
            <span className = "pageLevel">页面{props.currentKey}</span>
            <Input placeholder="请输入页面/标题名称" value = {props.pageName} onChange = {(e) => {props.pageNameChange(e, props.currentKey)}} />
            <Button type="primary" onClick = {() => {props.addChildPage(props.key)}}>添加子页面</Button>
            <Button type="primary" onClick = {() => {props.toPageConfig(props.key)}}>添加页面内容</Button>
        </div>
    )
}