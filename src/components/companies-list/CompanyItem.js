import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CustomButton from 'common/custom-button'
import * as CONSTANT from 'constant'

function CompanyItem ({ id, name, status, openModal }) {
  return (
    <StyledCompanyWrapper
      key={id}
    >
      <StyledCompanyName>
        {name}
      </StyledCompanyName>

      <StyledSection>
        Status: <StyledCompanyStatus>{status}</StyledCompanyStatus>
      </StyledSection>

      <StyledSection>
        <CustomButton
          text='Stop'
          clickHandler={() => openModal(id)}
        />
      </StyledSection>
    </StyledCompanyWrapper>
  )
}

CompanyItem.propTypes = {
  openModal: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (id) => dispatch({ type: CONSTANT.OPENED_MODAL, payload: 'StopCompanyModal', item: id }),
  }
}

const StyledCompanyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: solid 2px green;
  border-bottom: solid 2px green;
  margin-bottom: 15px;
  padding: 15px 40px;
  background: #fff;
  font-size: 20px;
  font-weight: 600;
`

const StyledSection = styled.div`
  width: 38%;
  text-align: right;
`

const StyledCompanyName = styled.div`
  width: 24%;
  text-align: left;
`

const StyledCompanyStatus = styled.span`
  display: inline-block;
  width: 170px;
  color: #fff;
  background: red;
  padding: 10px 30px;
  margin-left: 10px;
  border-radius: 5px;
  text-align: left;
`

export default connect(null, mapDispatchToProps)(CompanyItem)
