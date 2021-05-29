import React, { Component } from "react";

export class Demo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
        title:'Welcome To Capgemini',
        msg:'Welcome Guest',
        btnmsg:'Subscribe'
    };
  }

  subscribe()
  {
    this.setState(
        {
            msg:'Thank you for subscribing!',
            btnmsg:'Home'
        })
  }

  render() {
    return (
      <div>
        <h2 className="m-2">{this.state.title}</h2>
        <hr/>
        <h4 className='text-primary'>{this.state.msg}</h4>
        <button onClick={()=>this.subscribe()} className='btn m-2 btn-success'>{this.state.btnmsg}</button>
      </div>
    );
  }
}

export default Demo1;
