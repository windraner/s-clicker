import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function CustomInput ({ title, value, type, setValue }) {
  return (
    <StyledInputWrapper>
      <StyledInputTitle>{title}</StyledInputTitle>
      <StyledInput
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => setValue(e.target.value.trim())}
      />
    </StyledInputWrapper>
  )
}

CustomInput.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired
}

const StyledInputWrapper = styled.div`
  margin-bottom: 1rem;
`

const StyledInputTitle = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
  text-transform: capitalize;
`

const StyledInput = styled.input`
  border: 1px solid #d0d6de;
  border-radius: 4px;
  color: #354052;
  font-size: 0.875rem;
  outline: none;
  padding: 0.5rem 0.75rem;
  &:hover {
    border-color: #bfc4cb;
  }
  &:active {
    border-color: #a9b0b8;
  }
`

export default CustomInput
