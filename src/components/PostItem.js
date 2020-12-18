import React from 'react';

import Comment from './Comment';

function PostItem({ data })  {
    return (
      <div className="container">
        <div className="topic">
          <div className="topic-head">
            <img src={data.author.avatar} alt={data.author.name}/>
           <div className="info">
              <h3 className="name">{data.author.name}</h3>
              <small className="date">{data.date}</small>
            </div>
          </div>

          <p className="question">{data.content}</p>
        </div>

        {data.comments.map( comment => < Comment key={comment.id}  data={comment} />)}

      </div>
    )
}

export default PostItem;