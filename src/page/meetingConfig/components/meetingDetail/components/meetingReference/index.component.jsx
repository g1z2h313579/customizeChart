import React, { useState } from "react";
import { message, Input, Button, Row, Col, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
export default (props) => {
  const [fileList, setFileList] = useState("")
  function onChange(info) {
      console.log(info);
      setFileList(() => info.fileList);
  }
  return (
    <div className="meetingReference">
      <Row>
        <Col span={12}>
          <div className="TextArea_content">
            <Input.TextArea rows={5} placeholder="请输入会议参数"/>
          </div>
        </Col>
        <Col span={24} className="upload">
          <Col span={12}>
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
              defaultFileList={[...fileList]}
              onChange={onChange}
              accept={["image/png", "image/jpeg", "image/jpg"]}
            >
              <Button icon={<UploadOutlined />}>上传图片</Button>
            </Upload>
            <div className="img">
                {
                    fileList && fileList.length && fileList.map((item, index) => <img key={index} src={item.thumbUrl} alt="" srcset="" />)
                }
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
};
