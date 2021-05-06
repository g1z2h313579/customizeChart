import React,{ useEffect } from 'react'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import state from './index.state'
import ViewPort from './components/viewPort/index.component'
import { withRouter } from 'react-router-dom'
import { DatePicker } from 'antd'
import customizeChartState from '../customizeChart/index/index.state'
import { Tree } from 'antd'
import './index.scss'

const { MonthPicker } = DatePicker;
export default withRouter(observer((props) => {
    
    useEffect(() => {
        state.initPageData(JSON.parse(localStorage.getItem('treeData')))
    },[])

    return (
        <div className="showPage">
            <div className='date'>
                <MonthPicker onChange={state.changePageData} value={state.date.momentDate} placeholder="选择年月" />
            </div>
            <div className='menuList'>
                <Tree
                    showIcon
                    defaultExpandAll = {true}
                    autoExpandParent = {true}
                    defaultExpandParent = {true}
                    treeData={toJS(state.pageData)}
                    onSelect = {state.changePageContent}
                />

            </div>
            <div className='viewPort'>
                <ViewPort
                    currentPageInfo={toJS(state.currentPageInfo)}

                />
            </div>
        </div>
    )
}))