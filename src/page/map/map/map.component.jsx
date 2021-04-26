import React from 'react';
import Map from './map';
import './map.scss'

class mapComponent extends React.Component{
    constructor (props){
        super(props);
        this.conRef = React.createRef()
    }

    componentDidMount() {
        let config = {
            container : this.conRef.current,
            center : [105.404, 34.915],
            zoom : true
        }
        let map = new Map(config)
    }

    render() {
        return (
            <div ref = {this.conRef} className = 'mapContainer'></div>
        )
    }
}
    

export default mapComponent;