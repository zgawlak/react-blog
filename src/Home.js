import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [posts, setPosts] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/posts")
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setPosts(data);
                    setIsPending(false);
                });
        }, 1000);
    }, []);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {posts && <Bloglist posts={posts} title="All posts!" />}
        </div>
    );
}

export default Home;