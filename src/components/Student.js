import React from "react";

function Student({ sname }) {
    if(sname==='Raj')
    {
        throw new Error('Invalid Name!')
    }
  return (
    <div>
        <h3>Student Name :{sname}</h3>
        <hr/>
    </div>
  );
}

export default Student;
