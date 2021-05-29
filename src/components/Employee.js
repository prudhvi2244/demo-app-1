import React from 'react'

function Employee({ename}) {
    if(ename==='AAA')
    {
        throw new Error('Not an Valid Nme')
    }
    return (
        
        <div>
            <h5>Employee Name : {ename}</h5>
        </div>
    )
}

export default Employee
