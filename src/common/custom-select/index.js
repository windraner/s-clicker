import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default class CustomSelect extends Component {

  renderOptions = () => {
    const { options } = this.props
    const newOptions = [{ id: '', name: 'select option ...' }, ...options]
    return newOptions.map(({ id, name }) => {
      return (
        <option
          key={id}
          value={id}
          style={{ height: 40 }}
        >
          {name}
        </option>
      )
    })
  }

  render() {
    const { value, title, selectHandler } = this.props;

    return (
      <div>
        <StyledInputTitle>{title}</StyledInputTitle>

        <div style={{ position: 'relative' }}>
          <StyledSelect
            value={value}
            onChange={(e) => selectHandler(e.target.value)}
          >
            {this.renderOptions()}
          </StyledSelect>
        </div>
      </div>
    )
  }
}

CustomSelect.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectHandler: PropTypes.func.isRequired
}

const StyledInputTitle = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
  text-transform: capitalize;
`

const StyledSelect = styled.select`
  width: 5rem;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #354052;
  outline: none;
  height: 30px;
  text-indent: 5px;
  min-width: 250px;
  margin-bottom: 1rem;
  &:hover {
    border-color: #bfc4cb;
  }
  &:focus {
    border-color: #a9b0b8;
  }
`
