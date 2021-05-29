import React, { Component } from 'react'

export class Welcome extends Component {
    constructor(props) {
        super(props)
    
       
    }
    
    render() {
        return (
            <div>
                <h2>Welcome ,{this.props.name},Your City : {this.props.city}</h2>  
            </div>
        )
    }
}

export default Welcome
