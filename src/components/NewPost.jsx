import { useState } from 'react';

const NewPost = () => {
  const [enteredBody, setEnteredBody] = useState('');

  function changeBodyHandler(event){
    setEnteredBody(event.target.value);
  }

  return (
    <form>
        <p>
            <label htmlFor="body">Text</label>
            <textarea id="body" required rows={3} onChange={changeBodyHandler}></textarea>
        </p>
        <p>{enteredBody}</p>
        <p>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
        </p>
    </form>
  )
}

export default NewPost