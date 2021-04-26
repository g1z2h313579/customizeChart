import React, { Profiler, useState, useEffect } from 'react';
import Map from './map/map.component';
import './index.scss';
import state from '../../index.state';
import {toJS} from 'mobx'

import { areaAdcode } from './map/areaAdcode'

import { observer } from 'mobx-react'


const Index = observer(() => {

    useEffect( () => {
        AMap.plugin(['AMap.DistrictSearch'],  () => {
            var districtSearch = new AMap.DistrictSearch({
                // 关键字对应的行政区级别，country表示国家
                level: 'city',
                extensions: 'all',
                //  显示下级行政区级数，1表示返回下一级行政区
                subdistrict: 0
            })

            

            
            for (let i in areaAdcode) {
                state.cityInfo[i] = []
                areaAdcode[i].map(v => {
                    // 搜索所有省/直辖市信息
                    districtSearch.search(v.name,(status, result) => {
                        // 查询成功时，result即为对应的行政区信息
                        // console.log("22222222");
                        // console.log("status", status);
                        console.log("result", result);
                        if(status == 'complete' && result.districtList.length == 1){
                              state.cityInfo[i].push({name : result.districtList[0].name, boundary : result.districtList[0].boundaries})
                        }
                    })
                })
                // console.log("cityInfo",cityInfo)
            }

        })
    }, [])

    return (
        <>

            <div className='mapwrap'>
                <Map cityInfo = {toJS(state.cityInfo)}  />

               
            </div>

        </>
    )
})
export default Index;