import React, { Component,Fragment } from 'react';
// import logo from './logo.svg';
 import './App.scss';
//import MyName from './MyName';
import HeaderContainer from './component/header/headerContainer';
import SectionContainer from './component/headersection/sectionContainer';
import NavContainer from './component/nav/navContainer';
import Section0Container from './component/Main/Section0Container';

class App extends Component {
  state = { hidden: false };
    
  constructor(props) {
      super(props);
  
      // Bind the function to this component, so it has access to this.state
      this.handleScroll = this.handleScroll.bind(this);
    }
    componentWillMount() {
      // When this component mounts, begin listening for scroll changes
      window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
      // If this component is unmounted, stop listening
      window.removeEventListener('scroll', this.handleScroll);
    }
  
    handleScroll(e) {
      let lastScrollTop = 0;
      const currentScrollTop = this.scrollTop;
  
      // Set the state of hidden depending on scroll position
      // We only change the state if it needs to be changed
      if (!this.state.hidden && currentScrollTop > lastScrollTop) {
        this.setState({ hidden: true });
      } else if(this.state.hidden) {
        this.setState({ hidden: false });
      }
      lastScrollTop = currentScrollTop;
    }
  
  render() {
    return (
      // <MyName name = "리액트"/>
      
      <Fragment>
        <HeaderContainer />
        <SectionContainer/>
        <NavContainer hidden={this.state.hidden}/>

        <main class="cd-main-content sub-nav-hero">
          <Section0Container />
      
        
        </main>

      </Fragment>

      
    );
  }
}

export default App;

