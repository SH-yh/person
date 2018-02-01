import React, {Component} from 'react';

import Introduce from '../introduce/introduce';
import Skill from '../skill/skill'
import Project from '../project/project'

import style from '../../public/stylesheets/style.scss';

class RightApp extends Component {
    render(){
        return(
            <div  className={`${style.flex7} ${style["right-container"]}`}>
                <Introduce/>
                <Skill />
                <Project />
            </div>
        )
    }
}

export default  RightApp;
