import React, {Component} from 'react';

import DeleteCancel from '../public/deleteCancel';

class ProjectItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            mark: false
        };
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDelete  = this.handleDelete.bind(this);
        this.handleRightKey = this.handleRightKey.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleDelete(){
        this.props.handleDelete(this.props.dataId);
    }
    handleCancel(){
        this.setState(
            {
                mark: false
            }
        );
    }
    handleBlur(e){
        const props = this.props;
        const target = e.target;
        const key = target.id;
        const msg = target.innerHTML;
        if(props[key] == msg){
            return;
        }else{
            const obj = {};
            obj[key] = msg;
            console.log(key, msg);
            this.props.handleBlur(this.props.dataId,obj);
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
    }
    render(){
        const defaultStyle = {
            'title': {
                'boxSizing': 'border-box',
                'width':'688px',
                'padding':'10px 20px',
                'fontWeight': '700',
            },
            'content': {
                'width':'688px',
                'boxSizing': 'border-box',
                'padding':'10px 20px',
                'borderTop': '1px solid #DFDFDF',
                'background':'#FDFAFA'
            },
            'container': {
                'position': 'relative'
            }
        };
        return(
            <div onMouseDown={this.handleRightKey} style={defaultStyle.container}>
                <div>
                    <h4 onBlur={this.handleBlur} id="title" onDoubleClick={this.props.handleDoubleClick} style={defaultStyle.title}>{this.props.title}</h4>
                    <p onBlur={this.handleBlur} id="content" onDoubleClick={this.props.handleDoubleClick} style={defaultStyle.content}>{this.props.content}</p>
                </div>
                {this.state.mark && <DeleteCancel index={this.props.dataId} delete={this.handleDelete} cancel= {this.handleCancel}/>}
            </div>
        );
    }
}

export default ProjectItem;