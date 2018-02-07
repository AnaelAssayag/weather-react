import React from 'react';
import CommentBox from './CommentBox'

const CommentsListBox = (props) => {
  const comments = props
    .comments
    .map((item, index) => {
console.log(item)

      return(
    <CommentBox
      key={index}
      text={item.text}
      username={item.username}/>
      )
    }
    )

  return (
    <div>
      {comments}
    </div>

  );
};

export default CommentsListBox;
