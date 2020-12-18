import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://source.unsplash.com/random"
        },
        date: "17 dez 2020",
        content: "Pessoal, alguém sabe se a Rockeseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://source.unsplash.com/random"
            },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nisi magnam harum. Voluptatibus voluptatum hic beatae quis consectetur iste rerum non eius, quae officiis sed corporis ab. Eius dolorem beatae, aliquid voluptatem laborum neque dolore corrupti mollitia totam ex fuga pariatur explicabo commodi similique error quam vitae reprehenderit? Enim, culpa."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://source.unsplash.com/random"
        },
        date: "14 dez 2020",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://source.unsplash.com/random"
            },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem cumque voluptate laboriosam. Eius, nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, natus corporis at, hic vel id corrupti amet, architecto magnam deleniti culpa velit nihil debitis est dicta iste fuga quidem. Voluptatibus."
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: "https://source.unsplash.com/random"
            },
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, natus corporis at, hic vel id corrupti amet, architecto magnam deleniti culpa velit nihil debitis est dicta iste fuga quidem. Voluptatibus."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Gabriel Lisboa",
          avatar: "https://source.unsplash.com/random"
        },
        date: "14 dez 2020",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: "https://source.unsplash.com/random"
            },
            content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, natus corporis at, hic vel id corrupti amet, architecto magnam deleniti culpa velit nihil debitis est dicta iste fuga quidem. Voluptatibus."
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: "https://source.unsplash.com/random"
            },
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem cumque voluptate laboriosam. Eius, nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, natus corporis at, hic vel id corrupti amet, architecto magnam deleniti culpa velit nihil debitis est dicta iste fuga quidem. Voluptatibus."
          }
        ]
      }

    ]
  };
  
  render() {
    const { posts } = this.state;

    return (
      <>
        {posts.map(post => <PostItem key={post.id} data={post} />)}        
      </>
    );
  }
}

export default PostList;