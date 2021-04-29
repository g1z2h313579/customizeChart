import React from 'react'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import state from './index.state'
import MeetingList from './components/meetingList/index.component'
import MeetingDetail from './components/meetingDetail/index.component'
import './index.scss'

export default observer((props) => {
    return (
        <div className='meetingConfig'>
            {
                !toJS(state.isShowMeetingDetail) &&
                <MeetingList
                    addMeeting = {state.addMeeting}
                    meetingList = {toJS(state.meetingList)}
                    showMeetingDetail = {state.showMeetingDetail}
                />
            }
            {
                toJS(state.isShowMeetingDetail) &&
                <MeetingDetail
                    isSettingMeeting = {toJS(state.isSettingMeeting)}
                    meetingDetailData = {toJS(state.meetingDetailData)}
                    toMeetingList = {state.toMeetingList}
                />
            }

        </div>
    )
})