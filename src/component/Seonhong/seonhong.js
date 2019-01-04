import React, { Component ,Fragment } from 'react';

import './basestyle.scss';
import './reset.scss';

import HeaderContainer from './header/headerContainer';
import SubNavContainer from './subnav/subNavContainer';
import Vision from './maindiv/1_vision';
import Culture from './maindiv/2_culture';
import CI from './maindiv/3_ci';
import Article from './maindiv/4_article';
import Notice from './maindiv/5_notice';

class Seonhong extends Component {
  render() {
    return (
      // <MyName name = "리액트"/>
        <Fragment>
          <HeaderContainer />
          <SubNavContainer />
    

            <main class="cd-main-content sub-nav-hero">
            <div class="contents">
                <Fragment>
                <Vision />
                <Culture />
                <CI />
                <Article />
                <Notice />
                </Fragment>       
            </div>
            </main> 
        </Fragment>
    );
  }
}

export default Seonhong;
