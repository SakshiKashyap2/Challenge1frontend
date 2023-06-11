import React, { useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:5000';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleTitleChange(event) {
    console.log(event.target.value);
    setTitle(event.target.value);
  }
  function handleContentChange(event) {
    console.log(event.target.value);
    setContent(event.target.value);
  }

  function handleClick(event) {
    // event.preventDefault();
    console.log({ title: title, content: content });

    const postData = {
      title: title,
      content: content,
    };

    axios
      .post(`${url}/Notes`, postData)

      .then((response) => {
        alert('Data Submitted!');
        console.log(response);
        setTitle('');
        setContent('');
      })
      .catch((err) => {
        alert('Error');
        console.log(err);
      });
  }

  return (
    <div className="container">
      <h1>Hello </h1>
      <form>
        <input
          onChange={handleTitleChange}
          type="text"
          placeholder="Enter Title "
          value={title}
        />
        <input
          onChange={handleContentChange}
          type="text"
          placeholder="Enter Content "
          value={content}
        />
        <button type="submit" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default CreatePost;
