import React from 'react';
import {Layout} from 'antd';
import './index.scss'
import Bread from "../bread/bread";
const { Header, Content, Footer, Sider } = Layout;
import { withRouter } from "react-router";
const Head = withRouter((props) => {
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <Bread location = {props.location.pathname} />
        </Header>
    )
})
export default Head;
