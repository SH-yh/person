import React, {Component} from 'react';

import Item from './item';

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
        return(
            <div className="contact">
                <Item cn = {style.contactTitle} title={this.state.title}/>
                <div class="contact-way">
                    {
                        this.state.contactWay.map((item)=>{
                            return <Item key={item.key} cn = {`${style[item.key]} ${style.contactItem} ${style.paddingL20}`} title = {item.value}/>
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