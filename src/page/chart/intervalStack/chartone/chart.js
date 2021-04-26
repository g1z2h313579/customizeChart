import G2 from '@antv/g2';

class Chart {
    constructor(props) {
        this.container = props.container;
        this.init();
    }

    init() {
        const data = [
            { item: '事例一', count: 40, percent: 0.4 },
            { item: '事例二', count: 21, percent: 0.21 },
            { item: '事例三', count: 17, percent: 0.17 },
            { item: '事例四', count: 13, percent: 0.13 },
            { item: '事例五', count: 9, percent: 0.09 }
        ];
        const chart = new G2.Chart({
            container: this.container,
            forceFit: true,
            height: 500,
            animate: false
        });
        chart.source(data, {
            percent: {
                formatter: val => {
                    val = (val * 100) + '%';
                    return val;
                }
            }
        });
        chart.coord('theta', {
            radius: 0.75,
            innerRadius: 0.6
        });

        chart.tooltip({
            showTitle: false,
            enterable : true,
            itemTpl: `<li onclick = "window.asd(d)"><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>`
        });

        chart.on('click', ev => {
            console.log(ev)
        });
        // 辅助文本
        chart.guide().html({
            position: ['50%', '50%'],
            html: '<div style="color:#8c8c8c;font-size: 14px;text-align: center;width: 10em;">主机<br><span style="color:#8c8c8c;font-size:20px">200</span>台</div>',
            alignX: 'middle',
            alignY: 'middle'
        });
        const interval = chart.intervalStack()
            .position('percent')
            .color('item')
            .label('percent', {
                formatter: (val, item) => {
                    return item.point.item + ': ' + val;
                }
            })
            .tooltip('item*percent', (item, percent) => {
                percent = percent * 100 + '%';
                return {
                    name: item,
                    value: percent
                };
            })
            .style({
                lineWidth: 1,
                stroke: '#fff'
            });

        chart.legend({
            itemWidth : 50,
            clickable : true,
            onClick : (ev) => {
                console.log(ev);
                let currentItem = data.filter(val => val.item == ev.item.value);
                ev.checked = true;
                interval.setSelected(currentItem[0] || null)
            },
            onHover : ev => {
                // console.log(ev,'asdasd')
                // interval
                // .color('red');
                // ev.geom
                // // .intervalStack()
                // .setSelected(data[1])
            }
        })
        chart.render();
        interval.setSelected(data[0]);

    }
}

export default Chart;