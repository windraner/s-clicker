import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as CONSTANT from 'constant'

const PortalModal = ({ openedModal, closeModal }) => {
  const modalList = ['StopCompanyModal', 'AddCompanyModal']
  if(!modalList.includes(openedModal)) return null

  const Component = require(`./${openedModal}`).default

  const result = (
    <>
      <StyledModalContainer>
        <Component />
      </StyledModalContainer>
      <StyledModalOverlay
        onClick={closeModal}
      />
    </>
  )

  return ReactDOM.createPortal(
    result,
    document.getElementById('modal'),
  )
}

PortalModal.propTypes = {
  openedModal: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
}

const StyledModalContainer = styled.div`
  position: absolute;
  display: flex;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.6);
`

const StyledModalOverlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
`

const mapStateToProps = (state) => {
  const openedModal = state[CONSTANT.OPENED_MODAL];

  return (
    { openedModal }
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch({ type: CONSTANT.OPENED_MODAL, payload: null })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PortalModal)
