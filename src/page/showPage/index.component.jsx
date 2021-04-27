import React from 'react'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import state from './index.state'
import ViewPort from './components/viewPort/index.component'
import { withRouter } from 'react-router-dom'
import './index.scss'


export default withRouter(observer((props) => {
    return (
        <div className = "showPage">
            <div className = 'menuList'>
                <div className = 'backToAddPage' onClick = {() => {props.history.push('/customizeChart?isEditPage=true')}}>配置页面</div>
                <ul>
                    {
                        state.pageData.map((v, i) => {
                            return <li key = {i} onClick = {() => {state.changePageContent(v)}}>{v.pageName}</li>
                        })
                    }
                </ul>
            </div>
            <div className = 'viewPort'>
                <ViewPort
                    currentPageInfo = {toJS(state.currentPageInfo)}

                />
            </div>
        </div>
    )
}))