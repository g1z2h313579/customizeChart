import React from 'react'

export default (props) => {
    return (
        <div className = "meetingStuff">
            {
                props.isSettingMeeting ? 
                "配置会议材料页面"
                :
                "浏览会议材料页面"
            }

        </div>
    )
}