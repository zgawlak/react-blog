import { useState } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [posts, setPosts] = useState([
        { title: 'Welcome to BingBlog', body: 'bingus here..', author: 'bingus', id: 1 },
        { title: 'hello bings', body: 'welcome to my twisted ankle', author: 'floppa', id: 2 },
        { title: 'seize the flops', body: 'end them', author: 'bulgus', id: 3 }
    ]);

    return (
        <div className="home">
            <Bloglist posts={posts} title="All posts!" />
            <Bloglist posts={posts.filter((post) => post.author === 'bingus')} title="Bingus's posts" />
        </div>
    );
}

export default Home;