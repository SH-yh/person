import React, {Component} from 'react';


class DeleteCancel extends Component {
    constructor(props){
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(){
        this.props.delete(this.props.index);
    }
    handleCancel(){
        this.props.cancel();
    }
    render(){
        const defaultStyle = {
            'wrap': {
                'position':'absolute',
                'height': '25px',
                'width': '120px',
                'top':'0','bottom':'0',
                'left':'0','right': '0',
                'margin': 'auto',
                'lineHeight':'25px',
                'background': '#EFEFEF',
                'borderRadius': '20px',
                'textAlign': 'center',
                'border':'1px solid #A7A6A6',
                'color': '#6F6F6F',
                'fontSize': '14px',
                'cursor': 'pointer'
            },
            'gap': {
                'padding':'0 4px'
            }
        };
        return(
            <div style={defaultStyle.wrap}>
                <span onClick={this.handleDelete}>Delete</span>
                <span style={defaultStyle.gap}>|</span>
                <span onClick={this.handleCancel}>Cancel</span>
            </div>
        )
    }
}

export default DeleteCancel