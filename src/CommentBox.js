import React, { Component } from 'react';

class CommentBox extends Component {
    render() {
        return (
           <div>
               written by {this.props.username} - {this.props.text}

          </div>
        )
      }
}

export default CommentBox;
