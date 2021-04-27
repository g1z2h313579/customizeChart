import React from 'react';
import { Breadcrumb } from 'antd';
import './index.scss'

const Bread = (props) => {
    return (
        <Breadcrumb className='bread-style'>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>{props.location.substring(1,props.location.length)}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default Bread;
