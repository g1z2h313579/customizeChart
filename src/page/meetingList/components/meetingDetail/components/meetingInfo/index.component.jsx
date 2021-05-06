import React from 'react'
import meettingInfoAddPng from '../../../../../../assets/meeting-info-add.png'
import meettingInfoDetailPng from '../../../../../../assets/meeting-info-detail.png'

export default (props) => {
    return (
        <div className = "meetingInfo">
            {
                props.isSettingMeeting ?
                    <img src={meettingInfoAddPng} alt=""/>
                :
                    <img src={meettingInfoDetailPng} alt=""/>
            }

        </div>
    )
}
