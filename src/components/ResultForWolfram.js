import React, { Component } from 'react'
import { connect } from 'react-redux'

class ResultForWolfram extends Component {

    render() {
        const { columns } = this.props
        const body = this.props.values.map((item, index) => {
            if(columns === '1')
                return ('{' + item + '}')
            if ((index + 1) % columns === 0)
                return (item + '}')
            if ((index + 1) % columns === 1)
                return ('{' + item)
            return item
        })
        if(!body[0])
            return 'Пока матрицы нет'

        body[0] = '{' + body[0]
        body[body.length - 1] += '}'

        return body.join(',')
    }
}

export default connect((state) => ({
    values: state.matrix.get('values').toArray(),
    columns: state.matrix.getIn(['size', 'columns'])
}))(ResultForWolfram)