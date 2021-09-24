import React from 'react'
import { Alert } from 'react-bootstrap'
const Message = ({variant, children}) => {
    return
    <Alet variant={variant}>
        {children}
    </Alet>
}

Message.defaultProps = {
    variant: 'info'
}

export default Message

