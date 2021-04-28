import { observable, action, toJS } from 'mobx'
import { dataType, chartType, chartBaseConfig, targetToUrl,chartSelctList,chartSelectList_singleData,chartSelectList_multipleData } from './index.data'
import { doubleDataMerge, singleData } from './chartDataTools'
import pageState from './../../showPage/index.state'
import moment from 'moment'

export default new class State {
    @observable chartConfigList = []
    emptyData = {
        dataType: null,
        chartType: null,
        chartBaseConfig: null,
        data: []
    }
    //编辑页面开关
    @observable isChangePage = false
    //开关回调
    @action onChange = (checked) => {
        if (checked) {
            this.chartConfigList.push(this.emptyData)
        } else {
            this.chartConfigList.pop()
        }
        this.isChangePage = checked;
    }

    //删除数据回调
    @action deleteChartItem = (item, index, e) => {
        e.stopPropagation()
        this.chartConfigList.splice(index, 1)
    }
    //modal显示回调
    @observable modalVisible = false
    @observable currentItemIndex = 0        //当前卡片索引
    @observable currentChartData = null     //当前卡片数据
    @observable isChangeChartType = false
    //编辑卡片chart
    @action changeChartType = (item, index) => {
        if (!this.modalVisible && this.isChangePage) {
            this.modalVisible = true
            this.currentItemIndex = index
            this.currentChartData = item
        }
        // console.log("item",item)
        this.chartDatatype = item.chartDatatype
        // this.modalYearMonth.momentDate = moment(item.date)
        this.modalYearMonth = { year: moment(item.date).format('YYYY'), month: moment(item.date).format('MM'), yearMonth: item.date, momentDate: moment(item.date) }
        this.queryTargetList(item.date)
        this.selectTargetList = item.selectTargetList
        this.dimensionCurrentSelect = item.dimensionCurrentSelect
        this.cardNameValue = item.cardNameValue
        this.chartTypeValue = item.chartTypeValue
        this.modalChartData = item.data
        this.isChangeChartType = true
    }
    @action handleOk = () => {
        this.modalVisible = false
        this.saveModalData()
        this.initModalData()
    }

    @action saveModalData = () => {
        let t = {
            chartDatatype: this.chartDatatype,
            chartTypeValue: this.chartTypeValue,
            chartBaseConfig: {},
            date: this.modalYearMonth.yearMonth,
            data: this.modalChartData,
            selectTargetList: this.selectTargetList,
            dimensionCurrentSelect: this.dimensionCurrentSelect,
            cardNameValue: this.cardNameValue,
            targetNameList : this.targetNameList
        }
        // console.log("ttttt",t)
        if (this.isChangeChartType) {
            this.chartConfigList[this.currentItemIndex] = t
        } else {
            this.chartConfigList.splice(this.chartConfigList.length - 1, 0, t)
        }
        this.targetList = JSON.parse(JSON.stringify(this.targetList_origin))
    }

    @action initModalData = () => {
        this.chartDatatype = ''
        this.chartTypeValue = ''
        // this.modalYearMonth = { year: '', month: '', yearMonth: '', momentDate: null }
        this.modalChartData = []
        // this.targetList_origin = []
        // this.targetList = []
        this.currentDimension = ''
        this.targetNameList = []
        this.modalChartDataList = []
        this.selectTargetList = ['']
        this.dimensionCurrentSelect = ''
        this.cardNameValue = ''
        this.isChangeChartType = false
    }
    @action handleCancel = () => {
        this.modalVisible = false
        this.initModalData()
    }
    //添加chart
    @action addChart = () => {
        this.modalVisible = true
    }

    //modal中的时间参数
    @observable modalYearMonth = { year: '', month: '', yearMonth: '',  momentDate: moment() }
    @action modalDateChange = (date, dateString) => {
        // console.log('date, dateString',date, dateString)
        let t = dateString.split('-')
        this.modalYearMonth = { year: t[0], month: t[1], yearMonth: dateString, momentDate: date }
        pageState.date = this.modalYearMonth
        this.queryTargetList(dateString)
    }
    //请求指标
    @action queryTargetList = (date) => {
        let t = date.split('-')
        fetch(`/data/${t[0]}/targetList.json`)
            .then(res => res.json())
            .then(r => {
                this.treatTargetList(r)
            })

    }
    //存储指标原始数据
    @observable targetList_origin = []
    @action treatTargetList = (data) => {
        this.targetList = data.map(v => {
            return {
                value: v.value,
                label: v.name,
                dimension: v.dimension
            }
        })
        this.targetList_origin = JSON.parse(JSON.stringify(this.targetList))
    }
    //当前展示的指标列表
    @observable targetList = []
    @observable currentDimension = ''   //当前维度
    @observable targetNameList = []     //指标名，用以在图形中表示所展示的指标名称
    //选择指标回调
    @action targetListChange = (value, index) => {
        this.selectTargetList[index] = value
        let t = this.targetList.filter(v => v.value === value)
        this.currentDimension = t[0].dimension
        this.targetNameList.push(t[0].label)
        this.dimensionCurrentSelect = this.currentDimension
        if(this.selectTargetList.length === 1){
            this.chartTypeList = chartSelectList_singleData
        }else {
            this.chartTypeList = chartSelectList_multipleData
        }
        fetch(`/data/${this.modalYearMonth.year}/${targetToUrl[value]}`)
            .then(r => r.json())
            .then(res => {
                this.treatTargetDataToChart(res)
            })
    }
    //由于一个指标代表一组数据，所以多个指标会有多组数据。存放指标组数据
    @observable modalChartDataList = []
    @observable modalChartData = []         //当前图形所需数据
    @observable chartDatatype = null        //图形数据形状——多组数据还是单组数据
    //处理指标数据到图形数据——为了节约时间，这里只处理了单指标和双指标，多指标未写
    @action treatTargetDataToChart = (data) => {
        let dataDate = Object.keys(data.data).filter(v => v === this.modalYearMonth.yearMonth)
        let tmp = []
        if(dataDate.length > 0){
            tmp = data.data[dataDate[0]]
        }
        if (this.selectTargetList.length === 1) {
            this.modalChartDataList = []
            this.modalChartDataList.push(tmp)
        } else {
            this.modalChartDataList.push(tmp)
        }
        // console.log("this.modalChartDataList",toJS(this.modalChartDataList))
        if (this.modalChartDataList.length === 1) {
            let t = singleData(this.modalChartDataList[0], toJS(this.targetNameList))
            this.modalChartData = t.map(v => {
                if (!isNaN(v.name)) {
                    v.name = v.name + '月'
                }
                return v
            })
            this.chartDatatype = dataType.singleType

        } else if (this.modalChartDataList.length === 2) {
            this.chartDatatype = dataType.multipleType
            let t = doubleDataMerge(toJS(this.modalChartDataList), toJS(this.targetNameList))
            this.modalChartData = t.map(v => {
                if (!isNaN(v.name)) {
                    v.name.includes('月') ? null : v.name = v.name + '月'
                }
                return v
            })
        }
    }
    //指标select列表
    @observable selectTargetList = ['']
    @action addSelect = () => {
        this.selectTargetList.push('')
        this.targetList = this.targetList.filter(v => v.dimension === this.currentDimension)
    }
    //删除指标
    @action decreaseSelect = (index) => {
        if (this.selectTargetList.length > 1) {
            this.selectTargetList.splice(index, 1)
            this.modalChartDataList.splice(index, 1)
            if (this.modalChartDataList.length === 1) {
                this.chartDatatype = dataType.singleType
                this.modalChartData = this.modalChartDataList[0]
            } else {
                this.chartDatatype = dataType.multipleType
                let t = doubleDataMerge(toJS(this.modalChartDataList), toJS(this.targetNameList))
                this.modalChartData = t.map(v => {
                    v.name = v.name + '月'
                    return v
                })
            }
        }
        if (this.selectTargetList.length === 1) {
            this.targetList = JSON.parse(JSON.stringify(this.targetList_origin))
        }
    }
    //原本打算维度可切换，然后发现指标自带维度属性——详情见./README.md
    @action dimensionChange = (value) => {
        this.dimensionCurrentSelect = value
    }

    @observable dimensionList = [
        { value: '月份', label: '月份' },
        { value: '年份', label: '年份' },
        { value: '项目', label: '项目' },
    ]
    @observable dimensionCurrentSelect = ''

    //卡片名字回调
    @action cardNameOnChange = (e) => {
        // console.log('e',e)
        e.persist()
        this.cardNameValue = e.target.value
        // console.log(this.cardNameValue)
    }
    //卡片名
    @observable cardNameValue = ''

    //选择图形形式回调
    @action chartTypeChange = (value) => {
        // console.log('value',value)
        this.chartTypeValue = value.target.value

    }
    //图形形式
    @observable chartTypeValue = ''

    @observable chartTypeList = chartSelctList


    //-------------------页面逻辑---------------------
    @observable isEditPage = false
    @action editPage = (bl) => {
        this.isEditPage = bl
        this.onChange(false)
        this.pageSelectList = this.chartConfigList.map(v => {
            v.label = v.cardNameValue
            v.value = v.cardNameValue
            return v
        })

    }

    pageMode = [
        {
            label: '两等分',
            value: 'double'
        },
        {
            label: '三等分',
            value: 'tri'
        }
    ]
    @observable currentPageMode = ''
    @action choosePageMode = (pageMode) => {
        this.currentPageMode = pageMode
    }

    @action backToCardPage = () => {
        this.isEditPage = false
    }

    @observable pageSelectList = []
    @action pageSelectOnChnage = (value, index) => {
        let t = index.split('-')
        let modeType = t[0]
        let pageSelect = t[1]
        this.pageData[modeType].selectList[pageSelect] = value
        this.pageData[modeType].isCheckChart[pageSelect] = true
        this.pageData[modeType].data[pageSelect] = this.pageSelectList.filter(v => v.value === value)[0]
    }

    @observable pageData = {
        double: {
            selectList: [],
            isCheckChart: [false, false],
            data: []
        },
        tri: {
            selectList: [],
            isCheckChart: [false, false],
            data: []
        }
    }


    @action editAgain = (type, index) => {
        this.pageData[type].isCheckChart[index] = false
    }

    @observable pageNameValue = ''
    @action pageNameOnChange = (e) => {
        e.persist()
        this.pageNameValue = e.target.value
    }

    @action confirmPage = (props) => {

        console.log("this.pageData[this.currentPageMode]",toJS(this.pageData[this.currentPageMode]))

        pageState.pageData.push({
            type: this.currentPageMode,
            pageName: this.pageNameValue,
            data:   JSON.parse(JSON.stringify(this.pageData[this.currentPageMode].data))
        })

        props.history.push('/showPage')
    }
    @action cancelPage = () => {
        this.pageNameValue = ''
        this.currentPageMode = ''
        this.pageData = {
            double: {
                selectList: [],
                isCheckChart: [false, false],
                data: []
            },
            tri: {
                selectList: [],
                isCheckChart: [false, false],
                data: []
            }
        }
    }
}


