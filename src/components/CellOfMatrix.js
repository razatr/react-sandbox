import React, { Component } from 'react'
import { WIDTH_OF_CELL, HEIGHT_OF_CELL } from '../constants'
import {connect} from 'react-redux'
import {setSellValue} from '../AC'

class Cell extends Component {
    constructor(props){
        super(props)
        this.position = props.position
        this.dispatch = props.dispatch
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({target: {value}}){
        console.log('VALUE AND POSITION - ',value,' - ', this.position)
        this.dispatch(setSellValue(value, this.position))
    }

    render() {

        const style = { 
            width: WIDTH_OF_CELL, 
            height: HEIGHT_OF_CELL,
            marginRight: '5px',
            marginBottom: '5px'
        };

        const { position } = this.props;

        const value = this.props.value.get(position)
        console.log('VALUE - ', value)

        return (
            <input style={style} type="text" onChange={this.handleChange} />
        )
    }
}

export default connect((state) => ({
    value: state.matrix.get('values')
}))(Cell)
