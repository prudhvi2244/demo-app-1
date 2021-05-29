import React, { Component } from 'react'

export class Demo9 extends Component {
    render() {
        let colors=['Red','Green','Blue','Yello']
        let employees=[
            {eid:1,ename:'Prudhvi',ecity:'Goa'},
            {eid:2,ename:'Prudhvi',ecity:'Goa'},
            {eid:3,ename:'Prudhvi',ecity:'Goa'}
        ]
        return (
            <div>
                <h4>Displaying Colors</h4>
                <ul className='list-group'>
                    {
                      colors.map(color=>
                        (
                            <li className='list-group-item list-group-item-danger'>{color}</li>
                      ))  
                    }
                </ul>
                <hr/>
                <h4>Employees Information</h4>
                <table className='table table-bordered table-hover'>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Employee City</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          employees.map(employee=>(
                              <tr>
                                  <td>{employee.eid}</td>
                                  <td>{employee.ename}</td>
                                  <td>{employee.ecity}</td>
                              </tr>
                          ))
                      }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Demo9
