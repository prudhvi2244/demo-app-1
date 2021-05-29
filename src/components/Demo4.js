import React, { Component } from "react";

export class Demo4 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sid:1,
             sname:'Rajeev',
             scity:'Goa'
        }
    }
    
  render() {
    let { cid, cname, ccity, cemail } = this.props;
    let {sid,sname,scity}=this.state
    return (
      <div>
        <h3 className="text-info">Class Component</h3>
        <h5 className="alert alert-secondary">Customer ID :{cid}</h5>
        <h5 className="alert alert-secondary">
          Customer Name :{cname}
        </h5>
        <h5 className="alert alert-secondary">
          Customer City :{ccity}
        </h5>
        <h5 className="alert alert-secondary">
          Customer Mail :{cemail}
        </h5>
        <hr/>
        <h4>Student Information</h4>
        <h5>Student ID : {sid}</h5>
        <h5>Student Name : {sname}</h5>
        <h5>Student City : {scity}</h5>
      </div>
    );
  }
}

export default Demo4;
