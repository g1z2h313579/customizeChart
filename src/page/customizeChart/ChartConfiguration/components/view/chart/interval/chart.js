import G2 from '@antv/g2';
import { dataType } from '../../../../../index/index.data'
class Chart {
    constructor(props) {
        this.container = props.container;
        this.data = props.data
        this.chartDatatype = props.chartDatatype
        this.height = props.height
        this.width = props.width || 316
        this.init();
    }


    init(){

        this.chart = new G2.Chart({
            container : this.container,
            width : this.width,
            // forceFit: true,
            padding : 60,
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
        this.chart.axis("name",{
            label:{
                textStyle : { fill : "#fff"}
            }
        })
        this.chart.axis("value",{
            label:{
                textStyle : { fill : "#fff"}
            }
        })
        
       
        this.chart.render()
    }


    changeData(data, chartDatatype, height, width = 316) {
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
        this.chart.changeWidth(width)
        this.chart.changeData(data)
    }
}


export default Chart