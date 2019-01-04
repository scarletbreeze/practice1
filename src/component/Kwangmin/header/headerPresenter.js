import React from 'react';
import './header.scss'
import image from '../../../img/MainPage/glosign_png_black_665.png'
import { NavLink } from 'react-router-dom';


const HeaderPresenter = ({props, context}) => {

    return(
        <header class="cd-auto-hide-header">
        <div class="logo">
            <a href="/">
              <img src={image} alt="Logo"/> 
            </a>
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
                    {/* GloHands */}
                    {/* <NavLink exact to="/" className="item" activeClassName="active">홈</NavLink> */}
                    <NavLink exact to="/" >선홍</NavLink>
                </li>
                <li>
                    {/* <a href="/">Our Services</a> */}
                    <NavLink to="/kwangmin">광민</NavLink>
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