import React from 'react';
import boxGeo from './threejs'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.container = React.createRef();
        this.c = new boxGeo();
    }


    componentDidMount() {
       this.container.current.appendChild(this.c.canvas)
    }

    render() {
        console.log('让我看看render几次')
        return (
            <div ref={this.container}>

            </div>
        )
    }

}


export default Index