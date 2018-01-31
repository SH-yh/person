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
    }
    handleBlur(newNum,title){
        const skills = this.state.skills;
        const newSkills = skills.map((item)=>{
            if(item.skill == title){
                item.num = newNum;
            }
            return item;
        });
        this.setState({
            skills: newSkills
        });
    }
    handleAddItem(){
        const skills = this.state.skills;
        const skillsLength = skills.length;
        const item = skills[skillsLength - 1];
        skills.push(item);
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
                        return <Skill handleBlur={this.handleBlur} key={index} title = {item.skill} num = {item.num}/>
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