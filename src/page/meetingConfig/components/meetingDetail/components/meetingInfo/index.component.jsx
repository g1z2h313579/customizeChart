import React from "react";
import { Form, Input, Button, Select, DatePicker, TimePicker } from "antd";
import { CloseCircleOutlined, PlusCircleOutlined, DeleteOutlined,SaveOutlined,SendOutlined,AliwangwangOutlined } from "@ant-design/icons";
const { Option } = Select;
const { RangePicker } = DatePicker;
export default (props) => {
  function onGenderChange(value) {
    console.log(value);
  }

  return (
    <div className="meetingInfo">
      <Form wrapperCol={{ span: 14 }} layout="horizontal">
        <Form.Item label="公司类型" name="companyType" wrapperCol={{ span: 4 }}>
          <Select
            placeholder="请选择公司类型"
            onChange={onGenderChange}
            allowClear
            defaultValue="公司"
          >
            <Option value="公司">公司</Option>
            <Option value="中心">中心</Option>
            <Option value="区域">区域</Option>
            <Option value="城市">城市</Option>
          </Select>
        </Form.Item>
        <Form.Item label="会议标题" name="meetingTitle">
          <Input
            placeholder="请输入会议标题"
            defaultValue="公司2021年5月经分会"
          />
        </Form.Item>
        <Form.Item name="meetingTime" label="会议时间">
          <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
        <Form.Item name="meetingAddress" label="会议地点">
          <Input.TextArea rows={4} placeholder="请输入会议地点" />
        </Form.Item>
        <Form.Item name="meetingUser" label="参会人员">
          <Input placeholder="请输入姓名或UM账号" />
          <div className="meetingUserList">
            <div>
              张三
              <CloseCircleOutlined />
            </div>
            <div>
              李四
              <CloseCircleOutlined />
            </div>
            <div>
              王五
              <CloseCircleOutlined />
            </div>
            <div>
              衣无畏
              <CloseCircleOutlined />
            </div>
            <div>
              李欣然
              <CloseCircleOutlined />
            </div>
          </div>
          <PlusCircleOutlined className="add" />
        </Form.Item>
        <Form.Item name="meetingAgenda" label="会议议程">
          <Button type="primary" icon={<PlusCircleOutlined />}>
            添加议程
          </Button>
          <div className="meetingAgendaList">
            <div className="agenda_title">议程1</div>
            <div className="agenda_delete"><DeleteOutlined /></div>
            <div className="agenda_time">
              <DatePicker placeholder="请选择日期"/>
              <TimePicker placeholder="起始时间"/>
              <TimePicker placeholder="截止时间"/>
            </div>
            <div className="agenda_content">
              <Input.TextArea rows={3} value="公司2021年5月经分会"/>
            </div>
          </div>
          <div className="meetingAgendaList">
            <div className="agenda_title">议程2</div>
            <div className="agenda_delete"><DeleteOutlined /></div>
            <div className="agenda_time">
              <DatePicker placeholder="请选择日期"/>
              <TimePicker placeholder="起始时间"/>
              <TimePicker placeholder="截止时间"/>
            </div>
            <div className="agenda_content">
              <Input.TextArea rows={3} value="公司2021年5月经分会"/>
            </div>
          </div>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 5 }}>
          <Button className="btn" type="primary" htmlType="submit" icon={<SaveOutlined />}>
            保存
          </Button>
          <Button className="btn" type="primary" htmlType="submit" icon={<SendOutlined />}>
            发布
          </Button>
          <Button className="btn" type="primary" htmlType="submit" icon={<AliwangwangOutlined />}>
            推送
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
