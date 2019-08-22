import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function CustomInputWithButton ({ title, value, setValue, buttonText, disabled, clickHandler }) {
  return (
    <StyledInputWrapper>
      <StyledInputTitle>{title}</StyledInputTitle>
      <StyledInput
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => setValue(e.target.value.trim())}
      />
      <StyledCustomButton
        type="button"
        disabled={disabled}
        onClick={clickHandler}
      >
        {buttonText}
      </StyledCustomButton>
    </StyledInputWrapper>
  )
}

CustomInputWithButton.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  disabled: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired
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
  margin-right: 1rem;
  &:hover {
    border-color: #bfc4cb;
  }
  &:active {
    border-color: #a9b0b8;
  }
`

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
