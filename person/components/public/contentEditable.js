import React, {Component} from 'react';

const connectEditable = (WrappedComponent) => {
    return class  extends Component {
        constructor(props){
            super(props);
            this.handleEditable = this.handleEditable.bind(this);
            this.onBlur = this.onBlur.bind(this);
        }
        handleBlur(){
            console.log(1);
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
            return <WrappedComponent onBlur = {this.handleBlur}  handleDoubleClick = {this.handleEditable} {...this.props} />;
        }
    }
};

export default connectEditable;