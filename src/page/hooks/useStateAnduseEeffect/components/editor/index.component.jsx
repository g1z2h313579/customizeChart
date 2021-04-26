import React from 'react';
import { Form, Button,Input } from 'antd';
const { TextArea } = Input;
const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
    </>
  );
  export default Editor;