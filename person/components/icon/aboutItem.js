import React, {Component} from 'react';

const AboutItem = (props)=> {
        const item = props.item;
        return(
            <div className={props.cn}>
                <span onDoubleClick={props.handleDoubleClick}>{item.value}</span>
                <span onDoubleClick={props.handleDoubleClick}>{item.key}</span>
            </div>
        )
};

export default AboutItem;