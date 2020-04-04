import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WIDTH_OF_CELL, HEIGHT_OF_CELL, MAX_SIZE } from '../constants'
import { changeColumnsNumber, changeStringsNumber } from '../AC'
import { withTranslation } from "react-i18next"

class Settings extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: false
        }
    }

    errorText(type) {
        const { t } = this.props

        switch (type) {
            case 'over':
                return (t("This matrix is very large") + MAX_SIZE)
            case 'notInt':
                return (t("Number is not Int"))
            default:
                return (t("Unknown error"))
        }

    }

    handleChange = (value, type) => {
        if (isNaN(parseInt(value)) && value !== '')
            this.setState({
                error: {
                    type: 'notInt'
                }
            })
        else if (parseInt(value) > MAX_SIZE)
            this.setState({
                error: {
                    type: 'over'
                }
            })
        else {
            let action = {}
            switch (type) {
                case 'columns':
                    action = changeColumnsNumber(value)
                    break

                case 'strings':
                    action = changeStringsNumber(value)
                    break

                default:
                    return
            }
            this.props.dispatch(action)
            this.setState({
                error: false
            })
        }
    }

    render() {

        const { t } = this.props

        const errorStyle = {
            fontSize: '10px',
            color: 'red'
        }
        const style = {
            width: WIDTH_OF_CELL,
            height: HEIGHT_OF_CELL,
            marginLeft: '5px',
            marginBottom: '10px'
        }

        const errorText = this.state.error ? (t('Error') + ': ' + this.errorText(this.state.error.type)) : ''

        return (
            <React.Fragment>
                <div style={{ lineHeight: 0 }}>
                    <span>{t('Input size')}</span>
                    <input type="text" style={style} onChange={({ target: { value } }) => this.handleChange(value, 'columns')} />
                    <input type="text" style={style} onChange={({ target: { value } }) => this.handleChange(value, 'strings')} />
                    <span style={errorStyle}>{errorText}</span>
                </div>
            </React.Fragment>
        )
    }
}

export default withTranslation()(connect()(Settings))
