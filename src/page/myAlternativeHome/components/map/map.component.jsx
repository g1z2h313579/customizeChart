import React from 'react';
import Map from './map';
// import Map from './map copy';
import {observer} from 'mobx-react';

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
        let config = {
            ref : this.conRef.current,
            
        }
        this.map = new Map(config);
    }


    componentWillReceiveProps(nextprops){

    }
    

    render() {
        return (
            <>
                <div ref = {this.conRef} className = 'mapContainer'></div>
            </>
            
        )
    }
}
    

export default mapComponent;