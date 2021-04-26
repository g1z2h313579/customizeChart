import React from 'react';

class Index extends React.Component{    
    constructor (props) {
        super(props);
        this.state = {
            k : 0,
            l : {
                ll : 0
            }
        }
    }

    componentWillReceiveProps(nextprops) {
        console.log(nextprops,'nextprops')
        // this.setState({
        //     k : nextprops.a,
        //     l : {
        //         ll : nextprops.b.bb
        //     }
        // })
    }

    render(){
        return (
            <>
                <h2>
                    a:
                    {this.props.a}
                </h2>
                <h2>
                    b:
                    {this.props.b.bb}
                </h2>
            </>
        )
    }
}

export default Index