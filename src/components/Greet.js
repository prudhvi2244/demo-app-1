import React from 'react'

export function Greet(props) {
    return (
        <div>
           <h2 className="text-white">Welcome To Function Component With BootStrap</h2>
           <table className='table table-bordered table-hover'>
               <thead>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Employee City</th>
                </tr>
               </thead>
               <tbody>
                   <tr>
                       <td>{props.eid}</td>
                       <td>{props.ename}</td>
                       <td>{props.ecity}</td>
                   </tr>
               </tbody>
               </table> 
        </div>
    )
}

export default Greet
