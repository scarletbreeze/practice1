import React, { Component ,Fragment } from 'react';
// import './basic.js';
import './basestyle.scss';
import './reset.scss';

//import MyName from './MyName';
import HeaderContainer from './component/header/headerContainer';
import SubNavContainer from './component/subnav/subNavContainer';
import Vision from './component/maindiv/1_vision';
import Culture from './component/maindiv/2_culture';
import CI from './component/maindiv/3_ci';
import Article from './component/maindiv/4_article';
import Notice from './component/maindiv/5_notice';

class App extends Component {
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

export default App;
