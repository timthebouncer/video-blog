import React, {useState} from "react";
import InstagramOutlined from "@ant-design/icons/lib/icons/InstagramOutlined";
import FacebookOutlined from "@ant-design/icons/lib/icons/FacebookOutlined";
import YoutubeOutlined from "@ant-design/icons/lib/icons/YoutubeOutlined";
import MenuFoldOutlined from "@ant-design/icons/lib/icons/MenuFoldOutlined";
import {videoList} from "../data";
import style from './HomePage.css'

const HomePage=()=>{
    const [isHideText, setIsHideText] = useState(true)
    return (
    <div>
        <header className="header-wrapper">
            <div>
                <MenuFoldOutlined />
            </div>
            <div>
                <h1>BBall_Vision</h1>
                <div className="sub-title">
                    收錄精華以及您不知道的NBA大小事
                </div>
                <h4 className='sub-title'>籃球傳教士 | NBA消息 | 球員報導</h4>
            </div>

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
                                    width="99%"
                                    height="500"
                                    src={item.videoUrl}l>
                                </iframe>
                                <div className={isHideText && item.intro.length > 75 ? 'intro-text hide-text':'intro-text'}>
                                    {item.intro}

                                </div>
                                {
                                    item.intro.length > 75 && <div className='seeMoreBtn-wrapper'>
                                        <button
                                            className='seeMoreBtn'
                                            onClick={()=>setIsHideText(!isHideText)}>{isHideText ? '查看更多':'查看更少'}</button>
                                    </div>
                                }


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
                    <div>
                        <InstagramOutlined />
                        <FacebookOutlined />
                        <YoutubeOutlined />
                    </div>
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