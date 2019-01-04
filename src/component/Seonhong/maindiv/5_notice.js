import React, { Component } from 'react';
import './maindiv.scss';
import './notice.scss';

class Notice extends Component{
    render(){
        const pStyle = {
            marginBottom: '0px' ,
            fontStretch: 'normal' , 
            fontSize: '13px' ,
            lineHeight: 'normal' , 
            fontFamily: 'Apple SD Gothic NeoI' ,
            color: 'rgb(67, 60, 68)'
        };

        const spanStyle = {
            fontSize : '18px'
        };
        //css파일을 만들어서 classMyname으로 불러와봤지만 안됌. 
        //그래서 inline 방식으로 Style을 매겨봤지만 그래도 안됌. css는 먹는데 span의 띄어쓰기가 안됌.
        const Style ={
            fontStretch: 'normal',
            lineHeight: 'normal',
            fontFamily: 'Helvetica Neue',
            fontSize: '18px'
        }

        return(
            <section class="section" id="4">
                <div id="sec5">
                    <p class="sec_top">
                        <a href="/">공지사항</a>
                    </p>
                    <div class="sec_notice">
                        <ul class="notice_list">

                           <li class="each_notice">
                                <a href="/">
                                    <div class="notice_header">
                                        <div class="notice_title">
                                            공지사항 세번째 제목 입니다.
                                        </div>
                                        <div class="notice_time">
                                            2018-11-02
                                        </div>
                                    </div>
                                    <div class="notice_content">
                                        <p style={pStyle}>
                                            <span style={spanStyle}>글로핸즈의</span><span style={Style}></span>
                                            <span style={spanStyle}>핸즈너는</span>
                                            <span style={spanStyle} style={Style}>“</span>
                                            <span style={spanStyle}>글로벌</span><span style={Style}></span>
                                            <span style={spanStyle}>노마드</span><span style={Style}></span>
                                            <span style={spanStyle}>친구</span><span style={Style}>”</span>
                                            <span style={spanStyle}>입니다</span><span style={Style}>.</span>
                                        </p>
                        
                                        <p style={pStyle}>
                                            <span style={spanStyle}>핸즈너는</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>도움의</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>손길을</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>고찰하는</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>철학자이며</span><span style={spanStyle} style={Style}>,</span>
                                            <span style={spanStyle}>글로벌화를</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>위한</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>봉사자입니다</span><span style={spanStyle} style={Style}>.</span>
                                        </p>
                                        <p style={pStyle}>
                                            <span style={spanStyle}>장소나</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>고정관념에</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>얽매이지</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>않고</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>자유로운</span>
                                            <span style={spanStyle} style={Style}>환경에서</span>
                                            <span style={spanStyle}>더나은</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>세상을</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>위해</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>끊임없이</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>질문을</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>던지고</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle} style={Style}></span>
                                        </p>

                                        <p style={pStyle}>
                                            <span style={spanStyle}>&nbsp;</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>그</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>질문을</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>서로간의</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>도움으로</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>해결해</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>갑니다</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle} style={Style}>.</span>
                                            <span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle} style={Style}></span>
                                        </p>
                                    </div>
                                </a>
                            </li>

                            <li class="each_notice">
                                <a href="/">
                                    <div class="notice_header">
                                        <div class="notice_title">
                                            공지사항 세번째 제목 입니다.
                                        </div>
                                        <div class="notice_time">
                                            2018-11-02
                                        </div>
                                    </div>
                                    <div class="notice_content">
                                        <p style={pStyle}>
                                            <span style={spanStyle}>글로핸즈의</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>핸즈너는</span>
                                            <span style={spanStyle} style={Style}>“</span>
                                            <span style={spanStyle}>글로벌</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>노마드</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>친구</span><span style={spanStyle} style={Style}>”</span>
                                            <span style={spanStyle}>입니다</span><span style={spanStyle} style={Style}>.</span>
                                        </p>
                        
                                        <p style={pStyle}>
                                            <span style={spanStyle}>핸즈너는</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>도움의</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>손길을</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>고찰하는</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>철학자이며</span><span style={spanStyle} style={Style}>,</span>
                                            <span style={spanStyle}>글로벌화를</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>위한</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>봉사자입니다</span><span style={spanStyle} style={Style}>.</span>
                                        </p>
                                        <p style={pStyle}>
                                            <span style={spanStyle}>장소나</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>고정관념에</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>얽매이지</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>않고</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>자유로운</span>
                                            <span style={spanStyle} style={Style}>환경에서</span>
                                            <span style={spanStyle}>더나은</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>세상을</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>위해</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>끊임없이</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>질문을</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>던지고</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle} style={Style}></span>
                                        </p>

                                        <p style={pStyle}>
                                            <span style={spanStyle}>&nbsp;</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>그</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>질문을</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>서로간의</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>도움으로</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>해결해</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>갑니다</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle} style={Style}>.</span>
                                            <span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle} style={Style}></span>
                                        </p>
                                    </div>
                                </a>
                            </li>


                            <li class="each_notice">
                                <a href="/">
                                    <div class="notice_header">
                                        <div class="notice_title">
                                            공지사항 세번째 제목 입니다.
                                        </div>
                                        <div class="notice_time">
                                            2018-11-02
                                        </div>
                                    </div>
                                    <div class="notice_content">
                                        <p style={pStyle}>
                                            <span style={spanStyle}>글로핸즈</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>공지사항</span>
                                            <span style={spanStyle} style={Style}>“</span>
                                            <span style={spanStyle}>내용이</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>여기에</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>들어갑니다</span><span style={spanStyle} style={Style}>.</span>
                                        </p>
                                            
                                        <p style={pStyle}>
                                            <span style={spanStyle}>상단에는</span><span style={spanStyle} style={Style}>.</span>
                                            <span style={spanStyle}>제목이</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>노출되며</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>하단에는</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>약</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>5줄</span><span style={spanStyle} style={Style}>,</span>
                                            <span style={spanStyle}>정도의</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>간략한</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>내용이 </span><span style={spanStyle} style={Style}>.</span>
                                            <span style={spanStyle}>보여집니다</span><span style={spanStyle} style={Style}>.</span>
                                        </p>
                                        <p style={pStyle}>
                                            <span style={spanStyle}>클릭하면</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>상세한</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>게시판</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>내용이</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>보여집니다</span><span style={spanStyle} style={Style}>.</span>
                                            <span style={spanStyle}>상세내용에는</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>간략한</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>내용을</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>제외한</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>제목과</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>모든</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>컨텐츠가</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>노출됩니다</span><span style={spanStyle} style={Style}>.</span>
                                            <span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle} style={Style}></span>
                                        </p>

                                        <p style={pStyle}>
                                            <span style={spanStyle}>블로그</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>스타일의</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>게시판</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>형태입니다</span><span style={spanStyle} style={Style}>.</span>
                                            <span style={spanStyle}>관리자는</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>제목</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>요약내용</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>상세내용을</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>입력할</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>수</span><span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle}>있습니다</span><span style={spanStyle} style={Style}>.</span>
                                            <span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle} style={Style}></span>
                                            <span style={spanStyle} style={Style}></span>
                                        </p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
export default Notice;
