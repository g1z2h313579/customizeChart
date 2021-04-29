import React from 'react'

export default (props) => {
    return (
        <div className = "meetingReference">
            {
                props.isSettingMeeting ? 
                "配置会议参考页面"
                :
                "浏览会议参考页面"
            }

        </div>
    )
}