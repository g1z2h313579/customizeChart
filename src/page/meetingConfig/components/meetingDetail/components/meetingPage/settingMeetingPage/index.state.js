import React from 'react'
import { observable, action, toJS } from 'mobx'
import _ from 'lodash'
import AddPage from './components/addPage/index.component'
import parentState from '../../../../../index.state'
import showPageState from '../../../../../../showPage/index.state'
import { message } from 'antd'


export default new class {
    @observable treeData = [];
    @observable initTreeData = [
        {
            title: ""
            ,
            icon: '',
            children: [
                {
                    title: "",
                    icon: '',
                    children: []
                },
                {
                    title: "",
                    icon: '',
                    children: []
                },
            ],
        },
    ]

    @action addParentNode = () => {
        let t = _.cloneDeep(this.treeData)
        t.push({
            title: "",
            icon: '',
            children: []
        })
        this.treeData = this.createKey(t, 0)
    }

    @action addChildPage = (key) => {
        // console.log("key", key)
        let keyItem = this.findKeyItem(this.treeData, key)
        keyItem.children.push({
            title: "",
            icon: '',
            children: []
        })
        this.treeData = this.createKey(this.treeData, 0)
        console.log("this.treeData",toJS(this.treeData))
    }
    @observable currentPageContentKey = null
    @action toPageConfig = (key) => {
        this.currentPageContentKey = key
        parentState.isToPageConfig = true
    }
    @action pageNameChange = (e, key) => {
        let keyItem = this.findKeyItem(this.treeData, key)
        keyItem.pageName = e.target.value
        this.treeData = this.createKey(this.treeData, 0)
    }



    findKeyItem = (data, key) => {
        let t = null
        for(let i = 0; i < data.length; i++){
            t = this.recursionData(data[i], key)
            if(t) return t
        }
    }

    recursionData = (data,key) => {
        if(data.key === key){
            return data
        }else {
            if(data.children && data.children.length > 0){
                return this.findKeyItem(data.children, key)
            }else {
                return null
            }
        }
    }

    changeTreeToShowPage = (data) => {
        data.map(v => {
            this.recursionToShowPage(v)
        })
    }

    recursionToShowPage = (data) => {
        data.title = data.pageName
        if(data.children && data.children.length > 0){
            return this.changeTreeToShowPage(data.children)
        }else {
            return null
        }   
    }


    createKeyFn = (tmpData, level, key) => {
        if (level === 0) {
            tmpData.map((v, i) => {
                v.key = i + 1 + ''
                v.title = <AddPage
                    currentKey={v.key}
                    addChildPage={this.addChildPage}
                    toPageConfig={this.toPageConfig}
                    pageName={v.pageName}
                    pageNameChange={this.pageNameChange}
                />
                v.pageName = v.pageName ? v.pageName : ''
                v.pageData = v.pageData ? v.pageData : null
                if (v.children && v.children.length > 0) {
                    this.createKeyFn(v.children, 1, v.key)
                }
            })
        } else {
            let tmpLevel = level
            tmpData.map((v, i) => {
                if (v.children && v.children.length > 0) {
                    v.key = key + '-' + (i + 1)
                    v.title = <AddPage
                        currentKey={v.key}
                        addChildPage={this.addChildPage}
                        toPageConfig={this.toPageConfig}
                        pageName={v.pageName}
                        pageNameChange={this.pageNameChange}
                    />
                    v.pageName = v.pageName ? v.pageName : ''
                    v.pageData = v.pageData ? v.pageData : null
                    tmpLevel++
                    this.createKeyFn(v.children, tmpLevel, v.key)
                } else {
                    v.key = key + '-' + (i + 1)
                    v.title = <AddPage
                        currentKey={v.key}
                        addChildPage={this.addChildPage}
                        toPageConfig={this.toPageConfig}
                        pageName={v.pageName}
                        pageNameChange={this.pageNameChange}
                    />
                    v.pageName = v.pageName ? v.pageName : ''
                    v.pageData = v.pageData ? v.pageData : null
                }
            })
            // console.log("tmpData",tmpData)
        }
    }

    @action createKey = (data, level, key) => {
        let tmpData = _.cloneDeep(data)
        this.createKeyFn(tmpData, level, key)
        // console.log("tmpData1111",tmpData)
        return tmpData

    }


    @action seePage = (history) => {
        // history.push('/showPage')
        window.open('/showPage')
    }
    @action save = () => {
        // console.log("treeData", toJS(this.treeData))
        let t = _.cloneDeep(this.treeData)
        this.changeTreeToShowPage(t)
        localStorage.setItem('treeData', JSON.stringify(t))
        showPageState.pageData = t

        message.success('保存成功')
    }
}