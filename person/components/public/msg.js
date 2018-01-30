import React, {Component} from 'react';
const Msg = (props)=>{
    const html = security(props.item);
    return <div onDoubleClick={props.handleDoubleClick} className={props.cn} dangerouslySetInnerHTML={{__html: html}}></div>
};
const security = (str) => {
    return str.replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--');
};
export default Msg;