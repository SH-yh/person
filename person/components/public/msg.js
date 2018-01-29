import React, {Component} from 'react';
const Msg = (props)=>{
    return <div onDoubleClick={props.handleDoubleClick} className={props.cn}>{props.item}</div>
};

export default Msg;