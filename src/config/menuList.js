import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import React from 'react';
export const menuList = [
    {
        name : '指标卡片库',
        icon : <DesktopOutlined/>,
        children : null,
        id : '/customizeChart',
        path : '/customizeChart'
    },
    {
        name : 'showPage',
        icon : <PieChartOutlined/>,
        children : null,
        id : '/showPage',
        path : '/showPage'
    },
    {
        name : '会议配置',
        icon : <FileOutlined/>,
        children : null,
        id : '/meetingConfig',
        path : '/meetingConfig'
    },

]
