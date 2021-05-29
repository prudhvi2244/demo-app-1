import React, { useState, useEffect } from "react";
import axios from "axios";

function Demo11() {
  let [posts, setPosts] = useState({});
  let [id, setId] = useState(1);
  let [idFromBtnClick, setIdFromBtnClick] = useState(1);

  let url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => console.log(error));
  }, [idFromBtnClick]);

  function handleClick() {
    setIdFromBtnClick(id);
  }
  if (idFromBtnClick >= 1) {
    return <div>
      <label>ID</label>
      <input
        onChange={(e) => setId(e.target.value)}
        value={id}
        className="form-control"
      />
      <button onClick={handleClick} className="btn btn-success mt-3">
        Submit
      </button>
      <br />
      <ul className="list-group mt-2">
        <li className="list-group-item">TITLE : {posts.title}</li>
        <li className="list-group-item">BODY : {posts.body}</li>
      </ul>
    </div>;
  } 
  else
   {
    return (
      <div>
      <label>ID</label>
      <input   onChange={(e) => setId(e.target.value)}   value={id}  className="form-control"
      />
      <button onClick={handleClick} className="btn btn-success mt-3">
        Submit
      </button>
    
    <h5 className="text-danger mt-2">No Posts</h5>
    </div>
    )
  }
}

export default Demo11;
