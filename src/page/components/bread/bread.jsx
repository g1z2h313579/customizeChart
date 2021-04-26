import React from 'react';
import { Breadcrumb } from 'antd';


const Bread = (props) => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>{props.location.substring(1,props.location.length)}</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default Bread;