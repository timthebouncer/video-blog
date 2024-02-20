import React from "react";
import InstagramOutlined from "@ant-design/icons/lib/icons/InstagramOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import YoutubeOutlined from "@ant-design/icons/lib/icons/YoutubeOutlined";
import MenuFoldOutlined from "@ant-design/icons/lib/icons/MenuFoldOutlined";
import {videoList} from "../data";
import style from './HomePage.css'

const HomePage=()=>{
    return (
    <div>
        <header className="header-wrapper">
            <h1>BBall_Vision</h1>
            <div className="sub-title">
                收錄精華以及您不知道的NBA大小事
            </div>
            <h4 className='sub-title'>籃球傳教士 | NBA消息 | 球員報導</h4>
            {/*<div>*/}
            {/*    <MenuFoldOutlined />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <InstagramOutlined />*/}
            {/*    <FacebookOutlined />*/}
            {/*    <YoutubeOutlined />*/}
            {/*</div>*/}
            {/*<nav>*/}
            {/*    <a href=""></a>*/}
            {/*    <a href=""></a>*/}
            {/*    <a href=""></a>*/}
            {/*</nav>*/}
        </header>
        <section>
            <div>
                {
                    videoList.map(item=>{
                        return (
                            <div className='video-wrapper'>
                                <h3>{item.title}</h3>
                                <iframe
                                    id="inlineFrameExample"
                                    title="Inline Frame Example"
                                    width="100%"
                                    height="200"
                                    src={item.videoUrl}l>
                                </iframe>
                                <div className='intro-text'>
                                    {item.intro}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        <footer>
            <div>
                <h3 className='about'>關於我們</h3>
                <div className="service-wrapper">
                    <a href="">廣告合作</a>
                    <a href="">服務條款及隱私權政策</a>
                    <a href="">聯絡我們</a>
                </div>
            </div>
            <div className='copyright'>
                @_bball_vision 籃球視界 版權所有
            </div>
        </footer>
    </div>
    )
}


export default HomePage