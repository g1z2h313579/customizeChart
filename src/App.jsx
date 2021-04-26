import React, { Profiler} from 'react';
import {H_Context} from './config/history_context'
import Index from './page/index'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    check(
        id, // 发生提交的 Profiler 树的 “id”
        phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
        actualDuration, // 本次更新 committed 花费的渲染时间
        baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
        startTime, // 本次更新中 React 开始渲染的时间
        commitTime, // 本次更新中 React committed 的时间
        interactions // 属于本次更新的 interactions 的集合
    ) {
        // console.log(id, 'id');
        // console.log(phase, 'phase');
        // console.log(actualDuration, 'actualDuration');
        // console.log(baseDuration, 'baseDuration');
        // console.log(startTime, 'startTime');
        // console.log(commitTime, 'commitTime');
        // console.log(interactions, 'interactions');
    }
    static contextType = H_Context;
    render() {
        // console.log(this.context)
        return (
            <Profiler id='index' onRender={this.check.bind(this)}>
                <Index {...this.props}/>
            </Profiler>
        )
    }
}
export default App