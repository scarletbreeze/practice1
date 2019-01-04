import React from 'react';
import './Section.scss'
import image1 from '../../img/MainPage/glohands_ci_01.png'
import image2 from '../../img/MainPage/glohands_ci_02.png'
const Section2Presenter = ({props, context}) => {
    return (
        <section class="section" id="2">
                <div id="sec3">
                    <p class="sec_top">글로핸즈 CI</p>
                    <div class="sec_img">
                        <img src={image1} alt="section2_1_img"/><br /><br />
                        <img src={image2} alt="section2_2_img"/>
                    </div>
                </div>
        </section>
    );
};

export default Section2Presenter;