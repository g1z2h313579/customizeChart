import G2 from '@antv/g2';
class demoChart {
    constructor(props) {
        this.container = props.container;
        this.data = props.data
        this.init();
    }


    init(){
        // console.log('zxczxcz',G2)
        this.chart = new G2.Chart({
            container : this.container,
            
        })
        console.log(this.data)
        this.chart.source(this.data);


        this.chart.axis('value',{
            position : 'right'
        })

        this.chart.axis('value1',false);

        this.chart.coord().transpose().scale(1, -1);

        this.chart.interval()
        .position(['label','value'])
        .color("type",['l(180) 0:#3979FF 1:#6187FF', "l(180) 0:#25C6FF 1:#32C7FC", 'transparent'])
        .adjust([{
            type : 'dodge',
            marginRatio : 0
        }])
        .tooltip('type*value', (type,value)=> {
            return {
                name : type,
                value
            }
        })
        // this.chart.interval()
        // .position('label*value1')
        // // .color('transparent')
        // .color('red')
        // .adjust([{
        //     type : 'dodge',
        //     marginRatio : 0
        // }])
        

        this.chart.point()
        .position('label*value')
        // .color('#FF813B')
        .color('type',['red','blue','green'])
        .shape('line')
        .size(20)
        .style({
            lineWidth : 2
        })
        .tooltip('value1',(value1) => {
            return {
                name : 'ppp',
                value : value1
            }
        })


        this.chart.render()
    }
}


export default demoChart