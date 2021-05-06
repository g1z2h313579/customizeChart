import React from 'react'
import './index.scss'
export default () => {
    return (
        <div className = "toShowPage" onClick = {() => {window.open('/showPage')}}>点击前往展示页面</div>
    )
}