import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

function CustomButton ({ text, disabled, clickHandler }) {
  return (
    <StyledCustomButton
      type="button"
      disabled={disabled}
      onClick={clickHandler}
    >
      {text}
    </StyledCustomButton>
  )
}

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired
}

const StyledCustomButton = styled.button`
  display: inline-block;
  height: 100%;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #354052;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-weight: 600;
  padding: 0.4375rem 1rem;
  border-radius: .25rem;
  box-shadow: none !important;
  outline: none !important;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  cursor: pointer;
  &:hover {
    border-color: #a9b0b8;
  }
  &:active {
    background-color: #ececec;
  }
  &:disabled {
    background-color: #e9edf1;
    border-color: rgba(0, 0, 0, 0.1);
    color: #b0b0b1;
    cursor: auto;
  }
`

export default CustomButton
