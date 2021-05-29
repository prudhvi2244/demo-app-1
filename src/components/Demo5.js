import React, { Component } from "react";

export class Demo5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Raj",
      isLoggedIn: false,
    };
  }

  render() {
    let { username, isLoggedIn } = this.state;
    if (isLoggedIn) {
      return <h3 className='text-success'>Welcome ,{username}</h3>;
    } else {
      return <h3 className='text-danger'>Please Login!</h3>;
    }
  }
}

export default Demo5;
