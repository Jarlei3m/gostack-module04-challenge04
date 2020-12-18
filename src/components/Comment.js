import React from 'react';

function Comment({ data }) {
  return(
    <div className="reply">
      <img src={data.author.avatar} alt=""/>
      <div className="topic-answer">
        <p><strong>{data.author.name}</strong> {data.content}</p>
      </div>
    </div>
  )
}

export default Comment;