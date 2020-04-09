import React from 'react';
import {Card, Row, Col, Modal} from 'antd';


import './ui.less';


class Gallery extends React.Component {

    state = {
        visible: false
    };

    openGallery = (imgSrc) => {
        this.setState({
            visible: true,
            currentImg: '/gallery/' + imgSrc
        })
    };

    render() {

        const imgs = [];

        let index = 1;
        for (let i = 0; i < 6; i++) {
            imgs[i] = [];
            for (let j = 0; j < 4; j++) {
                imgs[i][j] = index + '.png';
                index++;
            }
        }

        const imgList = imgs.map((list) => list.map((item) => {
            return (
                <Card
                    style={{marginBottom: 10}}
                    cover={<img src={'/gallery/' + item}/>}
                    onClick={() => this.openGallery(item)}
                >
                    <Card.Meta
                        title="React Admin"
                        description="I Love Imooc"
                    />
                </Card>

            )
        }));

        return (
            <div className="card-wrap">
                <Row gutter={10}>
                    {
                        imgList.map((list) => {
                            return (
                                <Col md={4}>
                                    {list}
                                </Col>
                            )
                        })
                    }
                </Row>

                <Modal
                    width={350}
                    height={500}
                    visible={this.state.visible}
                    title="图片画廊"
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })
                    }}
                    footer={null}
                >
                    {<img src={this.state.currentImg} alt="" style={{width: '100%'}}/>}
                </Modal>
            </div>
        )
    }
}

export default Gallery;