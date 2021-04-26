import {renderAreaAdcode,areaAdcode} from './areaAdcode'
class Map {
    constructor(props){
        this.ref = props.ref;
        this.cityInfo = props.cityInfo;
        this.areaColor = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099"]

        this.init();
    }


    init(){
        this.map = new AMap.Map(this.ref,{
            zoom : 4,
            center : [106,33],
            viewMode : '3D',
            lang : 'zh_cn',
            defaultCursor : 'pointer',
            showIndoorMap : false,
            rotation : 0,
            isHotspot : false,
            touchZoomCenter : 1,
            pitch : 25,
            resizeEnable : true,
            bubble : true
        });
    }

    renderDistrict() {
        let overLayGroupArray = []
        for(let i in this.cityInfo){
            let overlayGroup = new AMap.OverlayGroup([]);
            this.cityInfo[i].map(v => {
                let polygon = new AMap.Polygon({
                    map : this.map,
                    path: v.boundary,
                    fillColor : 'green',
                    draggable : true,
                    zIndex : 999
                })

                // let geoJson = new AMap.GeoJSON({
                //     geoJSON: JSON.parse(v.boundary),
                //     getPolygon : 
                // })
                overlayGroup.addOverlay(polygon)
            })
            overLayGroupArray.push(overlayGroup)
        }
        console.log("overLayGroupArray",overLayGroupArray);
        overLayGroupArray.map((v,i) => {
            console.log("this.areaColor[i]",this.areaColor[i]);
            v.setOptions({
                // fillColor : this.areaColor[i],
                // fillColor : 'red',
                fillOpacity: 0.5,
                strokeWeight: 0,
                strokeColor: this.areaColor[i],
                // strokeOpacity : 0,

            })
            this.map.add(v)
        })


    }

    changeData(data){
        this.cityInfo = data;
        console.log("this.cityInfo",this.cityInfo);
        if(this.cityInfo && this.cityInfo['西区'].length > 0){
            this.renderDistrict()
        }
    }

}



export default Map;