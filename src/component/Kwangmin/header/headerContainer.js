import React, { Component } from 'react';
import HeaderPresenter from"./headerPresenter";
import './header.scss'
import image from '../../../img/MainPage/glosign_png_black_665.png'
import { NavLink } from 'react-router-dom';

class HeaderContainer extends Component{

   
    constructor(props) {
        super(props);

        this.state = { hide:"cd-auto-hide-header",prevHeight:0};

        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll = e => {
        let prevheight=this.state.prevHeight;
        let currheight=window.scrollY;
        console.log("scroll:",this.state.prevHeight, window.scrollY);
        this.setState({scroll: window.scrollY,prevHeight:window.scrollY});
        
        if(this.state.scroll >=400){
            this.setState({
                hide:"cd-auto-hide-header is-hidden"
            })
            // console.log(window.scrollY," ",this.state.prevHeight);
            if(prevheight>currheight){
                this.setState({
                    hide:"cd-auto-hide-header"
                })
                console.log("asdfasdf");
            }
        }
        else{
            this.setState({
                hide:"cd-auto-hide-header"
            })
        }
        
        //console.log(this.state);
    }
  
  componentDidMount() {
        
        const header1= document.querySelector('#header1');
        
        console.log(header1.offsetHeight);


        document.addEventListener('scroll', this.handleScroll);

        
        
    }
   
   
  componentDidUpdate(prevProps, prevState) {
        // if(this.state.scroll<prevState.scroll){
        //     document.addEventListener('scroll',this.handleHeader);
        // }
      
        //console.log(this.state.scroll >= 200) ;
        
        // this.state.scroll >= this.state.top ? 
        //     document.body.style.paddingTop =`${this.state.height}px` :
        //     document.body.style.paddingTop = 0;
    }
    render(){
        return (
            <header class={this.state.hide} id="header1">
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
        );
    }
}
export default HeaderContainer;