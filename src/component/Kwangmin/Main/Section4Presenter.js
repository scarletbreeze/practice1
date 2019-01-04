import React from 'react';
import './Section.scss'



const Section4Presenter = () => {
    return (
        <section class="section" id="4">
            <div id="sec5">
                <p class="sec_top">
                    <a href="/glohands/notice/">공지사항</a>
                </p>
                <div class="sec_notice">
                    <ul class="notice_list">
                        <li class="each_notice">
                            <a href="/glohands/notice/5/">
                                <div class="notice_header">
                                    <div class="notice_title">
                                        공지사항 세번째 제목 입니다.
                                    </div>
                                    <div class="notice_time">
                                        2018-11-02
                                    </div>
                                
                                </div>
                                    
                                <div class="notice_content">
                                     <p>글로핸즈의 핸즈너는 "글로벌 노마드 친구"입니다.</p>
                                     <p>핸즈너는 도움의 손길을 고찰하는 철학자이며, 글로벌화를 위한 봉사자입니다.</p>
                                     <p>장소나 고정관념에 얽매이지 않고 자유로운 환경에서 더나은 세상을 위해 끊임없이 질문을 던지고</p>
                                     <p>그 질문을 서로간의 도움으로 해결해 갑니다.</p>
                                </div>
                            </a>
                        </li>
                        <li class="each_notice">
                            <a href="/glohands/notice/4/">
                                <div class="notice_header">
                                    <div class="notice_title">
                                        공지사항 두번째 제목 입니다.
                                    </div>
                                    <div class="notice_time">
                                        2018-11-02
                                    </div>
                                
                                </div>
                                <div class="notice_content">
                                     <p>글로핸즈의 핸즈너는 "글로벌 노마드 친구"입니다.</p>
                                     <p>핸즈너는 도움의 손길을 고찰하는 철학자이며, 글로벌화를 위한 봉사자입니다.</p>
                                     <p>장소나 고정관념에 얽매이지 않고 자유로운 환경에서 더나은 세상을 위해 끊임없이 질문을 던지고</p>
                                     <p>그 질문을 서로간의 도움으로 해결해 갑니다.</p>
                                </div>
                            </a>
                        </li>
                        <li class="each_notice">
                            <a href="/glohands/notice/3/">
                                <div class="notice_header">
                                    <div class="notice_title">
                                        공지사항 첫번째 제목 입니다.
                                    </div>
                                    <div class="notice_time">
                                        2018-11-02
                                    </div>
                                   
                                </div>
                                <div class="notice_content">
                                     <p>글로핸즈 공지사항 내용이 여기에 들어갑니다.</p>
                                     <p>상단에는 제목이 노출되며 하단에는 약 5줄 정도의 간략한 내용이 보여집니다.</p>
                                     <p>클릭하면 상세한 게시판 내용이 보여집니다. 상세내용에는 간략한 내용을 제외한 제목과 모든 컨텐츠가 노출됩니다.</p>
                                     <p>블로그 스타일의 게시판 형태입니다. 관리자는 제목 요약내용 상세내용을 입력할 수 있습니다.</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Section4Presenter;