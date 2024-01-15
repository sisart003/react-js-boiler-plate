import { useState } from 'react';

const NewPost = ({onCancel, onAddPost}) => {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event){
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event){
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    };
    onAddPost(postData);
    onCancel(); 
  }

  return (
    <form onSubmit={submitHandler}>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={bodyChangeHandler}></textarea>
        </p>
        <p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required onChange={authorChangeHandler} />
        </p>
        <p>
          <button type='button' onClick={onCancel}>Cancel</button>
          <button>Submit</button>
        </p>
    </form>
  )
}

export default NewPost