import React from 'react';
import CurrentPage from '../config/router';
import { Layout, Breadcrumb } from 'antd';
import SiderBar from './components/SiderBar/SiderBar';
import Head from './components/head/head';
import Foot from './components/foot/foot';
import state from '../index.state';
import './index.scss'
const { Content } = Layout;
import { withRouter } from "react-router";
import {H_Context} from '../config/history_context'
import { NoSiderBarList } from '../config/showSiderbar'

const Entry = withRouter((props) => {
    // console.log(process.env.NODE_ENV )
    // console.log(props,'props')

    function showSiderbar() {
        let t = NoSiderBarList.filter(v => v === window.location.pathname)
        if(t.length > 0){
            return false
        }else {
            return true
        }
    }

    return (
        <Layout style={{ height: '100%' }}>
            {
                showSiderbar() &&
                <SiderBar />
            }
            <Layout style={ {overflowY: 'hidden'} }>
                {
                    showSiderbar() &&
                    <Head />
                }
                <Content className = 'contentwrap'>
                    <div className="bodyContainer">
                        <H_Context.Provider value = {'this is a context'}>
                            <CurrentPage />
                        </H_Context.Provider>
                    </div>
                </Content>
                <Foot />
            </Layout>
        </Layout>

    )
})


export default Entry
