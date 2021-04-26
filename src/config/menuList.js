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
        name : 'mapdemo',
        icon : <DesktopOutlined/>,
        children : null,
        id : '/map',
        path : '/home'
    },
    {
        name : 'map_gaode',
        icon : <DesktopOutlined/>,
        children : null,
        id : '/map_gaode',
        path : '/home'
    },
    {
        name : 'threeJS',
        icon : <PieChartOutlined/>,
        id : '2',
        children : [
            {
                name : 'line',
                // icon : <div>2-1's icon</div>,
                children : null,
                id : '/line',
                path : '/partone'
            },
            {
                name : 'boxGeometryAnimate',
                // icon : <div>2-1's icon</div>,
                children : null,
                id : '/boxGeometryAnimate',
                path : '/partone'
            },
            {
                name : 'boxGeometryMouseControl',
                // icon : <div>2-1's icon</div>,
                children : null,
                id : '/boxGeometryMouseControl',
                path : '/partone'
            },
            {
                name : 'ballGeometry',
                // icon : <div>2-1's icon</div>,
                children : null,
                id : '/ballGeometry',
                path : '/partone'
            },
            {
                name : 'pointLearn',
                // icon : <div>2-1's icon</div>,
                children : null,
                id : '/pointLearn',
                path : '/partone'
            },
            {
                name : 'modalObject',
                // icon : <div>2-1's icon</div>,
                children : null,
                id : '/modalObject',
                path : '/partone'
            },
            {
                name : 'light',
                // icon : <div>2-1's icon</div>,
                children : null,
                id : '/light',
                path : '/partone'
            },
            {
                name : 'curve',
                // icon : <div>2-1's icon</div>,
                children : null,
                id : '/curve',
                path : '/partone'
            },
            {
                name : 'curve2',
                // icon : <div>2-1's icon</div>,
                children : null,
                id : '/curve2',
                path : '/partone'
            },
        ],
    },
    {
        name : 'antv-g2',
        icon : <FileOutlined/>,
        id : '3',
        children : [
            {
                name : 'intervalStack',
                // icon : <span>3-1's icon</span>,
                id : 'intervalStack',
                children : null
            },
            {
                name : 'mixChart',
                // icon : <span>3-1's icon</span>,
                id : 'mixChart',
                children : null
            },
        ],
    },
    {
        name : 'react-hooks',
        icon : <TeamOutlined/>,
        id : 'react-hooks',
        children : [
            {
                name : 'useState&useEffect',
                children : null,
                id : '/useState&useEffect',
            },
            {
                name : 'classWithMobx',
                children : null,
                id : '/classWithMobx',
            },
            {
                name : 'hooksWithMobx',
                children : null,
                id : '/hooksWithMobx',
            },
            {
                name : 'useCallback&Memo',
                children : null,
                id : '/useCallback&Memo',
            },
        ],
    },
    {
        name : 'customizeChart',
        icon : <DesktopOutlined/>,
        children : null,
        id : '/customizeChart',
        path : '/customizeChart'
    },
    {
        name : '看房',
        icon : <DesktopOutlined/>,
        id : '看房',
        children : [
            {
                name : '当月房子信息',
                children : null,
                id : '/myAlternativeHome',
            },
            {
                name : '截至当月房价趋势图',
                children : null,
                id : '/monthHomePrice',
            },
        ],
    },
]