import React, {useEffect, useState} from 'react'
import { Tree } from 'antd'
import state from './index.state'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'

export default observer((props) => {

    // useEffect(() => {
    //     state.treeData = state.createKey(state.initTreeData,0)
    //     console.log("state.treeData000",toJS(state.treeData))
    // },[])
    // console.log("state.treeData1111",toJS(state.treeData))
    return (
        <div className="settingMeetingPage">
            <div className="seeOrSave">
                <span className="see">预览</span>
                <span className="save">保存</span>
            </div>


            <div className="pageContent">
                <div onClick = {state.addParentNode}>添加页面</div>
                <Tree
                    showIcon
                    defaultExpandAll
                    defaultSelectedKeys={['0-0-0']}
                    treeData={toJS(state.treeData)}
                />

            </div>
        </div>
    )
})