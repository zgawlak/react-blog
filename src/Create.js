import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Bingus');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {title, body, author};

        setIsPending(true);

        fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(post)
        }).then(()=> {
            console.log('new post added');
            setIsPending(false);
            history.push('/');
        })
    }

    return (
        <div className="create">
            <h2>Add a new post</h2>
            <form onSubmit={handleSubmit}>
                <label>Post title</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Post body</label>
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                ></textarea>
                <label>Post author</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Bingus">Bingus</option>
                    <option value="Big Floppa">Big Floppa</option>
                </select>
                {!isPending && <button>Add post</button> }
                {isPending && <button disabled>Posting...</button>}
            </form>
        </div>
    );
}

export default Create;