import React, { Fragment } from 'react'

function Circle({radius, color}) {
    const style = {
        width: 2*radius,
        height: 2*radius,
        borderRadius: '50%',
        backgroundColor: color
    }
    return (
        <Fragment>
            <div style={style}></div>
        </Fragment>
    )
}

export default Circle;
