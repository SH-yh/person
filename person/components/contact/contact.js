import React, {Component} from 'react';

import Msg from '../public/msg';
import ContentEditeable from '../public/contentEditable';

import style from '../../public/stylesheets/style.scss'

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            contactWay: this.props.contactWay
        }
    }
    render(){
        const Item = ContentEditeable(Msg);
        return(
            <div className="contact">
                <h4 className={style["contact-title"]}>{this.state.title}</h4>
                <div className="contact-way">
                    {
                        this.state.contactWay.map((item)=>{
                            return <Item key={item.key}  cn = {`${style[item.key]} ${style["contact-item"]} ${style["padding-l20"]}`} item = {item.value}/>
                        })
                    }
                </div>
            </div>
        )
    }
}
Contact.defaultProps = {
    title: "联系方式",
    contactWay: [
        {
            key: "mobile",
            value: "15232252958"
        },
        {
            key: "qq",
            value: "1532047069"
        },
        {
            key: "weChat",
            value: "haojie550403906"
        },
        {
            key: "email",
            value: "1532047069@qq.com"
        },
        {
            key: "github",
            value: "https://github.com/SH-yh"
        }
    ]
};

export default Contact;