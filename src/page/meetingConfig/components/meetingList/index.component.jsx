import React from 'react'

export default (props) => {
    return (
        <>
            <div className="header">
                <div className="title">会议列表</div>
                <div onClick={props.addMeeting}>添加会议</div>
            </div>
            <div className="content">
                {
                    props.meetingList.map((v, i) => {
                        return (
                            <div className='cardItem' key={i} onClick = {props.showMeetingDetail}>
                                <span>{v.title}</span>
                                <span>{v.time}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}