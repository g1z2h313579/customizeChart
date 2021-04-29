import React from 'react'
import { observable, action, toJS } from 'mobx'
import _ from 'lodash'
import AddPage from './components/addPage/index.component'
import parentState from '../../../../../index.state'



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
                    children : []
                },
                {
                    title: "",
                    icon: '',
                    children : []
                },
            ],
        },
    ]

    @action addParentNode = () => {
        this.treeData.push({
            title: <AddPage />,
            key: this.treeData.length + 1 + '',
            children: []
        })
    }

    @action addChildPage = (key) => {
        // console.log("key", key)
        let keyItem = this.findKeyItem(this.treeData, key)
        keyItem.children.push({
            title: "",
            icon: '',
            children : []
        })
        this.treeData = this.createKey(this.treeData, 0)
    }
    @action toPageConfig = (key, history) => {
        parentState.isToPageConfig = true
    }
    @action pageNameChange = (e, key) => {
        let keyItem = this.findKeyItem(this.treeData, key)
        // console.log("keyItem",keyItem)
        keyItem.pageName = e.target.value
        // this.changeKeyItem(this.treeData, key, keyItem)
        this.treeData = this.createKey(this.treeData, 0)
        // console.log("toJS(this.treeData)",toJS(this.treeData))
    }

    @action changeKeyItem = (data, key, item) => {
        for(let i = 0; i < data.length; i++){
            if(data[i].key === key){
                data[i] = item
            }
            if(data[i].children && data[i].children.length > 0){
                return this.findKeyItem(data[i].children, key)
            }
        }
    }

    findKeyItem = (data, key) => {
        for(let i = 0; i < data.length; i++){
            if(data[i].key === key){
                return data[i]
            }
            if(data[i].children && data[i].children.length > 0){
                return this.findKeyItem(data[i].children, key)
            }
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
}