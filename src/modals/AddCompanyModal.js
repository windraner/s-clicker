import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CustomButton from 'common/custom-button'
import CustomInput from 'common/custom-input'
import TagsBlock from 'components/tags-block'

import { stopCompanyAttempt } from 'actions'
import * as CONSTANT from 'constant'

function AddCompanyModal () {
  const [name, setName] = React.useState('')
  const [tags, setTags] = React.useState([])

  React.useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => document.body.style.overflow = 'unset'
  }, [])

  const companySubmitHandler = () => {
    // const { openedModalItem, stopCompanyAttempt } = this.props
    // stopCompanyAttempt(openedModalItem)
  }

  return (
    <StyledModalWrapper>
      <StyledModalTitle>Create New company</StyledModalTitle>
      <CustomInput
        title='Company name'
        type='text'
        value={name}
        setValue={setName}
      />

      <TagsBlock
        tags={tags}
        setTags={setTags}
      />

      <CustomButton
        text="Submit"
        clickHandler={companySubmitHandler}
      />
    </StyledModalWrapper>
  )
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
  max-width: 625px;
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
