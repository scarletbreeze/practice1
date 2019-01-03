import React, { Component } from 'react';
import './maindiv.scss'

class Culture extends Component{
    render(){
        return(
            <section class="section" id="1">
                <div id="sec2">
                    <p class="sec_top">서로의 도움으로 함께 성장하는 글로핸즈</p><br />
                    <div class="sec_img"><img class="sec2_img" src={require('../../img/MainPage/glohands_culture.png')}/></div>
                    <div class="sec_div">
                        <div class="sec_title">Our culture</div>
                        <div class="sec_contents">
                            글로핸즈의 핸즈너는 “글로벌 노마드 친구”입니다. <br />
                            핸즈너는 도움의 손길을 고찰하는 철학자이며, 글로벌화를 위한 봉사자입니다. 장소나 고정관념에 얽매이지 않고 자유로운 환경에서 더나은 세상을 위해 끊임없이 질문을
                            던지고 그 질문을 서로간의 도움으로 해결해 갑니다.
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Culture;