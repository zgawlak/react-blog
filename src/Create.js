import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Bingus');

    return (
        <div className="create">
            <h2>Add a new post</h2>
            <form>
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
                <button>Add post</button>
            </form>
        </div>
    );
}

export default Create;