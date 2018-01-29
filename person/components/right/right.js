import React, {Component} from 'react';

import Introduce from '../introduce/introduce'

import style from '../../public/stylesheets/style.scss';

class RightApp extends Component {
    render(){
        return(
            <div  className={`${style.flex8} ${style.paddingL20} right-container`}>
                <Introduce />
            </div>
        )
    }
}

export default  RightApp;
