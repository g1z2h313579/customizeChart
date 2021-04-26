import React from 'react';
import state from './index.state';
import { observer } from 'mobx-react';
import { DatePicker } from "antd";
import moment from "moment";
import {toJS} from 'mobx'
import './index.scss'
const { RangePicker } = DatePicker;
@observer
class ClassComponent extends React.Component {

    state = {
        mode: ["month", "month"],
        value: []
    };

    componentWillMount() {
        // state.changeNum();
        // fetch('/api/users')
        // .then(res => res.json())
        // .then(res => {
        //     console.log(res)
        // })

        // setTimeout(() => {
        //    state.changeObject()
        // },5000)\
        console.log(moment().year(moment().year() -1).startOf('year'))
        
    }

    componentWillUnmount() {
        // state.clearNum()
    }


    handlePanelChange = (value, mode) => {
        console.log('zxc',value)
        this.setState({
            value,
            mode: [
                mode[0] === "date" ? "month" : mode[0],
                mode[1] === "date" ? "month" : mode[1]
            ]
        });
    };

    handleChange = (value) => {
        console.log('asd')
        this.setState({ value });
    };

    disabledDate(current) {
        // Can not select days before today and today
        console.log(moment().endOf("month").format('YYYYMM'),'----------')
        console.log(current.format('YYYYMM'),'11111----------')
        // return moment().endOf("month").format('YYYYMM')
        return false
    }

    render() {
        const { value, mode } = this.state;
        console.log(toJS(state.seeObject),'toJS(state.seeObject)')
        return (
            <>
                <h2>this is a Class Component1111</h2>
                <h3>change data with mobx :{state.num}</h3>
                <div contentEditable="true"></div>


                <div>{JSON.stringify(toJS(state.seeObject))}</div>

                <RangePicker
                    placeholder={["Start month", "End month"]}
                    format="YYYY-MM"
                    value={value}
                    mode={mode}
                    // onChange={this.handleChange}
                    onPanelChange={this.handlePanelChange}
                    // ranges={[moment('2020-01'),moment('2020-12')]}
                    // disabledDate = {this.disabledDate}
                />
            </>
        )
    }
}

export default ClassComponent