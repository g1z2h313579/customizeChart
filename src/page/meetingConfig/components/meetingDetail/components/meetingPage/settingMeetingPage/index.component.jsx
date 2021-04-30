import React, {useEffect, useState} from 'react'
import { Tree } from 'antd'
import state from './index.state'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { toJS } from 'mobx'
import './index.scss'

export default withRouter(observer((props) => {

    useEffect(() => {
        // state.treeData = state.createKey(state.initTreeData,0)
        // console.log("state.treeData000",toJS(state.treeData))
    },[])
    // console.log("state.treeData1111",toJS(state.treeData))
    return (
        <div className="settingMeetingPage">
            <div className="seeOrSave">
                <span className="see" onClick = {() => {state.seePage(props.history)}}>预览</span>
                <span className="save" onClick = {() => {state.save()}}>保存</span>
            </div>


            <div className="pageContent">
                <div onClick = {state.addParentNode} className = 'addPage'>添加页面</div>
                <Tree
                    showIcon
                    defaultExpandAll = {true}
                    autoExpandParent = {true}
                    defaultExpandParent = {true}
                    treeData={toJS(state.treeData)}
                />

            </div>
        </div>
    )
}))