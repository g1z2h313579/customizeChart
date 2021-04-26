import React, { useState, useEffect,useContext } from 'react';
import { Modal, Comment, Avatar, Form, Button, List, Input } from 'antd';
import Editor from './components/editor/index.component';
import CommentList from './components/commentList/index.component'
import moment from 'moment';
import {H_Context} from '../../../config/history_context'

const Index = () => {
    let [visible, setVisible] = useState(false);
    let [commentValue, setCommentValue] = useState('');
    let [detailComments, setDetailComments] = useState([])
const showModal = () => {
    setCommentValue('')
    setVisible(true)
}
const handleCancel = () => {
    setVisible(false)
}
const handleOk = () => {
    if (!commentValue) return;
    setDetailComments(
        [
            {
                author: Math.random().toFixed(5),
                avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                content: <p>{commentValue}</p>,
                dateTime: moment().fromNow(),
            },
            ...detailComments
        ]
    )
    setVisible(false)
}

const handleChange = e => {
    setCommentValue(e.target.value);
};

const cur_Context = useContext(H_Context);
console.log(cur_Context,'cur_Context')

return (
    <>
        {detailComments.length > 0 && <CommentList comments={detailComments || []} />}
        {/* <CommentList comments={detailComments || []} /> */}
        <Button type="primary" onClick={showModal}>click To Leave Message</Button>
        <Modal
            title="Basic Modal"
            visible={visible}
            onCancel={handleCancel}
            onOk={handleOk}
        >
            <Comment
                avatar={
                    <Avatar
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        alt="Han Solo"
                    />
                }
                content={
                    <Editor
                        onChange={handleChange}
                        value={commentValue}
                    />
                }
            />
        </Modal>
    </>
)
}

export default Index;