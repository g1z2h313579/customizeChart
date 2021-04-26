import React,{Component} from 'react';
import chart from './chart'

class chartOne extends Component{
    constructor (props){
        super(props);
        this.container = React.createRef();
    }

    componentDidMount() {
        let config = {
            container : this.container.current,
        }
        new chart(config)
    }
    render() {
        return (
            <div ref = {this.container}></div>
        )
    }
}
export default chartOne;