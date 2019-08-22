import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function CustomTag ({ text, clickHandler }) {
  return (
    <StyledWrapper>
      <StyledText>{text}</StyledText>
      <StyledCross onClick={() => clickHandler(text)}>x</StyledCross>
    </StyledWrapper>
  )
}

CustomTag.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
}

const StyledWrapper = styled.div`
  display: flex;
  height: 100%;
  margin: 0 .5rem 0.5rem;
`

const StyledText = styled.div`
  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-weight: 600;
  padding: 0.4375rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-right: none;
  border-top-left-radius: .25rem;
  border-bottom-left-radius: .25rem;
`

const StyledCross = styled.div`
  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-weight: 600;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top-right-radius: .25rem;
  border-bottom-right-radius: .25rem;
  padding: 0.4375rem;
  cursor: pointer;
  &:hover {
    border-color: #a9b0b8;
  }
  &:active {
    background-color: #ececec;
  }
`
