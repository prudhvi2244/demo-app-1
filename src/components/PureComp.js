import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log('.. Pure Component ..')
        return (
            <div>
                <h5>Pure Component :{this.props.name}</h5>
            </div>
        )
    }
}

export default PureComp
