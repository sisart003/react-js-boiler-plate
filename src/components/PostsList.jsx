import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';

const PostsList = () => {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function bodyChangeHandler(event){
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event){
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
        <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
        <ul>
            <Post author={enteredAuthor} body={enteredBody} />
        </ul>
    </>
   
  )
}

export default PostsList