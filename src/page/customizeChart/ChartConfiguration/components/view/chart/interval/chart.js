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

        this.chart = new G2.Chart({
            container : this.container,
            width : 316,
            // forceFit: true,
            height: this.height
        })
        this.chart.source(this.data);

        this.geom = this.chart.interval()
                    .position('name*value')
                    .color('type')
        // console.log("this.chartDatatype",this.chartDatatype)
        if(this.chartDatatype === dataType.multipleType){
            this.geom.adjust([{
                        type: 'dodge',
                        marginRatio: 1 / 32,
                        dodgeBy : 'type'
                    }]);
        }
        
       
        this.chart.render()
    }


    changeData(data, chartDatatype, height) {
        if(chartDatatype === dataType.multipleType){
            this.geom.adjust([{
                        type: 'dodge',
                        marginRatio: 1 / 32,
                        dodgeBy : 'type'
                    }]);
        }else {
            this.geom.adjust(false);
        }
        this.chart.changeHeight(height)

        this.chart.changeData(data)
    }
}


export default Chart