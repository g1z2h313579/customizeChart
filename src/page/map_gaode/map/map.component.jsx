import React from 'react';
import Map from './map';
// import Map from './map copy';
import {observer} from 'mobx-react';
import state from '../../../index.state';
import {toJS} from 'mobx'
import './map.scss'

let timeout;

@observer
class mapComponent extends React.Component{
    constructor (props){
        super(props);
        this.conRef = React.createRef();
        this.state = {
            flag : false
        }
    }

    componentDidMount() {
        // console.log("this.props",this.props.cityInfo);
        // console.log("this.props",this.props)
        let config = {
            ref : this.conRef.current,
            // addMarker : this.props.addMarker
        }
        this.map = new Map(config);
    }


    componentWillReceiveProps(nextprops){
        // if(timeout){
        //     clearTimeout(timeout)
        // }
        // timeout = setTimeout(() => {
        //     this.map.changeData(nextprops.cityInfo)
        // },200)
        
        // console.log("nextprops",nextprops)
    }
    addMarker(){
        this.setState({
            flag : !this.state.flag
        })
        // console.log("this.state.flag",this.state.flag)
        this.state.flag ? this.map.addMarker(116.39, 39.9) : this.map.addMarker(120.52, 30.4)
        
    }

    render() {
        return (
            <>
            <div ref = {this.conRef} className = 'mapContainer'></div>
            <button onClick = {this.addMarker.bind(this)}>addmarker</button>
            </>
            
        )
    }
}
    

export default mapComponent;