import { Link } from "react-router-dom";

const linkStyle = {
    textDecoration: "none"
}

const Bloglist = ({ posts, title, handleDelete }) => {
    return (
        <div className="post-list">
            <h2>{title}</h2>
            {posts.map((post) => (
                <div className="post-preview" key={post.id}>
                    <Link to={`/posts/${post.id}`} style={linkStyle}>
                        <h2>{post.title}</h2>
                        <p>posted by {post.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Bloglist;