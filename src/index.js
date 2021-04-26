import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { H_Context } from './config/history_context'
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css'

const history = createBrowserHistory()

ReactDOM.render(
    <BrowserRouter>
        <H_Context.Provider value='zxc'>
            <ConfigProvider locale = {zhCN}>
                <App history={history} />
            </ConfigProvider>
        </H_Context.Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
);
