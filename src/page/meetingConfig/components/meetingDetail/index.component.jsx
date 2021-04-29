import React, {useState} from 'react'
import { Tabs } from 'antd';
import MeetingInfo from './components/meetingInfo/index.component'
import MeetingReference from './components/meetingReference/index.component'
import MeetingPage from './components/meetingPage/index.component'
import MeetingStuff from './components/meetingStuff/index.component'
import './index.scss'

const { TabPane } = Tabs;

export default (props) => {
    let [activeKey, setActiveKey] = useState("0")

    let { title = '' } = props.meetingDetailData
    return (
        <div className='meetingDetail'>
            <div className="title">{props.isSettingMeeting ? '会议详情' : title}</div>
            <div onClick = {props.toMeetingList}>返回</div>

            <Tabs activeKey = {activeKey} onChange={(key) => {setActiveKey(key)}} className = "tabClass">
                <TabPane tab="会议信息" key="0">
                    <MeetingInfo  isSettingMeeting = {props.isSettingMeeting} />
                </TabPane>
                <TabPane tab="会前参考" key="1">
                    <MeetingReference  isSettingMeeting = {props.isSettingMeeting} />
                </TabPane>
                <TabPane tab="会议页面" key="2">
                    <MeetingPage  isSettingMeeting = {props.isSettingMeeting} />
                </TabPane>
                <TabPane tab="会议材料" key="3">
                    <MeetingStuff isSettingMeeting = {props.isSettingMeeting} />
                </TabPane>
            </Tabs>
        </div>
    )
}