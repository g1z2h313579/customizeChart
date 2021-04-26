import React from 'react';
import Son from './son';
import {asd} from './index.state';
import './index.scss'


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 1,
            b: {
                bb: 100
            },
            clientWidth : 0
        }
        this.ff = React.createRef();
        console.log(asd,'asdasdasd')
        // let {asd} = qwe;
        // console.log('zxcxzzczc',asd())
    }

    change() {
        this.setState({
            a: 2,
            b: {
                bb: 200
            }
        }, () => {
            console.log(this.state);
        })
    }

    change2() {
        this.state.a = 20;
        this.state.b.bb = 400
    }

    componentDidMount() {
        // console.log(this.ff.current.clientWidth);
        // console.dir(this.ff.current);
        console.log("asdasd")
        window.addEventListener('resize', (e) => {
            // console.log(this.ff.current.clientWidth);
            // console.log(e,'eeee')
            // console.log(e.clientWidth);
            this.setState({
                clientWidth : this.ff.current.clientWidth
            })
        })
        this.setState({
            clientWidth : this.ff.current.clientWidth
        })
    }

    render() {
        console.log(this.state.clientWidth)
        return (
            <div style = {{display : 'flex',padding : '10px',margin : '20px'}}>
                <div style = {{width : '100px',height : '100px',background : 'red'}}>asd</div>
                <div ref={this.ff} style={{ width: '100%' , flex : '1',background : 'blue'}}>
                    <Son a={this.state.a} b={this.state.b} />
                    <button onClick={() => { this.change() }}>setState</button>
                    <button onClick={() => { this.change2() }}>NosetState</button>
                </div>


                <div className = 'qweqwe'>
                    <div className = 'square'></div>
                    <div className = 's-1'></div>
                    <div className = 's-2'></div>
                    <div className = 's-3'></div>
                    <div className = 's-4'></div>
                </div>
            </div>

        )
    }
}


export default Index