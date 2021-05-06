import React from 'react';
import { Layout,Menu } from 'antd';
import './index.scss'

const { Header } = Layout;

const Head = (props) => {
    return (
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <span className = 'logo'>KYR</span>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">首页</Menu.Item>
                <Menu.Item key="2">宏观</Menu.Item>
                <Menu.Item key="3">城市</Menu.Item>
                <Menu.Item key="4">房企</Menu.Item>
                <Menu.Item key="5">项目</Menu.Item>
                <Menu.Item key="6">资金</Menu.Item>
                <Menu.Item key="7">R分析</Menu.Item>
            </Menu>
            
        </Header>
    )
}
export default Head;
