import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';
import useFetch from './usefetch';

const Home = () => {
    const { data: posts, isPending, error } = useFetch("http://localhost:8000/posts");

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {posts && <Bloglist posts={posts} title="All posts!" />}
        </div>
    );
}

export default Home;