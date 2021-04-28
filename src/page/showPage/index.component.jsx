import React from 'react'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import state from './index.state'
import ViewPort from './components/viewPort/index.component'
import { withRouter } from 'react-router-dom'
import { DatePicker } from 'antd'
import customizeChartState from '../customizeChart/index/index.state'
import './index.scss'

const { MonthPicker } = DatePicker;
export default withRouter(observer((props) => {

    return (
        <div className="showPage">
            <div className='date'>
                <MonthPicker onChange={state.changePageData} value={state.date.momentDate} placeholder="选择年月" />
            </div>
            <div className='menuList'>
                <div
                    className='backToAddPage'
                    onClick={() => {
                        props.history.push('/customizeChart?isEditPage=true');
                        customizeChartState.cancelPage();
                        state.currentPageInfo = {
                            type: '',
                            pageName: '',
                            data: []
                        }
                    }
                    }>配置页面</div>
                <ul>
                    {
                        toJS(state.pageData).map((v, i) => {
                            return <li key={i} className={v.pageName === state.currentPageInfo.pageName ? 'action' : ''} onClick={() => { state.changePageContent(v) }}>{v.pageName}</li>
                        })
                    }
                </ul>
            </div>
            <div className='viewPort'>
                <ViewPort
                    currentPageInfo={toJS(state.currentPageInfo)}

                />
            </div>
        </div>
    )
}))