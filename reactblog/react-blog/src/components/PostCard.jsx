function PostCard({ post }) {
  return (
    <article className="post-card">
      <span className="category">{post.category}</span>

      <h2>{post.title}</h2>

      <p>{post.description}</p>

      <button>Read More</button>
    </article>
  );
}

export default PostCard;