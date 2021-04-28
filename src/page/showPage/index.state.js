import { observable, action, toJS } from 'mobx'
import customizeState from '../customizeChart/index/index.state'
import { targetToUrl } from '../customizeChart/index/index.data'
import { doubleDataMerge, singleData } from '../customizeChart/index/chartDataTools'
import axios from 'axios'

export default new class {
    @observable pageData = []
    @observable currentPageInfo = {
        type: '',
        pageName: '',
        data: []
    }
    @action changePageContent = (data) => {
        this.currentPageInfo = { ...data }
    }
    @observable date = customizeState.modalYearMonth

    @action changePageData = async (date, dateString) => {
        console.log("pageData", toJS(this.pageData))
        let w = dateString.split('-')
        this.date = { year: w[0], month: w[1], yearMonth: dateString, momentDate: date }
        let selectTargetList = []
        let chartDatatype = []
        let targetNameList = []
        this.pageData.map(v => {
            v.data.map(item => {
                chartDatatype.push(item.chartDatatype)
                selectTargetList.push(...item.selectTargetList)
                targetNameList.push(...item.targetNameList)
            })
        })
        let tempData = []
        for(let i = 0; i < selectTargetList.length; i++) {
            tempData.push(await axios.get(`/data/2021/${targetToUrl[selectTargetList[i]]}`))  
        }

        this.treatChartData(tempData,chartDatatype,targetNameList)
        
    }

    @action treatChartData = (data, chartDatatype,targetNameList) => {
        // console.log("data",data)
        // console.log("chartDatatype",chartDatatype)
        // console.log("targetNameList",targetNameList)
        let dataStep = chartDatatype.map(v => {
            let t = 0
            if(v === 'single'){
                t = 1
            }else {
                t = 2
            }
            return t
        })
        // [{},{},{}]
        // [2,1]

        // [{},{},{},{},{},{}]
        // [1,2,2,1]
        // console.log("dataStep",dataStep)
        let tmpData = []
        for(let i = 0; i < dataStep.length; i++){
            if(i === 0){
                if(dataStep[i] === 2){
                    let t = [
                        data[dataStep[i] - 1].data.data[this.date.yearMonth],
                        data[dataStep[i] - 2].data.data[this.date.yearMonth]
                    ]
                    let q = [
                        targetNameList[dataStep[i] - 2],
                        targetNameList[dataStep[i] - 1],
                    ]
                    // console.log("ttttttt0000",t)
                    // console.log("qqqqqq0000",q)
                    let a = doubleDataMerge(t,q)
                    tmpData.push(a)
                    // console.log("aaaa0000",a)
                }else {
                    
                    // console.log("targetNameList[dataStep[i] - 1]",targetNameList[dataStep[i] - 1])
                    // console.log("data[dataStep[i] - 1].data.data[this.date.yearMonth]",data[dataStep[i] - 1].data.data[this.date.yearMonth])
                    let b = singleData(data[dataStep[i] - 1].data.data[this.date.yearMonth], targetNameList[dataStep[i] - 1])
                    tmpData.push(b)
                    // console.log("bbbbbb",b)
                }
            }else {
                let dataIndex = -1
                for(let j = 0; j <= i; j++){
                    dataIndex += dataStep[j]
                }
                // console.log("dataIndex",dataIndex)
                if(dataStep[i] === 2){
                    let t = [
                        data[dataIndex].data.data[this.date.yearMonth],
                        data[dataIndex - 1].data.data[this.date.yearMonth]
                    ]
                    let q = [
                        targetNameList[dataIndex - 1],
                        targetNameList[dataIndex],
                    ]
                    // console.log("ttttttt",t)
                    // console.log("qqqqqq",q)
                    let a = doubleDataMerge(t,q)
                    tmpData.push(a)
                    // console.log("aaaa",a)
                }else {
                    
                    // console.log("3333",targetNameList[dataStep[i] - 1])
                    // console.log("4444",data[dataStep[i] - 1].data.data[this.date.yearMonth])
                    let b = singleData(data[dataIndex].data.data[this.date.yearMonth], targetNameList[dataIndex])
                    tmpData.push(b)
                    // console.log("bbbbbb3333",b)
                }
            }
            
        }
        console.log("tmpData",tmpData)
        this.pageData.map(v => {
            v.data.map((item, index) => {
                item.data = tmpData[index]
            })
        })
        console.log("this.pageData11111",toJS(this.pageData))
        this.currentPageInfo = this.pageData.filter(v => v.pageName === this.currentPageInfo.pageName)[0]
    }
}