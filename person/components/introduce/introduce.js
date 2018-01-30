import React, {Component} from 'react';

import ConnectEditable from '../public/contentEditable';
import Msg from '../public/msg';

import style from '../../public/stylesheets/style.scss';

class Introduce extends Component {
    constructor(props){
        super(props);
        this.state = {
            defaultIntroduce: this.props.defaultIntroduce
        };
    }
    render(){
        const Introduce = ConnectEditable(Msg);

        return <Introduce cn={style['editable']} item={this.state.defaultIntroduce}/>;
    }
}
Introduce.defaultProps = {
    defaultIntroduce: "本人就读于河北大学计算机科学与技术学院，在校期间认真完成了自己的学业，无挂科情况，目前在班级排名11/37，'" +
    "曾获得校级奖学金三等奖，英语等级ECT4。<br />本人自学前端有一年左右，期间掌握了HTML,CSS,Javascript," +
    "ES6,Node.js，React.js等前端知识并且能够熟练运用。除此外本人能够较为熟练地使用webpack,git工具。<br />在课余时间，还阅读了" +
    "《Javascript DOM 编程艺术》、《Javascript 高级编程》、《Javascript 权威指南》、《你不知道的Javascript》上中系列、《深入浅出React和redux》等书籍。"
};

export default Introduce;