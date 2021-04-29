import React from 'react'
import { observable, action, toJS } from 'mobx'
import _ from 'lodash'
import AddPage from './components/addPage/index.component'




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
                },
                {
                    title: "",
                    icon: '',
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
        console.log("key", key)
    }
    @action toPageConfig = (key) => {

    }
    @action pageNameChange = (e, key) => {
        let keyItem = this.findKeyItem(this.treeData, key)
        keyItem.pagename = e.target.value
    }

    findKeyItem = (data, key) => {
        for(let i = 0; i < data.length; i++){
            if(data[i].key === key){
                return data[i]
            }else if(data[i].children && data[i].children.length > 0){
                this.findKeyItem(data[i].children, key)
            }
        }
    }

    

    @action createKey = (data, level, key) => {
        let tmpData = _.cloneDeep(data)
        if (level === 0) {
            tmpData.map((v, i) => {
                v.key = i + 1 + ''
                v.title = <AddPage
                    key={v.key}
                    addChildPage={this.addChildPage}
                    toPageConfig={this.toPageConfig}
                    pageName={v.pageName}
                    pageNameChange={this.pageNameChange}
                />
                v.pageName = ''
                if (v.children && v.children.length > 0) {
                    this.createKey(v.children, 1, v.key)
                }
            })
        } else {
            let tmpLevel = level
            tmpData.map((v, i) => {
                if (v.children && v.children.length > 0) {
                    v.key = key + '-' + (i + 1)
                    v.title = <AddPage
                        key={v.key}
                        addChildPage={this.addChildPage}
                        toPageConfig={this.toPageConfig}
                        pageName={v.pageName}
                        pageNameChange={this.pageNameChange}
                    />
                    v.pageName = ''
                    tmpLevel++
                    this.createKey(v.children, tmpLevel, v.key)
                } else {
                    v.key = key + '-' + (i + 1)
                }
            })
        }
        return tmpData
    }
}