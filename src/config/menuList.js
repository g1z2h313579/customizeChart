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
        name: '工作台',
        icon: <DesktopOutlined />,
        children: null,
        id: '111',
        children: [
            {
                name: '指标卡片库',
                icon: <DesktopOutlined />,
                children: null,
                id: '/customizeChart',
            }
        ]

    },
    // {
    //     name: 'showPage',
    //     icon: <PieChartOutlined />,
    //     children: null,
    //     id: '/showPage',
    //     path: '/showPage'
    // },
    {
        name: '会议配置',
        icon: <FileOutlined />,
        children: null,
        id: '/meetingConfig',
        path: '/meetingConfig'
    },

]
