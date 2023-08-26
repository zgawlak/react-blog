import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8000/posts")
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setPosts(data);
            })
    }, []);

    return (
        <div className="home">
            {posts && <Bloglist posts={posts} title="All posts!" />}
        </div>
    );
}

export default Home;