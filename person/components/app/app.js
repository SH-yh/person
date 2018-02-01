    import React, {Component} from "react";

import LeftApp from '../left/left';
import RightApp from '../right/right';

import style from '../../public/stylesheets/style.scss';

class App extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        document.oncontextmenu = (e)=>{
            if(e.returnValue){
                e.returnValue = false
            }else{
                return false;
            }
        }
    }
    render(){
        return (
            <div className={style.container}>
                <LeftApp />
                <RightApp/>
            </div>
        )
    }
}

export default App;