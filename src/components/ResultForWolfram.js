import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withTranslation } from "react-i18next"

class ResultForWolfram extends Component {

    render() {
        const {t} = this.props
        const { columns } = this.props
        const body = this.props.values.map((item, index) => {
            if (columns === '1')
                return ('{' + item + '}')
            if ((index + 1) % columns === 0)
                return (item + '}')
            if ((index + 1) % columns === 1)
                return ('{' + item)
            return item
        })
        if (!body[0])
            return t("No matrix yet")

        body[0] = '{' + body[0]
        body[body.length - 1] += '}'

        return (
            <React.Fragment>
                <span>{t("Result for WolframAlpha")}:</span><br/>
                {body.join(',')}
            </React.Fragment>)
    }
}

export default withTranslation()(connect((state) => ({
    values: state.matrix.get('values').toArray(),
    columns: state.matrix.getIn(['size', 'columns'])
}))(ResultForWolfram))