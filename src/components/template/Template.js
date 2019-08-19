import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import cookies from 'js-cookie';

import Notification from 'components/notification'
import CustomButton from 'common/custom-button'
import * as CONSTANT from 'constant';

class Template extends Component {
  renderNavigation = () => {
    const token = cookies.get('token')

    if(token) {
      return (
        <StyledNavWrapper>
          <CustomButton
            text='Add company'
            clickHandler={this.props.openModal}
          />
          <StyledNavLink
            to="/logout"
          >
            Logout
          </StyledNavLink>
        </StyledNavWrapper>
      );
    }

    return (
      <StyledNavWrapper />
    )
  }

  render() {
    const { children } = this.props;
    return (
      <StyledContainer>
        {this.renderNavigation()}

        <StyledContentWrapper>
          {children}
        </StyledContentWrapper>

        <Notification />
      </StyledContainer>
    )
  }
}

Template.propTypes = {
  openModal: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: () => dispatch({ type: CONSTANT.OPENED_MODAL, payload: 'AddCompanyModal' }),
  }
}

const StyledNavWrapper = styled.div`
  padding: 1.5rem;
  min-height: 35px;
  background: #eee;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
`

const StyledContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`

const StyledContentWrapper = styled.div`
  background: #eee;
  padding: 2rem;
  text-align: center;
`

const StyledNavLink = styled(Link)`
  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-weight: 600;
  padding: 0.4375rem 1rem;
  background-color: #ea7835;
  border-color: #d26b2f;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:hover {
    background-color: #eb7f40;
    border-color: #d37239;
  }
  &:active {
    background-color: #d86f31;
    border-color: #c1632c;
  }
`

export default connect(null, mapDispatchToProps)(Template)
