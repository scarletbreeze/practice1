import React, { Component ,Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Seonhong from "./component/Seonhong/seonhong";
import Kwangmin from "./component/Kwangmin/kwangmin";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <swtich>
              {/* <Route exact path ="/" component ={Seonhong}/> */}
              <Route exact path ="/" component={Seonhong} />
              <Route path ="/kwangmin" component={Kwangmin}/>
            </swtich>
        </div>    
      </Router>
    );
  }
}

export default App;
