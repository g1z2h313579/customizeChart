import React from 'react'
import SettingMeetingPage from './settingMeetingPage/index.component'

export default (props) => {
    return (
        <div className = "meetingPage">
            {
                props.isSettingMeeting ? 
                <SettingMeetingPage/>
                :
                "浏览会议页面"
            }

        </div>
    )
}