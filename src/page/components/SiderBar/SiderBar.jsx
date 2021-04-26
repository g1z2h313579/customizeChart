import React, { Component, useState } from 'react';
import { Layout, Menu } from 'antd';
import { menuList } from '../../../config/menuList';
import { observer } from 'mobx-react';
import state from '../../../index.state';
import { Link } from 'react-router-dom'

const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderBar = observer(() => {
    let [collapsed, setcollapsed] = useState(false);
    function renderMenu(item) {
        if (item.children === null) {
            return (
                <Menu.Item key={item.id} icon={item.icon}>
                    <Link to = {item.id}>
                        {item.name}
                    </Link>
                </Menu.Item>
            )
        } else {
            return (
                <SubMenu key={item.id} icon={item.icon} title={item.name}>
                    {item.children.map(val => renderMenu(val))}
                </SubMenu>
            )
        }
    }

    function selectMenu({ item, key, keyPath, selectedKeys, domEvent }) {
        // console.log('select')
        // console.log('item',item);
        // console.log('key',key);
        // console.log('keyPath',keyPath);
        // console.log('domEvent',domEvent);
        // console.log('selectedKeys',selectedKeys)   
    }

    function clickMenu({ item, key, keyPath, domEvent }) {
        // console.log('click')
    }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(c) => { setcollapsed(collapsed = c) }}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={clickMenu} onSelect={selectMenu}>
                {menuList.map((val) => renderMenu(val))}
            </Menu>
        </Sider>
    )
})
export default SiderBar;