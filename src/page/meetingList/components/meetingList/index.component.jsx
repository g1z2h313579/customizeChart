import React from 'react'
import { Button, Col, Form, Row, Select, DatePicker } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import './index.scss'
const { Option } = Select;
const { RangePicker } = DatePicker
import { withRouter } from "react-router";
export default withRouter((props) => {
    function showMeetingDetail() {
        props.history.push("/meetingDetail");
    }
    function showMeetingPage() {
        // props.history.push("/meetingConfig");
    }
    function addMeeting() {
        props.history.push("/meetingConfig");
    }
    return (
        <>
            <div className="header">
                <Form
                >
                    <Row>
                        <Col span={6}>
                            <Form.Item label="会议类型">
                                <Select defaultValue="">
                                    <Option value="">全部</Option>
                                    <Option value="1">公司</Option>
                                    <Option value="2">中心</Option>
                                    <Option value="3">区域</Option>
                                    <Option value="4">城市</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="会议时间">
                                <RangePicker />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item />
                        </Col>
                        <Col span={6}>
                            <Button onClick={addMeeting} icon={<PlusCircleFilled />} type="primary">添加会议</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="content">
                {
                    props.meetingList.map((v, i) => {
                        return (
                            <div className='card-item' key={i}>
                                <div className="title">
                                    <h3>{v.title}</h3>
                                    {renderStatus(v.status)}
                                </div>
                                <div className="time">
                                    <div className="time-title">会议时间：</div>
                                    <div className="time-date">{v.time}</div>
                                </div>
                                <div className="btn-wrap">
                                    <Button className="btn btn-info" onClick={showMeetingDetail} type='primary'>查看详情</Button>
                                    <Button className="btn btn-page" onClick={showMeetingPage} type='primary'>会议页面</Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
})

function renderStatus (status){
    let html = "", className = "";
    switch (status) {
        case 0:
            html = "未开始";
            className = "not_start";
            break;
        case 1:
            html = "进行中";
            className = "processing";
            break;
        default:
            html = "已结束";
            className = "over";
            break;
    }
    return <span className={`status ${className}`}>{html}</span>
}