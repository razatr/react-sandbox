import React, { Component } from 'react'
import Settings from './Settings'
import Matrix from './Matrix'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Settings />
                <Matrix />
            </React.Fragment>
        )
    }
}

export default App