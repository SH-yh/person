import React, {Component} from 'react';

import ProjectItem from './projectItem';
import ContentEditable from '../public/contentEditable';
import Title from '../public/title';

class Project extends  Component{
    constructor(props){
        super(props);
        this.state = {
            projectList: this.props.projectList
        };
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleDelete(index){
        this.state.projectList.splice(index, 1);
        this.setState({
            projectList: this.state.projectList
        });
    }
    handleAddItem(){
        const projectList = this.state.projectList;
        const length = projectList.length;
        const newProject = projectList[length - 1];
        const obj = {};
        for(let key in newProject){
            obj[key] = newProject[key];
        }
        projectList.push(obj);
        this.setState({
            projectList: projectList
        });
    }
    handleBlur(index, newItem){
        console.log(index, newItem);
        const project = this.props.projectList[index];
        for(let key in newItem){
            project[key] = newItem[key]
        }
        this.setState({
            projectList: this.props.projectList
        });
    }
    render(){
        const Item = ContentEditable(ProjectItem);
        return(
            <div>
                <Title handleAddItem = {this.handleAddItem} title={this.props.title}/>
                {
                    this.state.projectList.map((item, index)=>{
                        return <Item {...item} handleBlur = {this.handleBlur} handleDelete = {this.handleDelete} dataId={index} key = {index}/>
                    })
                }
            </div>
        );
    }
};
Project.defaultProps = {
    'title': '项目经历',
    'projectList': [
        {
            'title': '个人博客',
            'content': '这是我第一个项目'
        },

    ]
};
export default  Project;