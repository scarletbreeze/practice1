import React, { Component, Fragment } from 'react';
import SubNavPresenter from"./subNavPresenter";
import HeaderPresenter from '../header/headerPresenter';

class SubNavContainer extends Component {
   
   
    constructor(props) {
        super(props);

        this.state = { 
            position:"relative", 
            act:"active",
            act1:null,
            act2:null,
            act3:null,
            act4:null,
            prevHeight: 0,
        };

        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll = () => {
        let prevheight=this.state.prevHeight;
        let currheight=window.scrollY;
        // console.log("scroll:",this.state.prevHeight, window.scrollY);
        this.setState({scroll: window.scrollY, prevHeight:window.scrollY});
        
        
        if(this.state.scroll >=400){
            
             this.setState({
                 position:"fixed slide-up",
                //  name:"cd-secondary-nav fixed slide-up"
             })
             if(prevheight>currheight){
                this.setState({
                    position:"fixed"
                })
                console.log("2wwwww");
             }
            
        }
        else{
            this.setState({
                position:"relative"
            })
        }

        // console.log(this.state.scroll);

        if(this.state.scroll >=1046 && this.state.scroll<1789){
            this.setState({
                act1:"active",
                act:null,
                act2:null,
                act3:null,
                act4:null
                
            })   
        }
        if(this.state.scroll<1046){
            this.setState({
                act1:null,
                act:"active",
                act2:null,
                act3:null,
                act4:null
            })
        } if(this.state.scroll>=1789 && this.state.scroll<2969){
            this.setState({
                act1:null,
                act2:"active",
                act3:null,
                act:null,
                act4:null
            })
        }
        if(this.state.scroll>=2969 && this.state.scroll<3650){
            this.setState({
                act2:null,
                act3:"active",
                act4:null,
                act:null,
                act1:null
            })
        }if(this.state.scroll>=3650){
            this.setState({
                act3:null,
                act4:"active",
                act:null,
                act1:null,
                act2:null
            })
        }
    }
        
        
  componentDidMount() {
        // const nav1 = document.querySelector('#nav');
        // const navHeight=nav1.getBoundingClientRect().top;
    //    console.log(nav1.offsetHeight);
        
    //    var allList=document.querySelectorAll(".sub_navi_list");
    //    var array=Array(...document.querySelectorAll('.section'));

        // this.setState({top: nav1.offsetTop, height: nav1.offsetHeight});
        document.addEventListener('scroll', this.handleScroll);
        // document.addEventListener('scroll', this.handleMove);
        
        
    }
    
   
    render() {
       return (
            <SubNavPresenter position={this.state.position}act={this.state.act} act1={this.state.act1} act2={this.state.act2} act3={this.state.act3}  act4={this.state.act4} />
            // <SubNavPresenter state={this.state}/>
        );
    }
}

export default SubNavContainer;