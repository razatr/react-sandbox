import React, { Component } from 'react'
import Settings from './Settings'
import Matrix from './Matrix'
import ResultForWolfram from './ResultForWolfram'
import { withTranslation } from "react-i18next"
import i18n from '../localization/i18n'

class App extends Component {

    changeLanguage(lng){
        i18n.changeLanguage(lng)
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={() => this.changeLanguage('ru')}>ru</button>
                <button onClick={() => this.changeLanguage('en')}>en</button>
                <Settings />
                <Matrix />
                <ResultForWolfram />
            </React.Fragment>
        )
    }
}

export default withTranslation()(App)