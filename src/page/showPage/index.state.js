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
    @action changePageContent = (key, record) => {
        this.currentPageInfo = JSON.parse(JSON.stringify(record.node.pageData))
        // console.log("rest",rest)
    }
    @observable date = customizeState.modalYearMonth
    @action initPageData = (data) => {
        this.pageData = data
    }
    @action changePageData = async (date, dateString) => {
        console.log("pageData", toJS(this.pageData))
        let w = dateString.split('-')
        this.date = { year: w[0], month: w[1], yearMonth: dateString, momentDate: date }
        let selectTargetList = []
        let chartDatatype = []
        let targetNameList = []

        

        this.pageData.map(v => {
            v.pageData.data.map(item => {
                chartDatatype.push(item.chartDatatype)
                selectTargetList.push(...item.selectTargetList)
                targetNameList.push(...item.targetNameList)
            })
        })
        let tempData = []
        for(let i = 0; i < selectTargetList.length; i++) {
            tempData.push(await axios.get(`/data/2021/${targetToUrl[selectTargetList[i]]}`))  
        }
        console.log("tempData",tempData)
        this.treatChartData(tempData,chartDatatype,targetNameList)
        
    }

    @action treatChartData = (data, chartDatatype,targetNameList) => {
        console.log("chartDatatype",chartDatatype)
        let dataStep = chartDatatype.map(v => {
            let t = 0
            if(v === 'single'){
                t = 1
            }else {
                t = 2
            }
            return t
        })
 
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
  
                    let a = doubleDataMerge(t,q)
                    tmpData.push(a)
                   
                }else {
                    let b = singleData(data[dataStep[i] - 1].data.data[this.date.yearMonth], targetNameList[dataStep[i] - 1])
                    // console.log("bbbb1111",b)
                    tmpData.push(b)
                    
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
                    
                    let a = doubleDataMerge(t,q)
                    tmpData.push(a)
                  
                }else {
                    let b = singleData(data[dataIndex].data.data[this.date.yearMonth], targetNameList[dataIndex])
                    // console.log("bbbb2222",b)
                    tmpData.push(b)
                    
                }
            }
            
        }
        // console.log("tmpData",tmpData)
        this.pageData.map(v => {
            v.pageData.data.map((item, index) => {
                item.data = tmpData[index]
            })
        })

        // console.log("this.pageData11111",toJS(this.pageData))
        // console.log("this.currentPageInfo",toJS(this.currentPageInfo))
        // console.log("this.findCurrentPageInfo(this.pageData)",this.findCurrentPageInfo(this.pageData))
        let t = this.findCurrentPageInfo(toJS(this.pageData))
        console.log("tttt",t)
        this.currentPageInfo = t
        // this.currentPageInfo = this.pageData.filter(v => v.pageName === this.currentPageInfo.pageName)[0].pageData
    }

    @action findCurrentPageInfo = (data) => {
        console.log("data",data)
        let t = null
        for(let i = 0; i < data.length; i++){
            t = this.findCPIFn(data[i])
            if(t) return t
        }
        
    }


    @action findCPIFn = (item) => {
        if(item.pageName === this.currentPageInfo.pageName){
            return item.pageData
        }else {
            if(item.children && item.children.length > 0){
                return this.findCurrentPageInfo(item.children)
            }else {
                return null
            }
        }
    }
}