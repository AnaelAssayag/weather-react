import React, { Component } from 'react';

class CommentForm extends Component {
    constructor(props) {
        super (props)
        this.state = {
            username:"", text:""
        }
    }
    addComment = (event)=>{
       event.preventDefault();
       this.props.addComment(this.props.id, this.state)
    }
    
    render(props) {
        return (
               <form action="#" id="getCommentForm" onSubmit={this.addComment}>
                    <div className="input-group">
                    <input type="text" 
                           className="form-Control" 
                           id="Author" 
                           placeholder="userName"
                           value={this.state.username}
                           onChange={(event) => this.setState({username: event.target.value})}>
                    </input>
                    <input type="text" 
                           className="form-control" 
                           id="comment"
                           placeholder="Comment"
                           required 
                           value={this.state.text} 
                           onChange={(event) => this.setState({text: event.target.value}, ()=>{console.log(this.state)})}>
                           </input>
                           <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Comment</button>
                    </span>
                    </div>
               </form>
        );
    }
}

export default CommentForm;