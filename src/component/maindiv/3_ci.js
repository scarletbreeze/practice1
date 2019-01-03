import React, { Component } from 'react';
import './maindiv.scss'

class CI extends Component{
    render(){
        return(
            <section class="section" id="2">
                <div id="sec3">
                    <p class="sec_top">글로핸즈 CI</p>
                    <div class="sec_img">
                        <img src={require('../../img/MainPage/glohands_ci_01.png')}/><br /><br />
                        <img src={require("../../img/MainPage/glohands_ci_02.png")}/>
                    </div>
                </div>
            </section>
        )
    }
}
export default CI;
