import React, { Component } from 'react'

export class Demo2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             eid:1,
             ename:'Prudhvi',
             emobiles:[89898983,14441414],
             issenior:true,
             esalary:67000.63636,
             eaddress:{
                 dno:'7/G',
                 street:'Brindavan Colony',
                 city:'Hyderabad'
             }
        }
    }
    
    
    render() {
        return (
            <div>
                <h2>Employee Information</h2>
                <ul className='list-group'>
                    <li className='list-group-item list-group-item-success'>Employee ID:{this.state.eid}</li>
                    <li className='list-group-item list-group-item-success'>Employee Name:{this.state.ename}</li>
                    <li className='list-group-item list-group-item-success'>Employee City:{this.state.eaddress.city}</li>
                    <li className='list-group-item list-group-item-success'>Employee Mobile No:{this.state.emobiles[0]}</li>
                 </ul>
            </div>
        )
    }
}

export default Demo2
