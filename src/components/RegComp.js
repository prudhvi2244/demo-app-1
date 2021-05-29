import React, { Component } from 'react'

export class RegComp extends Component {
    render() {
        console.log('..Regular Component..')
        return (
            <div>
               <h5>Regular Component : {this.props.name}</h5> 
            </div>
        )
    }
}

export default RegComp
