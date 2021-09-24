import React from 'react'
import { spinner } from 'react-bootstrap'

const Loader = () => {

    return (
        <spinner
            animation='border'
            role='satus'
            style={{
                width: '100px',
                height: '100px',
                margin: 'auto',
                display: 'block',
            }}
        >
            <spanm class='sr-only'>Loading...</spanm>
        </spinner>
    )
}

export default Loader