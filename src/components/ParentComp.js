import React, { Component, PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComp extends React.PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Raj'
        }
    }
    
    componentDidMount()
    {
        setInterval(()=>{
                this.setState({name:"Rajeev"})
        },4000)
    }

    render() {
        console.log('............... Parent Cmponent ...............')
        return (
            <div>
                <h4>Parent Component</h4>
                <hr/>
                <PureComp name={this.state.name}/>
                <RegComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
