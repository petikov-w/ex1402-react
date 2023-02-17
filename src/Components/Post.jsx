export function Post(props) {
    const { id, key, name, removePost } = props;
    return (
        <h2>
            {name} <button onClick={() => removePost(id)}>delete</button>
        </h2>
    );
}