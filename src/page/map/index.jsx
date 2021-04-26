import React, { Profiler, useState } from 'react';
import Map from './map/map.component';
import './index.scss';
import state from '../../index.state';
import {observer} from 'mobx-react'


// state.tiktok();
// state.tiktok2();
// state.tiktok3()
const Index = observer(() => {

    let s1 = Symbol.for('asd')
    console.log(s1);

    const object1 = {
        property1: 42
      };
      
      let obj2 = Object.seal(object1);
      console.log(obj2);
    //   object1.property1 = 33;
    //   object1.aaa = 123;
    //   console.log(obj2,object1);

    return (
        <>
            <div className='mapwrap'>
                <Map />
            </div>
            {/* <h2>
                {state.tik.a.b}
            </h2>
            <h2>
                {state.tik2.a.b}
            </h2> */}
        </>
    )
})
export default Index;