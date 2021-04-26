import React from 'react'
import { Table } from 'antd';
import { columns, homedata } from '../../../index.data'
import { Modal, Button } from 'antd';

import './index.scss'

export default class DetailInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='tableClass'>
                <Table
                    columns={columns}
                    dataSource={homedata}
                    pagination = {{
                        defaultPageSize : 4
                    }}
                />
                <Modal
                    visible={this.props.imgModal}
                    footer={null}
                    onCancel={this.props.imgModalCancel}
                    width={'50%'}
                >
                    {
                        this.props.imgSrc !== '' &&
                        <img style={{ width: '100%' }} src={require(`../../img/${this.props.imgSrc}`).default} />
                    }
                </Modal>
            </div>
        )
    }
}