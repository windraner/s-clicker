import React, { Component } from 'react'
import CustomInput from 'common/custom-input'
import CustomButton from 'common/custom-button'
import { connect } from 'react-redux'
import { sendLoginAttempt } from 'actions'
import PropTypes from 'prop-types'

class LoginPage extends Component {
  state = {
    username: '',
    password: ''
  }

  loginHandler = () => {
    const { username, password } = this.state
    const { sendLoginAttempt } = this.props
    const data = {
      username,
      password
    }

    sendLoginAttempt(data)
  }

  render() {
    const { username, password } = this.state

    return (
      <div>
        <CustomInput
          title="email"
          value={username}
          type="email"
          setValue={(value) => this.setState({ username: value})}
        />
        <CustomInput
          title="password"
          value={password}
          type="password"
          setValue={(value) => this.setState({ password: value})}
        />

        <CustomButton
          text="Log In"
          clickHandler={this.loginHandler}
        />
      </div>
    )
  }
}

LoginPage.propTypes = {
  sendLoginAttempt: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendLoginAttempt: (data) => dispatch(sendLoginAttempt(data)),
  }
}

export default connect(null, mapDispatchToProps)(LoginPage)
