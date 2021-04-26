import {observable, action, toJS} from 'mobx'

export default new class State{
    @action showImg = (img) => {
        this.imgModal = true
        this.imgSrc = img
    }

    @observable imgSrc = ''

    @action imgModalCancel = () => {
        this.imgModal = false
        this.imgSrc = ''
    }
    @observable imgModal = false


    @observable btnValue = 'table'

    @action handleBtnValue = (e) => {
         this.btnValue = e.target.value
    }
}