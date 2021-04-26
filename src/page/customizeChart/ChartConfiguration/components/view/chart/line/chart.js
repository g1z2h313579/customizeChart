import G2 from '@antv/g2';
import { dataType } from '../../../../../index/index.data'
class Chart {
    constructor(props) {
        this.container = props.container;
        this.data = props.data
        this.chartDatatype = props.chartDatatype
        this.height = props.height
        this.init();
    }


    init(){
        // console.log('zxczxcz',G2)
        this.chart = new G2.Chart({
            container : this.container,
            forceFit: true,
            height: this.height
        })
        this.chart.source(this.data);

        this.geom = this.chart.line()
                    .position('name*value')
                    .color('type')
        if(this.chartDatatype === dataType.multipleType){
            this.geom.color('type')
        }
        this.chart.render()
    }


    changeData(data, chartDatatype,height) {
        if(chartDatatype === dataType.multipleType){
            this.geom.color('type')
                    
        }else {
            this.geom.color(false)
                    
        }
        this.chart.changeHeight(height)
        this.chart.changeData(data)
    }
}


export default Chart