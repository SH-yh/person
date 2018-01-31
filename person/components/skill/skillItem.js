import React, {Component} from 'react';


class SkillItem extends Component{
    constructor(props){
        super(props);
        this.handleBlur = this.handleBlur.bind(this)
    }
    handleBlur(e){
        const newNum = parseInt(e.target.innerHTML);
        const title = this.props.title;
        const oldNum = this.props.num;
        if(typeof newNum !== "number"){
            alert('请输入数字');
        }else{
            if(oldNum == newNum){
                return
            }else{
                this.props.handleBlur(newNum, title);
            }
        }
    }
    render(){
        const defaultStyle = {
            'wrap':{
                'display': 'flex',
                'flexDirection': 'row',
                'alignItems':'center',
                'margin': "20px",
            },
            'tip':{
                'display': 'inline-block',
                'lineHeight':'1.5',
                'width':'120px',
                'textAlign':'center'
            },
            'progress-wrap': {
                'width': "350px",
                'height': "10px",
                'background': "#EFEFEF"
            },
            'progress': {
                'display':'block',
                'width':0,
                'height': '10px',
                'background': '#43B885',
                'verticalAlign': 'middle'
            },
        };
        const defaultWidth = parseInt(defaultStyle["progress-wrap"].width);
        const num = this.props.num < 100 ? this.props.num : defaultWidth;
        defaultStyle.progress.width = this.props.num/100 * defaultWidth + "px";
        return (
            <div  style={defaultStyle.wrap} >
                <span onDoubleClick={this.props.handleDoubleClick} style={defaultStyle.tip}>{this.props.title}</span>
                <div style={defaultStyle["progress-wrap"]}>
                    <span style={defaultStyle.progress}></span>
                </div>
                <span onDoubleClick={this.props.handleDoubleClick}
                      onBlur={this.handleBlur} style={defaultStyle.tip}>{num}%</span>
            </div>
        );
    }
};
SkillItem.defaultProps = {
    num : 50,
    title: 'javascript'
};

export default SkillItem;