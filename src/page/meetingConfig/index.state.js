import { observable, action, toJS } from 'mobx'

export default new class{
    @observable meetingList = [
        {title : '公司2021年4月经分会', time : '2021年4月9日'},
        {title : '公司2021年4月经分会', time : '2021年4月9日'},
        {title : '公司2021年4月经分会', time : '2021年4月9日'},
        {title : '公司2021年4月经分会', time : '2021年4月9日'},
        {title : '公司2021年4月经分会', time : '2021年4月9日'},
        {title : '公司2021年4月经分会', time : '2021年4月9日'},
        {title : '公司2021年4月经分会', time : '2021年4月9日'}
    ]

    @observable isShowMeetingDetail = false
    @observable isSettingMeeting = false
    @action addMeeting = () => {
        this.isShowMeetingDetail = true
        this.isSettingMeeting = true
    }

    @action showMeetingDetail = () => {
        this.isShowMeetingDetail = true
        this.isSettingMeeting = false
    }

    @observable meetingDetailData = []

    @action toMeetingList = () => {
        this.isShowMeetingDetail = false
    }

    @observable isToPageConfig = false
    @observable tabActiveKey = null
    @action tabActiveKeyTonull = () => {
        this.tabActiveKey = null
    }
}
