import React, { Component } from "react";

export class Demo7 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      username: "Prudhvi",
    };
  }

  render() {
    let { isLoggedIn, username } = this.state;
    return isLoggedIn ? (
      <h5>Welcome,{username}</h5>
    ) : (
      <h5 className="text-danger">Please Login</h5>
    );
  }
}

export default Demo7;
