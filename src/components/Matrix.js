import React, { Component } from 'react'
import { connect } from 'react-redux'
import CellOfMatrix from './CellOfMatrix'
import { WIDTH_OF_CELL, HEIGHT_OF_CELL } from '../constants'

class Matrix extends Component {

    render() {
        const { columns, strings } = this.props

        const containerStyle = {
            width: (WIDTH_OF_CELL + 9) * columns,
            height: columns && (HEIGHT_OF_CELL + 11) * strings,
            lineHeight: 0,
            paddingLeft: '50px'
        }

        const body = new Array(parseInt(columns) * parseInt(strings))
            .fill(0)
            .map((item, index) => {
                if ((index + 1) % columns === 0)
                    return (<CellOfMatrix position={index} key={index}/>)
                return (<CellOfMatrix position={index} key={index}/>)
            })
        return (<React.Fragment>
            <div style={containerStyle}>
                {body}
            </div>
        </React.Fragment>)
    }
}

export default connect((state) => ({
    columns: state.matrix.getIn(['size', 'columns']),
    strings: state.matrix.getIn(['size', 'strings'])
}))(Matrix)
