import React, { Component, Fragment } from 'react';
import HeaderPresenter from"./headerPresenter";
import image from '../../../img/MainPage/glosign_png_black_665.png'
import { NavLink } from 'react-router-dom';

class HeaderContainer extends Component{


    constructor(props) {
        super(props);
  
        this.state = {
           hide: "cd-auto-hide-header",
           prevHeight:0
       };
     }

    handleScroll = e => {
        let prevheight=this.state.prevHeight;
        let currheight=window.scrollY;
        console.log("scroll:",this.state.prevHeight, window.scrollY);
        this.setState({scroll: window.scrollY,prevHeight:window.scrollY}); // window.scrollY 스크롤 되는 픽셀수를 의미

       if(this.state.scroll >=400){
            this.setState({
                hide:"cd-auto-hide-header is-hidden"
            })
            // console.log(window.scrollY," ",this.state.prevHeight);
            if(prevheight>currheight){
                this.setState({
                    hide:"cd-auto-hide-header"
                })
                console.log("올라갑니다");
            }
        }
        else{
            this.setState({
                hide:"cd-auto-hide-header"
            })
        }
        
    }
  
    componentDidMount() {
        
        // const header1= document.querySelector('#header1');
        
        // console.log(header1.offsetHeight);

        document.addEventListener('scroll', this.handleScroll);        
    }
   
    render(){
        return (
            <HeaderPresenter hide={this.state.hide}/>
        );
    }
}
export default HeaderContainer;