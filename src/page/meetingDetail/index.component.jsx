import React, { useState } from "react";
import { Button, Table } from "antd";
import "./index.scss";
import {
  LeftOutlined,
  FolderViewOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { withRouter } from "react-router";
import { columns, dataSource } from "./index.data";
export default withRouter((props) => {
  function toMeetingList() {
    props.history.push("/meetingList");
  }
  return (
    <div className="meetingDetail">
      {/*<div className="title">{props.isSettingMeeting ? '会议详情' : title}</div>*/}
      <Button className="back" onClick={toMeetingList} icon={<LeftOutlined />}>
        返回
      </Button>
      <div className="meeting_info">
        <div className="meeting_time">
          <label htmlFor="">会议时间：</label>
          <span>2021-05-10 10:00 - 16:00</span>
        </div>
        <div className="meeting_address">
          <label htmlFor="">会议地点：</label>
          <span>深圳PAFC4323会议室，上海2101会议室，三方号699999</span>
        </div>
        <div className="meeting_user">
          <label htmlFor="">参会人员：</label>
          <div className="user">
            <span>泾河额，</span>
            <span>勾燕，</span>
            <span>唐荣，</span>
            <span>艺文志，</span>
            <span>蓝枫，</span>
            <span>凌波，</span>
            <span>户安置，</span>
          </div>
        </div>
        <div className="meeting_arrangement">
          <label htmlFor="">议程安排：</label>
          <div className="table">
            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />
          </div>
        </div>
        <div className="meeting_params">
          <label htmlFor="">会前参考：</label>
          <div className="params">
            <span>
              经营情况简述：亮点投融资业务表现创历史新高险资配置大幅增长，创新险资投资渠道深化团金合作机制，团金指标业绩亮眼深圳PAFC出租率逆势上扬不足利润增长存挑战人才培养需提升创新模式需突破
            </span>
            <img
              src={require("../../assets/picc.png").default}
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="meeting_annex">
          <ul>
            <li>
              <div className="name">材料一：</div>
              <div className="file_name">
                <a href="">XXXXXXXXXX.PDF</a>
              </div>
              <div className="btn">
                <Button type="primary" icon={<FolderViewOutlined />}>
                  预览
                </Button>
                <Button type="primary" icon={<DownloadOutlined />}>
                  下载
                </Button>
              </div>
            </li>
            <li>
              <div className="name">材料二：</div>
              <div className="file_name">
                <a href="">XXXXXXXXXX.PDF</a>
              </div>
              <div className="btn">
                <Button type="primary" icon={<FolderViewOutlined />}>
                  预览
                </Button>
                <Button type="primary" icon={<DownloadOutlined />}>
                  下载
                </Button>
              </div>
            </li>
            <li>
              <div className="name">材料三：</div>
              <div className="file_name">
                <a href="">XXXXXXXXXXXXXXXXX.JPG</a>
              </div>
              <div className="btn">
                <Button type="primary" icon={<FolderViewOutlined />}>
                  预览
                </Button>
                <Button type="primary" icon={<DownloadOutlined />}>
                  下载
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});
