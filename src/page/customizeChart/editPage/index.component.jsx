import React from 'react'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import state from '../index/index.state'
import PageView from './components/pageView/index.component'
import { Button, Input } from 'antd';
import { withRouter } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'
import './index.scss'


export default withRouter(observer((props) => {


    return (
        <div className='editPage'>
            <div className='editModewrap'>
                {/*<div className='pageName'>*/}
                {/*    <span className='title'>页面名称:</span>*/}
                {/*    <Input value={state.pageNameValue} onChange={state.pageNameOnChange} />*/}
                {/*</div>*/}
                <Button className='back' onClick={() => { state.backToCardPage() }} icon={<LeftOutlined />}>返回编辑卡片</Button>
                {
                    state.pageMode.map(v => {
                        return (
                            <div key={v.value} className={state.currentPageMode === v.value ? 'editModeItem action' : 'editModeItem'} onClick={() => { state.choosePageMode(v.value) }} >
                                {v.label}
                            </div>
                        )
                    })
                }
                {/*<div className='yesOrNo'>*/}
                {/*    /!* <span className = 'yes' onClick = {state.confirmPage}><Link to = {'/showPage'}>确认</Link></span> *!/*/}
                {/*    <span className = 'yes' onClick = {() => {state.confirmPage(props)}}>确认</span>*/}
                {/*    <span className = 'no' onClick = {state.cancelPage}>取消</span>*/}
                {/*</div>*/}
            </div>
            <PageView
                mode={state.currentPageMode}
                pageSelectOnChnage={state.pageSelectOnChnage}
                pageSelectList={toJS(state.pageSelectList)}
                pageData={toJS(state.pageData)}
                editAgain={toJS(state.editAgain)}
            />
        </div>
    )
}))
