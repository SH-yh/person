import React, {Component} from 'react';

import DeleteCancel from '../public/deleteCancel';

class SkillItem extends Component{
    constructor(props){
        super(props);
        this.state = {
           mark : false
        };
        this.handleBlur = this.handleBlur.bind(this);
        this.handleRightKey = this.handleRightKey.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleBlur(e){
        const index = this.props.dataId;
        const id = e.target.id;
        const title = this.props.title;
        if(id == "num"){
            const num = e.target.innerHTML.split('%')[0];
            const newNum = parseInt(num);
            const oldNum = this.props.num;
            if(typeof newNum !== "number" || newNum != newNum){
                alert('请输入数字');
            }else{
                if(oldNum == newNum){
                    return
                }else{
                    this.props.handleBlur(index,{'num': newNum});
                }
            }
        }else if(id == "title") {
            const newTitle = e.target.innerHTML;
            title != newTitle && this.props.handleBlur(index,{'skill': newTitle});
            return;
        }
    }
    handleRightKey(e){
        if(e.button == 2){
            this.setState(
                {
                    mark: true
                }
            );
        }
        e.preventDefault();
    }
    handleDelete(index){
        this.props.handleDelete(index);
    }
    handleCancel(){
        this.setState(
            {
                mark: false
            }
        );
    }
    render(){
        const defaultStyle = {
            'container':{
              'position': 'relative'
            },
            'wrap':{
                'display': 'flex',
                'flexDirection': 'row',
                'alignItems':'center',
                'margin': "20px",
            },
            'skill-wrap': {
              'width': '100%',
              'flex':'1'
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
        const num = Number(this.props.num) <= 100 ? Number(this.props.num) : 100;
        defaultStyle.progress.width = num/100 * defaultWidth + "px";
        return (
            <div style={defaultStyle.container}  onMouseDown={this.handleRightKey}>
                <div style={defaultStyle.wrap}>
                    <span id="title"  onBlur={this.handleBlur}  onDoubleClick={this.props.handleDoubleClick} style={defaultStyle.tip}>{this.props.title}</span>
                    <div style={defaultStyle["progress-wrap"]}>
                        <span style={defaultStyle.progress}></span>
                    </div>
                    <span id="num" onDoubleClick={this.props.handleDoubleClick}
                          onBlur={this.handleBlur} style={defaultStyle.tip}>{num}%</span>
                </div>
                {
                    this.state.mark && <DeleteCancel index={this.props.dataId} delete={this.handleDelete} cancel= {this.handleCancel}/>
                }
            </div>
        );
    }
};
SkillItem.defaultProps = {
    num : 50,
    title: 'javascript'
};

export default SkillItem;