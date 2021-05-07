

export const dataType = {
    singleType: 'single',          //单组数据
    multipleType: 'multiple'       //多组数据
}


export const chartType = {
    interval: 'interval',                                      //基础柱状图
    line: 'line',                                              //折线图
    groupInterval: 'interval',                                //分组柱状图
    doubleLine: 'line',                                       //双折线图
    lineInterval: 'lineInterval',                              //折线柱状图
    coordTransposeInterval: 'coordTransposeInterval',          //条形图
    intervalStack: 'intervalStack',                            //基础饼图
    lineIntervalStack: 'lineIntervalStack',                    //条形图
    lineArea: 'lineArea',                                      //线面图
    multipleLineArea: 'multipleLineArea'                       //堆叠线面图
}

export const chartSelctList = [
    // { value: 'interval', label: '柱状图' },
    { value: 'line', label: '折线图' },
    { value: 'groupInterval', label: '分组柱状图' },
    { value: 'doubleLine', label: '双折线图' },
]

export const chartSelectList_singleData = [
    // { value: 'interval', label: '柱状图' },
    { value: 'line', label: '折线图' },
]

export const chartSelectList_multipleData = [
    { value: 'groupInterval', label: '分组柱状图' },
    { value: 'doubleLine', label: '双折线图' },
]


export const chartBaseConfig = {
    [chartType.interval]: {
        color: ''
    },

    [chartType.coordTransposeInterval]: {
        color: ''
    },
    [chartType.intervalStack]: {
        color: ''
    },
    [chartType.lineIntervalStack]: {
        color: ''
    },
    [chartType.lineArea]: {
        color: ''
    },
    [chartType.multipleLineArea]: {
        color: ''
    },
}


export const targetToUrl = {
    '指标1': 'target1.json',
    '指标2': 'target2.json',
    '指标3': 'target3.json',
    '指标4': 'target4.json',
}
