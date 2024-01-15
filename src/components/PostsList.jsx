import {useState} from 'react';

import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';

const PostsList = ({isPosting, onStopPosting}) => {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData){
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>  
        {isPosting && (
          <Modal onClose={onStopPosting}>
            <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
          </Modal>
        )}
        {posts.length > 0 && (
          <ul>
            {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
          </ul>
        )}
        {posts.length === 0 && (
          <div styles={{ textAlign: 'center', color: 'white'}}>
            <h2>There are no post yet!</h2>
            <p>post first!</p>
          </div>
        )}
        
    </>
   
  )
}

export default PostsList