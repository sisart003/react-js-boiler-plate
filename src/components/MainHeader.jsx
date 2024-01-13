
const MainHeader = ({onCreatePost}) => {
  return (
    <header>
        <h1>
            React Poster
        </h1>
        <p>
            <button onClick={onCreatePost}>New Post</button>
        </p>
    </header>
  )
}

export default MainHeader