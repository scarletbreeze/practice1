import React, { Component } from 'react';
import './maindiv.scss'
// import visionimage from '../../img/MainPage/glohands_vision.png';

class Vision extends Component{
    render(){
        return(
            <section class="section" id="0">
                <div id="sec1">
                    <p class="sec_top">“Global Hands” 글로벌의 손길</p><br />
                    <div class="sec_img"><img class="sec1_img" src={require('../../../img/MainPage/glohands_vision.png')}/></div>
                    <div class="sec_div">
                        <div class="sec_title">Our vision</div>
                        <div class="sec_contents">
                            글로핸즈는 사람과 사람 , 사람과 기술의 연결을 통해 더 편리하고 즐거운 글로벌을 꿈꿉니다. <br />
                            연결된 글로벌의 손길로 좀 더 가까운 세상 어제보다 두려움 없는 친근한 세상을 만들기 위해 노력하고 있습니다.
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Vision;