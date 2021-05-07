import React from "react";
import { message, Input, Button, Row, Col, Upload } from "antd";
import {
  FolderViewOutlined,
  DownloadOutlined,
  UploadOutlined,
} from "@ant-design/icons";
export default (props) => {
  const uploadProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className="meetingStuff">
      <Row>
        <Col span={12}>
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
                <a href="">XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.JPG</a>
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
        </Col>
        <Col span={24}>
          <Col span={12}>
            <div className="upload">
              <Input placeholder="选着要上传的文件"/>
              <Upload {...uploadProps}>
                <Button icon={<UploadOutlined />}>点击上传</Button>
              </Upload>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
};
