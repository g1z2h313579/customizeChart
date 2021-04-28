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

const Entry = withRouter((props) => {
    // console.log(process.env.NODE_ENV )
    // console.log(props,'props')
    return (
        <Layout style={{ height: '100%' }}>
            <SiderBar />
            <Layout style={ {overflowY: 'hidden'} }>
                <Head />
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
