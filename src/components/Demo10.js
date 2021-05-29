import React, { Component } from 'react'

export class Demo10 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             msg:'I L T'
        }
    }

    handleMessage()
    {
        this.setState({msg:`Message Sent Succesfully at ${new Date()}`})
        alert('Phone Memory Full,Download Free Software ,Phone Clean Up')
    }
    
    render() {
        return (
            <div>
                <h4>{this.state.msg}</h4>
                <button className='btn btn-primary' onClick={()=>this.handleMessage()}>Send Message</button>
            </div>
        )
    }
}

export default Demo10
