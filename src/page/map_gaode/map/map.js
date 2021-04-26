import { renderAreaAdcode, areaAdcode } from './areaAdcode'
class Map {
    constructor(props) {
        this.ref = props.ref;
        this.init();
    }


    init() {
        this.map = new AMap.Map(this.ref, {
            zoom: 4,
            center: [106, 33],
            viewMode: '3D',
            lang: 'zh_cn',
            defaultCursor: 'pointer',
            showIndoorMap: false,
            rotation: 0,
            isHotspot: false,
            touchZoomCenter: 1,
            pitch: 25,
            resizeEnable: true,
            bubble: true
        });

        this.mapUI();
        // this.addMarker()
    }

    // addmfn(){
    //     this.addMarkerfn(this.addMarker(116.39, 39.9))
    // }

    addMarker (a,b) {
        // 创建一个 Marker 实例：
        // console.log(a,b)
        this.map.clearMap();

        var marker = new AMap.Marker({
            position: new AMap.LngLat(a, b),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '北京0000000000'
        });

        // 将创建的点标记添加到已有的地图实例：
        this.map.add(marker);

        // 移除已创建的 marker
        // this.map.remove(marker);
    }

    mapUI() {
        AMapUI.load(['ui/geo/DistrictExplorer', 'lib/$'], async (districtExplorer) => {
            let MydistrictExplorer = new districtExplorer({
                eventSupport: true,
                map: this.map
            })

            this.districtExplorer = await MydistrictExplorer;

            let areaColor = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099"]

            // let k = 0;
            // for(let i in renderAreaAdcode){
            //     if(i !== 'all' && i !== 'eventListener'){
            //         this.districtExplorer.loadMultiAreaNodes(renderAreaAdcode[i],(err,areaNode) => {
            //             // console.log("renderAreaAdcode[i]",renderAreaAdcode[i])
            //             if(err){
            //                 console.log(err,'err000000')
            //             };
            //             areaNode.map(v => {
            //                 this.renderAreaNode(this.districtExplorer,v,areaColor[k])
            //             })
            //             k++
            //         })
            //     }
            // }

            this.districtExplorer.loadMultiAreaNodes(['100000', '440000'], (err, areaNode) => {
                if (err) {
                    console.log(err, 'err000000')
                };
                // console.log("areaNode",areaNode)
                this.renderAreaNode(areaNode)
            })


            // this.districtExplorer.loadMultiAreaNodes(renderAreaAdcode.eventListener, (err,areaNode) => {
            //     this.districtExplorer.setAreaNodesForLocating(areaNode)
            // })


            // this.districtExplorer.on('featureMouseover', (e, feature) => {
            //     // console.log("e",e);
            //     // console.log('feature',feature);
            //     let areaName = '';
            //     for (let i in areaAdcode){
            //         if(areaAdcode[i].filter(v => v.name == feature.properties.name).length > 0){
            //             areaName = i;
            //             break;
            //         }
            //     };

            //     if(areaName){
            //         this.openInfoWin(e.originalEvent, {
            //             name : areaName
            //         })
            //     }

            // })


            // this.districtExplorer.on('featureClick', (e, feature) => {
            //     console.log("feature",feature);
            //     for (let i in areaAdcode){
            //         if(areaAdcode[i].filter(v => v.name == feature.properties.name).length > 0){
            //             this.map.setCenter(feature.properties.center);
            //             this.map.setZoom(8)
            //             break;
            //         }
            //     };
            // })

            // this.districtExplorer.on('featureMouseout', (e, feature) => {
            //     this.closeInfoWin
            // })
            // console.log(this.map.getAllOverlays())


        })
    }


    renderAreaNode(areaNode) {
        console.log("areaNode000", areaNode);
        // console.log("areaNod11e11",areaNode[0].getSubFeatures())
        this.districtExplorer.renderSubFeatures(areaNode[0], (feature, i) => {
            // console.log("feature",feature);
            for (let i in renderAreaAdcode) {
                for (let j = 0; j < renderAreaAdcode[i].length; j++) {
                    if (feature.properties.adcode == renderAreaAdcode[i][j]) {
                        if (feature.properties.adcode !== 440000) {
                            return {
                                cursor: 'default',
                                bubble: true,
                                strokeColor: 'green', //线颜色
                                strokeOpacity: 1, //线透明度
                                strokeWeight: 1, //线宽
                                fillColor: 'red', //填充色
                                fillOpacity: 0.35, //填充透明度
                            };
                        }
                    }
                }
            }
        })
        this.districtExplorer.renderSubFeatures(areaNode[1], (feature, i) => {
            // console.log("feature",feature);
            for (let j = 0; j < renderAreaAdcode['dawan'].length; j++) {
                if (feature.properties.adcode == renderAreaAdcode['dawan'][j]) {
                    return {
                        cursor: 'default',
                        bubble: true,
                        strokeColor: 'green', //线颜色
                        strokeOpacity: 1, //线透明度
                        strokeWeight: 1, //线宽
                        fillColor: 'red', //填充色
                        fillOpacity: 0.35, //填充透明度
                    };
                }
            }

        })
        // this.districtExplorer.renderParentFeature(areaNode, {
        //     cursor : 'default',
        //     bubble : true,
        //     strokeColor : 'green',
        //     strokeOpacity : 1,
        //     fillColor : 'red',
        //     fillOpacity : 0
        // })
    }



    openInfoWin(e, content) {
        if (!this.infoWin) {
            this.infoWin = new AMap.InfoWindow({
                isCustom: true,
                offset: new AMap.Pixel(100, 100)
            })
        }

        let x = e.pixel.x, y = e.pixel.y;
        let lngLat = this.map.containerToLngLat(new AMap.Pixel(x, y));

        let infoDom = document.createElement('div');
        infoDom.className = 'info';
        let tableDom_ui = document.createElement('div');
        infoDom.appendChild(tableDom_ui);

        let str = `<span>${content.name}</span>`
        tableDom_ui.innerHTML = str;

        this.infoWin.setContent(tableDom_ui);
        this.infoWin.open(this.map, lngLat)
    }

    closeInfoWin() {
        if (this.infoWin) {
            this.infoWin.close()
        }
    }
}



export default Map;