import React, {Component} from 'react';

import SkillItem from './skillItem';
import Title from '../public/title';
import ConnectEditable from '../public/contentEditable';

class Skill extends Component {
    constructor(props){
        super(props);
        this.state = {
            skills: this.props.skills
        };
        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleBlur(index,newSkill){
        const skills = this.state.skills[index];
        for(let key in newSkill){
            skills[key] = newSkill[key];
        }
        this.setState({
            skills: this.state.skills
        });
    }
    handleAddItem(){
        const skills = this.state.skills;
        const skillsLength = skills.length;
        const item = skills[skillsLength - 1];
        const obj = {};
        for(let key in item){
            obj[key] = item[key];
        }
        skills.push(obj);
        this.setState({
            skills: skills
        });

    }
    handleDelete(index){
        const skills = this.state.skills;
        skills.splice(index, 1);
        this.setState({
            skills: skills
        });
    }
    render(){
        const Skill = ConnectEditable(SkillItem);
        return (
            <div>
                <Title handleAddItem={this.handleAddItem} title={this.props.title}/>
                {
                    this.state.skills.map((item, index)=>{
                        return <Skill handleDelete = {this.handleDelete} handleBlur={this.handleBlur} key={index} dataId={index} title = {item.skill} num = {item.num}/>
                    })
                }
            </div>

        )
    }
}
Skill.defaultProps = {
    title: "个人技能",
    skills: [
        {'skill':'Javascript','num': 80},
        {'skill':'Css','num': 60},
    ]
};
export default Skill;