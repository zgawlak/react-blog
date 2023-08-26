import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [posts, setPosts] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/posts")
                .then(res => {
                    if(!res.ok) {
                        throw Error('Could not fetch data');
                    }
                    return res.json();
                })
                .then(data => {
                    setPosts(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {posts && <Bloglist posts={posts} title="All posts!" />}
        </div>
    );
}

export default Home;