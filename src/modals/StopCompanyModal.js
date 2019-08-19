import React, { Component } from 'react'
import styled from 'styled-components'
import CustomButton from 'common/custom-button'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { stopCompanyAttempt } from 'actions'
import * as CONSTANT from 'constant'

class StopCompanyModal extends Component {
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
        <StyledModalTitle>The S-clicker will complete the process</StyledModalTitle>
        <CustomButton
          text="Stop"
          clickHandler={this.companyStopHandler}
        />
      </StyledModalWrapper>
    )
  }
}

StopCompanyModal.propTypes = {
  openedModalItem: PropTypes.string,
  stopCompanyAttempt: PropTypes.func.isRequired,
}

const StyledModalWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 100%;
  max-width: 490px;
  padding: 2rem 1rem;
  z-index: 10;
`

const StyledModalTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
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

export default connect(mapStateToProps, mapDispatchToProps)(StopCompanyModal)
