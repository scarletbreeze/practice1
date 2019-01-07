import React, { Component, Fragment } from 'react';
import SubNavPresenter from"./subNavPresenter";

class SubNavContainer extends Component {
   
   
    constructor(props) {
        super(props);

        this.state = { position:"relative", act:"active",
                        act1:null,
                        act2:null,
                        act3:null,
                        act4:null
        };

        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll = () => {
        this.setState({scroll: window.scrollY});
       
        if(this.state.scroll >=400){
            this.setState({
                position:"fixed slide-up"
            })
            
        }
        else{
            this.setState({
                position:"relative"
            })
        }
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
        const nav1 = document.querySelector('#nav');
        const navHeight=nav1.getBoundingClientRect().top;
       // console.log(nav1.offsetHeight);
        
       var allList=document.querySelectorAll(".sub_navi_list");
       var array=Array(...document.querySelectorAll('.section'));

        this.setState({top: nav1.offsetTop, height: nav1.offsetHeight});
        document.addEventListener('scroll', this.handleScroll);
        // document.addEventListener('scroll', this.handleMove);
        
        
    }
    Headerfunction=()=>{
        this.setState({
            position:"fixed"
        })
    }

  componentDidUpdate(prevProps, prevState) {
        // if(this.state.scroll<prevState.scroll){
        //     document.addEventListener('scroll',this.Headerfunction);
        // }
    
        //console.log(this.state.scroll >= 200) ;
        
        // this.state.scroll >= this.state.top ? 
        //     document.body.style.paddingTop =`${this.state.height}px` :
        //     document.body.style.paddingTop = 0;
    }
    
   
    render() {
        return (
        <Fragment>
        <SubNavPresenter/>
        
        <div>
             <nav className={["cd-secondary-nav ",
                    this.state.position].join(" ")}
              id="nav">
            <ul>
                <li class="sub_navi_list first">
                    <a className={[this.state.act].join(" ")} href="#0">비전</a>
                </li>
                <li class="sub_navi_list second">
                    <a href="#1" className={[this.state.act1].join(" ")}>문화</a>
                </li>
                <li class="sub_navi_list third">
                    <a href="#2" className={[this.state.act2].join(" ")}>CI</a>
                </li>
                <li class="sub_navi_list forth">
                    <a href="#3" className={[this.state.act3].join(" ")}>보도자료</a>
                </li>
                <li class="sub_navi_list fifth">
                    <a href="#4" className={[this.state.act4].join(" ")}>공지사항</a>
                </li>
            </ul>
            </nav>
        </div>


        </Fragment>
        );
    }
}

export default SubNavContainer;