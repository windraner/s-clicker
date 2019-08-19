import React, { Component } from 'react'
import styled from 'styled-components'
import CustomButton from 'common/custom-button'
import CustomInput from 'common/custom-input'
import { connect } from 'react-redux'
import { stopCompanyAttempt } from 'actions'
import * as CONSTANT from 'constant'
import PropTypes from 'prop-types'

class AddCompanyModal extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden'
  }

  componentWillUnmount () {
    document.body.style.overflow = 'unset'
  }

  companyStopHandler = () => {
    const { openedModalItem, stopCompanyAttempt } = this.props
    stopCompanyAttempt(openedModalItem)
  }

  render() {
    return (
      <StyledModalWrapper>
        <StyledModalTitle>Create New company</StyledModalTitle>
        <CustomInput
          title='Company name'
          type='text'
          value={'qwe'}
          setValue={() => {}}
        />
        <CustomButton
          text="Stop"
          clickHandler={this.companyStopHandler}
        />
      </StyledModalWrapper>
    )
  }
}

AddCompanyModal.propTypes = {
  openedModalItem: PropTypes.string,
  stopCompanyAttempt: PropTypes.func.isRequired,
}

const StyledModalWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  max-width: 425px;
  padding: 2rem 1rem;
  z-index: 10;
`

const StyledModalTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  align-self: center;
`

const mapStateToProps = (state) => {
  const openedModalItem = state[CONSTANT.OPENED_MODAL_ITEM];

  return (
    { openedModalItem }
  )
}

const mapDispatchToProps = {
  stopCompanyAttempt
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCompanyModal)
