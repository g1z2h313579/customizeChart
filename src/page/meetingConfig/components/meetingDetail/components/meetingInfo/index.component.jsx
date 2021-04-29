import React from 'react'

export default (props) => {
    return (
        <div className = "meetingInfo">
            {
                props.isSettingMeeting ? 
                "配置会议信息页面"
                :
                "浏览会议信息页面"
            }

        </div>
    )
}