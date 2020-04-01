import React, { Component } from 'react'
import {connect} from 'react-redux'
import {changeColumnsNumber, changeStringsNumber} from '../AC'

class Settings extends Component {

    handleChangeColunmn = ({target: {value}}) => {
        this.props.dispatch(changeColumnsNumber(value))
    }

    handleChangeStrings = ({target: {value}}) => {
        this.props.dispatch(changeStringsNumber(value))
    }

    render(){
        return(
        <React.Fragment>
            <input type="text" onChange = {this.handleChangeColunmn}/>
            <input type="text" onChange = {this.handleChangeStrings}/>
        </React.Fragment>
        )
    }
}

export default connect()(Settings)
