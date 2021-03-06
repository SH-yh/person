const path = require('path');
import React, {Component} from 'react';

import connectEditable from '../public/contentEditable';
import Msg from '../public/msg';
import AboutItem from './aboutItem';

import style from '../../public/stylesheets/style.scss';
import viaSrc from '../../public/images/self.png';


class Via extends Component {
    constructor(props){
        super(props);
        this.state = {
            viaSrc: this.props.viaSrc,
            selfAbout: this.props.selfAbout,
            AboutItem: this.props.AboutItem
        };
        this.handleViaSrcChange = this.handleViaSrcChange.bind(this);
    }
    handleViaSrcChange(e){
        const self = this;
        const fileType = e.target.files[0].name;
        if(/\.(png|svg|jpg|gif)/.test(path.extname(fileType))) {
            const blodReader = new FileReader();
            blodReader.readAsDataURL(e.target.files[0]);
            blodReader.onload = function(){
                self.setState({
                    viaSrc: blodReader.result
                });
            };
        }else{
            alert("请上传图片");
        }
    }
    render(){
        const ViaMsg = connectEditable(Msg);
        const ItemMsg = connectEditable(AboutItem);
        return(
            <div className={ `${style["background-gray"]}  person-via` }>
                <div className={`${style.center} ${style["padding-bt20"]}`}>
                    <label htmlFor="viaUpload">
                        <img className= {style["image-viaSize"]}  src={this.state.viaSrc}/>
                        <input  id = "viaUpload" style={{display:"none"}} type="file" onChange={this.handleViaSrcChange}/>
                    </label>
                </div>
                <div className={`${style["via-self"]} `} >
                    {
                        this.state.selfAbout.map((item)=>{
                            for(let key in item){
                                let className = key === 'name' ? style["font-size24"] : style["font-size16"];
                                className += key === "address" ? " "+ style.gps : "";
                                return <ViaMsg key={key}  cn = {`${className} ${style["padding-bt5"]}`} item={item[key]}/>
                            }
                        })
                    }
                </div>
                <div className={`${style["flex-row"]} person-via-about`}>
                    {
                        this.state.AboutItem.map((item)=>{
                            return <ItemMsg key={item.key} cn={style["about-item"]} item={item}/>
                        })
                    }
                </div>
            </div>
        )
    }
}
Via.defaultProps = {
    viaSrc : viaSrc,
    selfAbout: [
            {name: "郝洁"},
            {work: "前端工程师"},
            {address: "邢台，中国"},
            {major: "专业：计算机科学与技术"}
        ],
    AboutItem: [
        {
            key: "性别",
            value: "男",
        },
        {
            key: "年龄",
            value: "23",
        },
        {
            key: "学校",
            value: "河北大学"
        },
    ],

};

export default Via;