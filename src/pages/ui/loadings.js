import React from 'react';
import {Spin, Card, Alert} from 'antd';

import {LoadingOutlined, SyncOutlined} from '@ant-design/icons';

import './ui.less'

class Loadings extends React.Component {


    render() {

        const antIcon = <LoadingOutlined style={{fontSize: 24}} spin/>;

        return (
            <div>
                <Card title="spin用法" className="card-wrap">
                    <Spin size="small"/>
                    <br/>
                    <Spin />
                    <br/>
                    <Spin size="large"/>
                    <br/>
                    <Spin indicator={antIcon}/>
                    <br/>
                    <SyncOutlined style={{fontSize: 24}} spin/>
                </Card>

                <Card title="内容遮罩" className="card-wrap">
                    <Spin spinning={true}>
                        <Alert
                            message="React"
                            description="欢迎使用antd"
                            type="info"
                        />
                    </Spin>

                    <Spin indicator={antIcon} spinning={true} tip="加载中...">
                        <Alert
                            message="React"
                            description="欢迎使用antd"
                            type="info"
                        />
                    </Spin>
                </Card>

            </div>
        )
    }
}

export default Loadings;