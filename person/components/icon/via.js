const path = require('path');
import React, {Component} from "react";

import style from '../../public/stylesheets/style.scss'
import viaSrc from "../../public/images/self.png"

class Via extends Component {
    constructor(props){
        super(props);
        this.state = {
            viaSrc: this.props.viaSrc
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
            <div className="person-via">
                <div className="person-via-image">
                    <label htmlFor="viaUpload">
                        <img className= {style.imageViaSize}  src={this.state.viaSrc}/>
                        <input  id = "viaUpload" style={{display:"none"}} type="file" onChange={this.handleViaSrcChange}/>
                    </label>
                </div>
            </div>
        )
    }
}
Via.defaultProps = {
    viaSrc : viaSrc
};

export default Via;