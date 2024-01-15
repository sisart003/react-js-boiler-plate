const Post = ({author, body}) => {
    return (
        <li>
            <h1>{author}</h1>
            <p>{body}</p>
        </li>
    )
}

export default Post