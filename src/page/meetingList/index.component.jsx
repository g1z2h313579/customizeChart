import React from 'react'
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import state from './index.state'
import MeetingList from './components/meetingList/index.component'
import './index.scss'

export default observer((props) => {
    return (
        <div className='meetingList'>
                <MeetingList
                    addMeeting = {state.addMeeting}
                    meetingList = {toJS(state.meetingList)}
                    showMeetingDetail = {state.showMeetingDetail}
                />
        </div>
    )
})