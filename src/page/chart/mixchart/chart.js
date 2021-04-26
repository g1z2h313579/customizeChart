import G2 from '@antv/g2';
import { DataSet,View } from '@antv/data-set';

class Chart {
    constructor(props) {
        this.container = props.container;
        this.init();
    }

    init() {
        const data = [
            { name: 'London', 月份: 'Feb.', 月均降雨量: 28.8 },
            { name: 'London', 月份: 'Mar.', 月均降雨量: 39.3 },
            { name: 'London', 月份: 'Apr.', 月均降雨量: 81.4 },
            { name: 'London', 月份: 'May', 月均降雨量: 47 },
            { name: 'London', 月份: 'Jun.', 月均降雨量: 20.3 },
            { name: 'London', 月份: 'Jul.', 月均降雨量: 24 },
            { name: 'London', 月份: 'Aug.', 月均降雨量: 35.6 },
            { name: 'London', 月份: 'Jan.', 月均降雨量: 18.9 },
            { name: 'Berlin', 月份: 'Jan.', 月均降雨量: 12.4 },
            { name: 'Berlin', 月份: 'Feb.', 月均降雨量: 23.2 },
            { name: 'Berlin', 月份: 'Mar.', 月均降雨量: 34.5 },
            { name: 'Berlin', 月份: 'Apr.', 月均降雨量: 99.7 },
            { name: 'Berlin', 月份: 'May', 月均降雨量: 52.6 },
            { name: 'Berlin', 月份: 'Jun.', 月均降雨量: 35.5 },
            { name: 'Berlin', 月份: 'Jul.', 月均降雨量: 37.4 },
            { name: 'Berlin', 月份: 'Aug.', 月均降雨量: 42.4 }
          ];
          const data2 = [
            { amountchanged : 65, changeRate : 23, contract : 29.15, projectName : Math.random().toFixed(5) },
            { amountchanged : 60, changeRate : 33, contract : 23.15, projectName : Math.random().toFixed(5) },
            { amountchanged : 64, changeRate : 34, contract : 23.15, projectName : Math.random().toFixed(5) },
            { amountchanged : 55, changeRate : 35.6, contract : 30.15, projectName : Math.random().toFixed(5) },
            { amountchanged : 50, changeRate : 37.4, contract : 31.15, projectName : Math.random().toFixed(5) },
            { amountchanged : 45, changeRate : 40.1, contract : 32, projectName : Math.random().toFixed(5) },
            { amountchanged : 40, changeRate : 43.2, contract : 33, projectName : Math.random().toFixed(5) },
            { amountchanged : 35, changeRate : 53.4, contract : 43, projectName : Math.random().toFixed(5) },
            { amountchanged : 30, changeRate : 56.4, contract : 44, projectName : Math.random().toFixed(5) },
            { amountchanged : 25, changeRate : 65.4, contract : 54, projectName : Math.random().toFixed(5) },
            { amountchanged : 20, changeRate : 65.5, contract : 65, projectName : Math.random().toFixed(5) },
            { amountchanged : 15, changeRate : 65.6, contract : 43, projectName : Math.random().toFixed(5) },
            { amountchanged : 10, changeRate : 76.5, contract : 76, projectName : Math.random().toFixed(5) },
            { amountchanged : 5, changeRate : 87.6, contract : 66, projectName : Math.random().toFixed(5) },
          ];
          
          const chart = new G2.Chart({
            container: this.container,
            forceFit: true,
            height: 500
          });
          let dv = new View()
                    .source(data2)
                    .transform({
                        type : 'rename',
                        map : {
                            amountchanged : '柱图1',
                            contract : '柱图2',
                            changeRate : '线图1',
                        }
                    })
                    .transform({
                        type : 'fold',
                        fields : ['柱图1','柱图2'],
                        key : 'interValueKey',
                        value : 'interValue'
                    })
                    .transform({
                        type : 'fold',
                        fields : ['线图1'],
                        key : 'lineValueKey',
                        value : 'lineValue'
                    })

                    // console.log(dv,'dv')
                    // console.log(JSON.stringify(dv.rows))
          chart.source(dv);

          

          chart.interval().position('projectName*interValue').color('interValueKey')
            .adjust([{
              type: 'dodge',
              marginRatio: 0
            }])
            .tooltip('projectName*interValueKey*interValue*lineValueKey*lineValue',(name,interKey,interValue,lineValueKey,lineValue) => {
                return {
                    name : interKey,
                    color : '#0091ff',
                    value : interValue,
                    value2: lineValue,
                    name2 : lineValueKey
                }
            })
            
            let geom = chart.line().position('projectName*lineValue').color('lineValueKey',['orange'])
            .tooltip(false)

            

            let pointgeom = chart.point().position('projectName*lineValue').color('lineValueKey').size(10)
            

            // chart.on('tooltip:show', ev => {
            //     console.log(ev,'asd')
            // });
            // chart.on('interval:mouseenter', ev => {
            //     console.log(ev,'asd')
            // });
            chart.tooltip({
                useHtml : true,
                htmlContent : (title,items) => {
                  return `<div class="g2-tooltip" style = "position : absolute;background:white">
                  <div class="g2-tooltip-title" style="margin-bottom: 4px;"></div>
                  <ul class="g2-tooltip-list">
                  <li>
                  <span style="background-color:${items[0].color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>${items[0].name} : <span class="g2-tooltip-value">${items[0].value}</span>
                  </li>
                  <li>
                  <span style="background-color:${items[1].color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>${items[1].name} : <span class="g2-tooltip-value">${items[1].value}</span>
                  </li>
                  <li>
                  <span style="background-color:${items[0].color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>${items[0].name2} : <span class="g2-tooltip-value">${items[0].value2}</span>
                  </li>
                  </ul>
                  </div>`
                }
            })
            // chart.tooltip({
            //   useHtml : true,
            //   containerTpl: '<div class="g2-tooltip">'
            //   + '<div class="g2-tooltip-title" style="margin-bottom: 4px;"></div>'
            //   + '<ul class="g2-tooltip-list"></ul>'
            //   + '</div>',
            //   itemTpl: '<li data-index={index}>'
            //   + '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>'
            //   + '{name}<span class="g2-tooltip-value">{value}</span>'
            //   + '</li>'
            // })
            chart.tooltip({
              crosshairs : {
                type : 'rect',
                style : {
                //   fill : 'transparent',
                //   width : 200
                },
                
              },
              hideMarkers:false
            })


          // chart.on('axis-label:click', ev => {
          //   console.log(ev,'ev')
          // });
          chart.on('click',e => {
            console.log(e,'ev')
          })
          chart.render();

    }
}

export default Chart;