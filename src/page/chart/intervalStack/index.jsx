import React from 'react';
import Chart from './chartone/chart.component';
import Chart2 from './chart2/index.component'
import { Tabs } from 'antd';

const { TabPane } = Tabs;


const Index = () => {
    return (
        <div className = 'chartOne'>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Tab 1" key="1">
                    <Chart  />
                </TabPane>
                <TabPane tab="Tab 2" key="2">
                    <Chart2 />
                </TabPane>
                <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
                </TabPane>
            </Tabs>
            
        </div>
    )
}


export default Index