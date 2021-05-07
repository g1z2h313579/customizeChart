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
        name: '管理驾驶舱',
        icon: <PieChartOutlined />,
        children: null,
        id: '1',
        children: [
            {
                name: '首页',
                icon: <PieChartOutlined />,
                children: null,
                id: '1-1',
                path: '/404'
            }
        ]

    },
    {
        name: '经营分析会',
        icon: <TeamOutlined />,
        id: '2',
        children: [
            {
                name: '公司经营分析会',
                icon: <TeamOutlined />,
                children: null,
                id: '2-1',
                path: '/showPageWindow',
            },
            {
                name: '集团经营分析会',
                icon: <TeamOutlined />,
                children: null,
                id: '2-2',
                path: '/404',
            }
        ]
    },
    {
        name: '经营分析看板',
        icon: <DesktopOutlined />,
        children: null,
        id: '3',
        children: [
            {
                name: '首页',
                icon: <DesktopOutlined />,
                children: null,
                id: '3-1',
                path: '/404',
            }
        ]

    },
    {
        name: '工作台',
        icon: <FileOutlined />,
        children: null,
        id: '4',
        children: [
            {
                name: '指标卡片库',
                icon: <FileOutlined />,
                children: null,
                id: '4-1',
                path: '/customizeChart',
            },
            {
                name: '会议配置',
                icon: <FileOutlined />,
                children: null,
                id: '4-2',
                path: '/meetingList'
            },
            // {
            //     name: '会议列表',
            //     icon: <FileOutlined />,
            //     children: null,
            //     id: '4-3',
            //     path: '/meetingList'
            // },
        ]

    },
    // {
    //     name: 'showPage',
    //     icon: <PieChartOutlined />,
    //     children: null,
    //     id: '/showPage',
    //     path: '/showPage'
    // },
    // {
    //     name: '会议配置',
    //     icon: <FileOutlined />,
    //     children: null,
    //     id: '/meetingConfig',
    //     path: '/meetingConfig'
    // },

]
