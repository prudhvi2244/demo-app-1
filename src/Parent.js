import React  from 'react'
import PureComp from './components/PureComp'
import RegComp from './RegComp'

export class Parent extends React.PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Raj'
        }
    }
    
    componentDidMount()
    {
        setInterval(()=>{this.setState({name:'Rajeev'})},3000)
    }
    render() {
        console.log('..............Parent Class Component...........')
        return (
            <div>
                <h4>Parent Component</h4>
                <hr/>
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
            </div>
        )
    }
}

export default Parent
