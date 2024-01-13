import Post from './Post';
import NewPost from './NewPost';

const PostsList = () => {
  return (
    <>
        <NewPost />
        <ul>
            <Post author="Chris" body="React js mediocre" />
            <Post author="Hart" body="Next js mediocre" />
        </ul>
    </>
   
  )
}

export default PostsList