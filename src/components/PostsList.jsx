import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

const PostsList = () => {
  const [modalIsVisible, setModalIsVisible] = useState(true); 
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  function hideModalHandler() {
    setModalIsVisible(false);
  }

  function bodyChangeHandler(event){
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event){
    setEnteredAuthor(event.target.value);
  }

  // let modalContent;

  // if(modalIsVisible){
  //     modalContent = (
  //       <Modal onClose={hideModalHandler}>
  //         <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
  //       </Modal>
  //     )
  // }

  return (
    <>  
        {modalIsVisible && (
          <Modal onClose={hideModalHandler}>
            <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
          </Modal>
        )}
        <ul>
            <Post author={enteredAuthor} body={enteredBody} />
        </ul>
    </>
   
  )
}

export default PostsList