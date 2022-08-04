import { PostCard } from '../PostCard';
export const Posts = ({ posts }) => (

  <div className="posts">
    {posts.map(post => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        id={post.id}
        cover={post.cover} />
    ))
      // posts.map(post => <h1 key={post.id}>{post.title}</h1>)
    }
  </div>
);