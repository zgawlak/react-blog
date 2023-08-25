import { useState } from 'react';

const Home = () => {
    const [posts, setPosts] = useState([
        { title: 'Welcome to BingBlog', body: 'bingus here..', author: 'bingus', id: 1 },
        { title: 'hello bings', body: 'welcome to my twisted ankle', author: 'floppa', id: 2},
        { title: 'seize the flops', body: 'end them', author: 'bulgus', id: 3 }
    ]);

    return (
        <div className="home">
            { posts.map((post) => (
               <div className="post-preview" key={ post.id }>
                <h2>{ post.title} </h2>
                <p>posted by { post.author }</p>
               </div> 
            ))}
        </div>
    );
}

export default Home;