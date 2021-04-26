import React from 'react'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import state from '../index/index.state'
import PageView from './components/pageView/index.component'
import './index.scss'


export default observer(() => {

    
    return (
        <div className = 'editPage'>
            <div className = 'editModewrap'>
            {
                state.pageMode.map(v => {
                    return (
                        <div key = {v.value} className = {state.currentPageMode === v.value ? 'editModeItem action' : 'editModeItem'} onClick = {() => {state.choosePageMode(v.value)}} >
                            {v.label}
                        </div>
                    )
                })
            }
            <div className = 'back' onClick = {() => {state.backToCardPage()}} style = {{cursor : 'pointer'}}>返回编辑卡片</div>
            </div>
            <PageView
                mode = {state.currentPageMode}
                pageSelectOnChnage = {state.pageSelectOnChnage}
                pageSelectList = {toJS(state.pageSelectList)}
                pageData = {toJS(state.pageData)}
                height = {700}
                width = {600}
            />
        </div>
    )
})