import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import CustomButton from 'common/custom-button'
import CustomSelect from 'common/custom-select'
import TagsBlock from 'components/tags-block'

import { fetchQueryTitles, fetchQueryTags, fetchIgnoreTitles, fetchIgnoreTags, createCompanyAttempt } from 'actions'
import * as CONSTANT from 'constant'

function AddCompanyModal (props) {
  const {
    queryTitles, ignoreTitles, fetchQueryTitles, fetchQueryTags,
    fetchIgnoreTitles, fetchIgnoreTags, createCompanyAttempt
  } = props
  const [queryId, setQueryId] = React.useState('')
  const [queryTagsList, setQueryTagsList] = React.useState([])
  const [igonreId, setIgnoreId] = React.useState('')
  const [ignoreTagsList, setIgnoreTagsList] = React.useState([])
  const [country, setCountry] = React.useState('')

  const [hour, setHour] = React.useState('')
  const [minute, setMinute] = React.useState('')
  const [endHour, setEndHour] = React.useState('')
  const [endMinute, setEndMinute] = React.useState('')

  React.useEffect(() => {
    document.body.style.overflow = 'hidden'
    fetchQueryTitles()
    fetchIgnoreTitles()
    return () => document.body.style.overflow = 'unset'
    // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    if (queryId) {
      fetchQueryTags(queryId, setQueryTagsList)
    } else {
      setQueryTagsList([])
    }
  }, [queryId, fetchQueryTags])

  React.useEffect(() => {
    if (igonreId) {
      fetchIgnoreTags(igonreId, setIgnoreTagsList)
    } else {
      setIgnoreTagsList([])
    }
  }, [igonreId, fetchIgnoreTags])

  const companySubmitHandler = () => {
    const data = {
      country,
      query_id: queryId,
      ignore_id: igonreId,
      hour,
      minute,
      end_h: endHour,
      end_m: endMinute
    }
    createCompanyAttempt(data)
  }

  return (
    <StyledModalWrapper>
      <StyledModalTitle>Create New company</StyledModalTitle>

      <CustomSelect
        title='Select query'
        value={queryId}
        selectHandler={setQueryId}
        options={queryTitles}
      />

      {queryId && (
        <TagsBlock
          tags={queryTagsList}
        />
      )}

      <CustomSelect
        title='Ignore query'
        value={igonreId}
        selectHandler={setIgnoreId}
        options={ignoreTitles}
      />

      {igonreId && (
        <TagsBlock
          tags={ignoreTagsList}
        />
      )}

      <CustomSelect
        title='Select country'
        value={country}
        selectHandler={setCountry}
        options={CONSTANT.COUNTRY_LIST}
      />

      <StyledTimeSection>
        <CustomSelect
          title='Select hour'
          value={hour}
          selectHandler={setHour}
          options={CONSTANT.HOUR_LIST}
        />
        <CustomSelect
          title='Select minute'
          value={minute}
          selectHandler={setMinute}
          options={CONSTANT.MINUTE_LIST}
        />
        <CustomSelect
          title='Select end hour'
          value={endHour}
          selectHandler={setEndHour}
          options={CONSTANT.HOUR_LIST}
        />
        <CustomSelect
          title='Select end minute'
          value={endMinute}
          selectHandler={setEndMinute}
          options={CONSTANT.MINUTE_LIST}
        />
      </StyledTimeSection>

      <CustomButton
        text="Submit"
        clickHandler={companySubmitHandler}
      />
    </StyledModalWrapper>
  )
}

AddCompanyModal.propTypes = {
  openedModalItem: PropTypes.string,
  fetchQueryTitles: PropTypes.func.isRequired,
  fetchQueryTags: PropTypes.func.isRequired,
  fetchIgnoreTitles: PropTypes.func.isRequired,
  fetchIgnoreTags: PropTypes.func.isRequired,
  createCompanyAttempt: PropTypes.func.isRequired
}

const StyledModalWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  max-width: 1100px;
  padding: 2rem 1rem;
  z-index: 10;
`

const StyledModalTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  align-self: center;
`

const StyledTimeSection = styled.div`
  display: flex;
  justify-content: space-between;
`

const mapStateToProps = (state) => {
  const openedModalItem = state[CONSTANT.OPENED_MODAL_ITEM];
  const queryTitles = state[CONSTANT.QUERY_TITLES];
  const ignoreTitles = state[CONSTANT.IGNORE_TITLES];

  return (
    {
      openedModalItem,
      queryTitles,
      ignoreTitles
    }
  )
}

const mapDispatchToProps = {
  fetchQueryTitles,
  fetchQueryTags,
  fetchIgnoreTitles,
  fetchIgnoreTags,
  createCompanyAttempt
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCompanyModal)
