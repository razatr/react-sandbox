import React, { Component } from 'react'
import Settings from './Settings'
import Matrix from './Matrix'
import ResultForWolfram from './ResultForWolfram'

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Settings />
                <Matrix />
                <ResultForWolfram />
            </React.Fragment>
        )
    }
}

export default App