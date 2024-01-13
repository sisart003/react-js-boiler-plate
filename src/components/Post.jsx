const Post = (props) => {
    return (
        <li className="borderito">
            <h1>{props.author}</h1>
            <p>{props.body}</p>
        </li>
    )
}

export default Post