import React from 'react';
import './Section.scss'
const Section3Presenter = () => {
    return (
        <section class="section" id="3">
        <div id="sec4">
            <p class="sec_top">관련 언론보도</p>
            <div class="sec_news">

                <a class="news_box" href="http://www.yonhapnews.co.kr/bulletin/2018/08/20/0200000000AKR20180820047100848.HTML"
                    target="_blank">
                    <div class="news_logo">
                        <img class="img" src="https://glohandstest.s3.amazonaws.com/media/pressImage/jamiejang%40gmail.com/news_logo_01_yh.png"/>

                    </div>
                    <div class="news_header" >
                        &quot;계약서 작성·서명 원스톱&quot;…글로핸즈 &#39;전자계약 서비스&#39; 확대<br />연합뉴스|2018-08
                    </div>

                </a>

                <a class="news_box" href="http://news.donga.com/List/3/08/20180820/91583458/1" target="_blank">
                    <div class="news_logo">
                        <img class="img" src="https://glohandstest.s3.amazonaws.com/media/pressImage/jamiejang%40gmail.com/news_logo_02_donga.png"/>
    
                    </div>
                    <div class="news_header">
                        글로핸즈, 전자계약 서비스 플랫폼 무료 제공 확대<br />동아일보|2018-08
                    </div>

                </a>

                <a class="news_box" href="http://www.seoul.co.kr/news/newsView.php?id=20180820500022" target="_blank">
                    <div class="news_logo">
                        <img class="img" src="https://glohandstest.s3.amazonaws.com/media/pressImage/jamiejang%40gmail.com/news_logo_03_seoul.png"/>
                    
                    </div>
                    <div class="news_header">
                        글로벌 계약서 플랫폼 ‘글로핸즈’… “작성부터 서명까지 한 번에”<br />서울신문|2018-08
                    </div>

                </a>

            </div>
        </div>
    </section>
    );
};

export default Section3Presenter;