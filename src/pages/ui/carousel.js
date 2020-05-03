import React from 'react';
import {Card, Carousel} from 'antd';

import './ui.less';


class MyCarousel extends React.Component {

    render() {
        return (
            <div className="card-group-wrap">
                <Card title="文字轮播" className="card-wrap">
                    <Carousel autoplay effect="fade">
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </Card>

                {/*<Carousel>*/}
                    {/*<div>*/}
                        {/*<h3>*/}
                            {/*<img src="/carousel-img/carousel-1.jpg" alt=""/>*/}
                        {/*</h3>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                        {/*<h3>*/}
                            {/*<img src="/carousel-img/carousel-2.jpg" alt=""/>*/}
                        {/*</h3>*/}
                    {/*</div>*/}
                {/*</Carousel>*/}
            </div>
        )
    }
}

export default MyCarousel;