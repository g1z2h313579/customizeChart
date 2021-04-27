import { observable, action, toJS } from 'mobx'

export default new class {
    @observable pageData = []
    @observable currentPageInfo = {
        type : '',
        pageName : '',
        data : []
    }
    @action changePageContent = (data) => {
        this.currentPageInfo = {...data}
    }
}