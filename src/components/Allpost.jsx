import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'http://localhost:5000';

function AllPost() {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}/GetAllPost`)
      .then((response) => {
        // console.log(response.data);
        setDataArray(response.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>AllPost</h1>
      {dataArray.map((element, index) => {
        return (
          <div key={index}>
            <h3>Title: {element.title}</h3>
            <h5>Content: {element.content}</h5>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
export default AllPost;
