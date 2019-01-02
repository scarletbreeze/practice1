import React from 'react';
import './header.scss'
import image from '../../img/MainPage/glosign_png_black_665.png'

const HeaderPresenter = ({props, context}) => {

    return(
        <header class="cd-auto-hide-header">
        <div class="logo">
            <img src={image} alt="Logo"/> 
        </div>

        <nav class="cd-primary-nav">
            <a href="#cd-navigation" class="nav-trigger">
                <span>
                    <em aria-hidden="true"></em>
                    Menu
                </span>
            </a>
            
            {/* <!-- .nav-trigger --> */}

            <ul id="cd-navigation">
                <li>
                    <a href="/">GloHands</a>
                </li>
                <li>
                    <a href="/">Our Services</a>
                </li>
                <li>
                    <a href="/">Business</a>
                </li>
                <li>
                    <a href="/">SocialHands</a>
                </li>
                <li>
                    <a href="/">Support</a>
                </li>
                <li>
                    <a href="/">Careers</a>
                </li>
            </ul>
        </nav>
        {/* <!-- .cd-primary-nav --> */}
        <div class="nav-languages">

            <span>ENG</span>
            <span>中文</span>
            <span>한국어</span>

        </div>
    </header>
    )
}
export default HeaderPresenter;