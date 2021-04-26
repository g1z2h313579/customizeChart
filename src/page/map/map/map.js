import {mapStyle} from './mapjson'
class Map {
    constructor(config){
        this.container = config.container;
        this.center = config.center;
        this.zoom = config.zoom;
        this.controlOption = {                                  //地图控件配置
            type : BMAP_NAVIGATION_CONTROL_SMALL || 1,               //默认控件模式
            anchor : BMAP_ANCHOR_TOP_RIGHT                      //控件位置
        }
        this.init();
    }

    init(){
        this.center = new BMap.Point(...this.center); 
        this.map = new BMap.Map(this.container,{
            enableBizAuthLogo: false
        });
        this.map.centerAndZoom(this.center,15);
        this.map.enableScrollWheelZoom(this.zoom); 
        this.map.addControl(new BMap.NavigationControl(this.controlOption))
        this.map.setMapStyleV2({styleJson:mapStyle});
        this.marker()
    }

    marker() {
        var point = new BMap.Point(116.404, 39.915); 
        var marker = new BMap.Marker(point);        // 创建标注    
        this.map.addOverlay(marker);  
        var circle = new BMap.Circle(point,500,{
            strokeColor : 'red',
            fillColor : 'blue'
        })
        // console.log(circle.getCenter())
        this.map.addOverlay(circle)
        this.map.centerAndZoom(point,15);
    }
}

export default Map