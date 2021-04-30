import React from 'react'
import SelectComponent
    from "../../../customizeChart/ChartConfiguration/components/components/selectComponent/index.component";
import { Button, Col, Form, Row, Select, DatePicker } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import './index.scss'
import { Option } from "antd/es/mentions";
const { RangePicker } = DatePicker
export default (props) => {
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
                            <Button onClick={props.addMeeting} icon={<PlusCircleFilled />} type="primary">添加会议</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
            <div className="content">
                {
                    props.meetingList.map((v, i) => {
                        return (
                            <div className='card-item' key={i}>
                                <h3>{v.title}</h3>
                                <p>{v.time}</p>
                                <Button onClick={props.showMeetingDetail} type='primary'>查看详情</Button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
