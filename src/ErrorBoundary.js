import React, { Component } from "react";

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    return this.state.hasError?<h5 className='alert alert-danger'>Something Is Wrong!</h5>:this.props.children
  }
}

export default ErrorBoundary;
