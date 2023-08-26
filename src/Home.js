import { useState } from 'react';
import Bloglist from './Bloglist';

const Home = () => {
    const [posts, setPosts] = useState([
        { title: 'Welcome to BingBlog', body: 'bingus here..', author: 'bingus', id: 1 },
        { title: 'hello bings', body: 'welcome to my twisted ankle', author: 'floppa', id: 2 },
        { title: 'seize the flops', body: 'end them', author: 'bulgus', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newPosts = posts.filter(post => post.id !== id);
        setPosts(newPosts);
    }

    return (
        <div className="home">
            <Bloglist posts={posts} title="All posts!" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;