import React, {Component} from 'react';

import Via from '../icon/via';
import Contact from '../contact/Contact';

import style from '../../public/stylesheets/style.scss';

class LeftApp extends Component {
    render(){
        return (
            <div className={`${style.flex3} left-container`}>
                <Via/>
                <Contact/>
            </div>
        )
    }
}

export default  LeftApp;