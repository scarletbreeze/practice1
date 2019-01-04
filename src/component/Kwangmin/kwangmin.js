import React, { Component,Fragment } from 'react';
// import logo from './logo.svg';
 import './kwangmin.scss';
//import MyName from './MyName';
import HeaderContainer from '../Kwangmin/header/headerContainer';
import SectionContainer from './headersection/sectionContainer';
import NavContainer from './nav/navContainer';
import Section0Container from './Main/Section0Container';

class Kwangmin extends Component {
  
  
  render() {
    return (
      // <MyName name = "리액트"/>
      
      <Fragment>
        <HeaderContainer />
        <SectionContainer/>
        <NavContainer />

        <main class="cd-main-content sub-nav-hero">
          <Section0Container />
      
        
        </main>

      </Fragment>

      
    );
  }
}


export default Kwangmin;


