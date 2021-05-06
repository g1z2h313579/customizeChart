import { observable, action, toJS } from 'mobx'

export default new class{
    // 会议状态：0->未开始，1->进行中，2->已结束
    @observable meetingList = [
        {title : '公司2021年4月经分会', time : '2021年4月9日 2:30PM', status: 0, },
        {title : '公司2021年3月经分会', time : '2021年3月29日 2:30PM', status: 1, },
        {title : '公司2021年2月经分会', time : '2021年2月19日 2:30PM', status: 2, },
        {title : '公司2021年1月经分会', time : '2021年1月14日 2:30PM', status: 2, },
        {title : '公司2020年12月经分会', time : '2020年12月10日 2:30PM', status: 2, },
        {title : '公司2020年11月经分会', time : '2020年11月10日 2:30PM', status: 2, },
        {title : '公司2020年10月经分会', time : '2020年10月20日 2:30PM', status: 2, }
    ]
    @observable meetingDetailData = []
}
