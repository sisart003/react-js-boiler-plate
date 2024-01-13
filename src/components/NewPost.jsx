const NewPost = () => {
  return (
    <form>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3}></textarea>
        </p>
        <p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
        </p>
    </form>
  )
}

export default NewPost