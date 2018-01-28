const path = require('path');
import React, {Component} from 'react';

import ViaMsg from './viaMsg';
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
        return(
            <div className={ `${style.backgroundGray} ${style.borderB} person-via` }>
                <div className={`${style.center} ${style.paddingBT20}`}>
                    <label htmlFor="viaUpload">
                        <img className= {style.imageViaSize}  src={this.state.viaSrc}/>
                        <input  id = "viaUpload" style={{display:"none"}} type="file" onChange={this.handleViaSrcChange}/>
                    </label>
                </div>
                <div className={`${style.viaSelf} `} >
                    {
                        this.state.selfAbout.map((item)=>{
                            for(let key in item){
                                let className = key === 'name' ? style.fontSize24 : style.fontSize16;
                                className += key === "address" ? " "+ style.gps : "";
                                return <ViaMsg key={key} cn = {`${className} ${style.paddingB10}`} item={item[key]}/>
                            }
                        })
                    }
                </div>
                <div className={`${style.flexRow} person-via-about`}>
                    {
                        this.state.AboutItem.map((item)=>{
                            return <AboutItem key={item.key} cn={style.aboutItem} item={item}/>
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
            {address: "邢台，中国"}
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
    ]
};

export default Via;