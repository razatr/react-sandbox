import React, { Component } from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import i18n from '../localization/i18n'

class Root extends Component {
    render() {
        return (
            <I18nextProvider i18n={i18n}>
                <Provider store={this.props.store}>
                    <App />
                </Provider>
            </I18nextProvider>)
    }
}

export default Root