import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompanyItem from './CompanyItem'
import { fetchCompaniesList } from 'actions'

class CompaniesList extends Component {
  componentDidMount () {
    const { fetchCompaniesList } = this.props
    fetchCompaniesList()
  }

  render() {
    const { companiesList } = this.props
    const renderitems = companiesList.map((company, index) => {
      return (
        <CompanyItem
          key={index}
          company={company}
        />
      )
    })
    return (
      <div>
        {renderitems}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { companiesList } = state
  return {
    companiesList
  }
}

const mapDispatchToProps = {
  fetchCompaniesList
}

export default connect(mapStateToProps, mapDispatchToProps)(CompaniesList)
