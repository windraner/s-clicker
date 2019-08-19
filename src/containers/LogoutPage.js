import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import cookies from 'js-cookie'
import createNotification from 'utils/createNotification'

export default class LogoutPage extends Component {
  componentDidMount() {
    cookies.remove('token')
    createNotification('Successful logout', 'success')
  }

  render() {
    return (<Redirect to="/login" />)
  }
}
