const NewPost = (props) => {
  
  return (
    <form>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={props.onBodyChange}></textarea>
        </p>
        <p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required onChange={props.onAuthorChange} />
        </p>
    </form>
  )
}

export default NewPost