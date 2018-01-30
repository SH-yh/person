import React, {Component} from 'react';


const defaultStyle = {
    wrap: {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent':'space-between',
    },
    btn: {
        'display':'block',
        'width': '25px',
        'height': '25px',
        'lineHeight':'25px',
        'textAlign': 'center',
        'borderRadius': '50%',
        'background': '#EFEFEF',
        'fontWeight': '700',
        'cursor': 'pointer'
    }
};
class Title extends Component {
    constructor(props){
        super(props);
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    handleAddItem(){
        this.props.handleAddItem()
    }
    render(){
        const items = this.props.items;
        return(
            <div style={defaultStyle.wrap}>
                <h4>{this.props.title}</h4>
                <span  onClick={this.handleAddItem} style={defaultStyle.btn}>+</span>
            </div>
        );
    }
}
Title.defaultProps = {
    title: "主题"
};

export default Title;