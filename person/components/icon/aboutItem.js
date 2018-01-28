import React, {Component} from 'react';

class AboutItem extends  Component {
    render(){
        const item = this.props.item;
        return(
            <div className={this.props.cn}>
                <span>{item.value}</span>
                <span>{item.key}</span>
            </div>
        )
    }
}

export default AboutItem;