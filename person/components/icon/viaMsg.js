import React, {Component} from 'react';

class ViaMsg extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <span className={this.props.cn}>{this.props.item}</span>
        );
    }
}

export default ViaMsg;