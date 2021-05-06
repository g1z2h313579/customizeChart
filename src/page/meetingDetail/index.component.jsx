import React, {useState} from 'react'
import { Button, Tabs } from 'antd';
import './index.scss'
import { LeftOutlined } from "@ant-design/icons";
import { withRouter } from "react-router";
export default withRouter((props) => {
    function toMeetingList(){
        props.history.push("/meetingList");
    }
    return (
        <div className='meetingDetail'>
            {/*<div className="title">{props.isSettingMeeting ? '会议详情' : title}</div>*/}
            <Button className='back'  onClick = {toMeetingList} icon={<LeftOutlined />}>返回</Button>
            <div className="meeting_info">
                会议详情
            </div>
        </div>
    )
})
