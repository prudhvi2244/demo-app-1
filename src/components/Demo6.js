import React, { Component } from 'react'

export class Demo6 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false,
             username:'Prudhvi'
        }
    }
    
    render() {
        let {isLoggedIn,username}=this.state
        let msg=''
        if(isLoggedIn)
        {
            msg=`Welcome ,${username}`
        }
        else
        {
            msg=`Please Login`
        }
        return <h5>{msg}</h5>;
        
    }
}

export default Demo6
