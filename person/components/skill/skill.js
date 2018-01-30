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
            <React.Fragment>
                <Title handleAddItem={this.handleAddItem} title={this.props.title}/>
                {
                    this.state.skills.map((item, index)=>{
                        return <Skill key={index} title = {item}/>
                    })
                }
            </React.Fragment>

        )
    }
}
Skill.defaultProps = {
    title: "个人技能",
    skills: [
        'Javascript',
        'Css'
    ]
};
export default Skill;