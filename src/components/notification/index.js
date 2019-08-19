import React, { Component } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Notification.css'

class Notification extends Component {
  render () {
    const notificationContainerStyles = {
      width: 'fit-content',
      overflowWrap: 'break-word',
      maxWidth: '44%',
      wordWrap: 'break-word',
      fontFamily: '"weld-light", sans-serif'
    }
    return (
      <ToastContainer style={notificationContainerStyles} />
    )
  }
}

export default Notification
