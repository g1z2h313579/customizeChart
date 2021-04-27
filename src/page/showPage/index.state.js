import { observable, action, toJS } from 'mobx'

export default new class {
    @observable pageData = []
    @observable currentPageInfo = {
        type : '',
        pageName : '',
        data : []
    }
    @action changePageContent = (data) => {
        console.log("data",data)
        console.log("pageData",toJS(this.pageData))
        this.currentPageInfo = {...data}
    }
}