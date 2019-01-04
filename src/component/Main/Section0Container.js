import React, { Component } from 'react';
import Section0Presenter from './Section0Presenter';
import Section1Presenter from './Section1Presenter';
import Section2Presenter from './Section2Presenter';
import Section3Presenter from './Section3Presenter';
import Section4Presenter from './Section4Presenter';
class Section0Container extends Component {
    render() {
        
        return (
            <div>
            <Section0Presenter/>
            <Section1Presenter/>
            <Section2Presenter/>
            <Section3Presenter/>
            <Section4Presenter/>
            </div>
        );
    }
}

export default Section0Container;