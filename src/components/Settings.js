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

    getAction(value, type){
        switch (type) {
            case 'columns':
                return changeColumnsNumber(value)

            case 'strings':
                return changeStringsNumber(value)

            default:
                return
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
        if ( value * 0 !== 0 && value !== '') //checking the value for an integer
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
            this.props.dispatch(this.getAction(value, type))
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
