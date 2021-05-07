import React from 'react'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import state from './index.state'
import MeetingDetail from './components/meetingDetail/index.component'
import EditPage from '../customizeChart/editPage/index.component'
import './index.scss'

export default observer((props) => {
    return (
        <div className='meetingConfig'>
            {
                state.isToPageConfig ?
                <EditPage/>
                :
                <MeetingDetail
                    isSettingMeeting = {toJS(state.isSettingMeeting)}
                    meetingDetailData = {toJS(state.meetingDetailData)}
                    toMeetingList = {state.toMeetingList}
                    tabActiveKey = {state.tabActiveKey}
                    tabActiveKeyTonull = {state.tabActiveKeyTonull}
                />
            }
        </div>
    )
})