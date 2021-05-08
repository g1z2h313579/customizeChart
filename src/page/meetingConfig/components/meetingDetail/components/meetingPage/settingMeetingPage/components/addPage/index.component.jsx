import React from 'react'
import { Input,Button } from 'antd'
import { withRouter } from 'react-router-dom'

export default (props) => {
    // console.log("props",props)
    return (
        <div className = "pageConfig">
            <span className = "pageLevel">页面{props.currentKey}</span>
            <Input placeholder="请输入页面/标题名称" value = {props.pageName} onChange = {(e) => {props.pageNameChange(e, props.currentKey)}} />
            <span className = "addChildPage common" onClick = {() => {props.addChildPage(props.currentKey)}}>添加子页面</span>

            <span className = "addPageContent common" onClick = {() => {props.toPageConfig(props.currentKey)}}>添加页面内容</span>
        </div>
    )
}