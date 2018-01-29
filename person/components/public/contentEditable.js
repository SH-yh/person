import React, {Component} from 'react';

const connectEditable = (WrappedComponent) => {
    return class  extends Component {
        constructor(props){
            super(props);
            this.handleEditable = this.handleEditable.bind(this);
        }
        handleEditable(e){
            const target = e.target;
            target.contentEditable = true;
            if(window.getSelection) {
                const range = window.getSelection();
                range.collapseToEnd();
            }else if(document.selection){
                const range = document.selection.createRange();
                range.collapse(false);
            }
        }
        render(){
            return <WrappedComponent  handleDoubleClick = {this.handleEditable} {...this.props} />;
        }
    }
};

export default connectEditable;