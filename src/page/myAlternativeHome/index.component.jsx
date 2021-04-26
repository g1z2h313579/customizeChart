import React from 'react'
import Map from './components/map/map.component'
import DetailInfo_table from './components/detailInfo/table/index.component'
import DetailInfo_chart from './components/detailInfo/chart/index.component'

import state from './index.state'
import { observer } from 'mobx-react'
import { Select, Radio } from 'antd';
import './index.scss'

@observer
export default class MyAlternativeHome extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='mapwrap'>
                <div className='map'>
                    <Map />
                    <div className = 'switchBtn'>
                        <Radio.Group value={state.btnValue} onChange={state.handleBtnValue}>
                            <Radio.Button value="table" >表</Radio.Button>
                            <Radio.Button value="chart" >图</Radio.Button>
                        </Radio.Group>
                    </div>
                </div>

                {
                    state.btnValue === 'table' &&
                    <div className='table'>
                        <DetailInfo_table imgModal={state.imgModal} imgModalCancel={state.imgModalCancel} imgSrc={state.imgSrc} />
                    </div>
                }

                {
                    state.btnValue === 'chart' &&
                    <div className='chart'>
                        <DetailInfo_chart />

                    </div>
                }


            </div>
        )
    }
}