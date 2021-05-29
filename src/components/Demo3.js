import React from 'react'

function Demo3(props) {

    let {cid,cname,ccity,cemail}=props

    return (
        <div>
            <h2 className='text-danger m-2'>Functional Component</h2>
            <h5 className='alert alert-danger'>Customer ID :{cid}</h5>
            <h5 className='alert alert-info'>Customer Name :{cname}</h5>
            <h5 className='alert alert-primary'>Customer City :{ccity}</h5>
            <h5 className='alert alert-success'>Customer Email :{cemail}</h5>
        </div>
    )
}

export default Demo3
