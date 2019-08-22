import React, { Component } from 'react'
import { connect } from 'react-redux'
import CompanyItem from './CompanyItem'
import { fetchCompaniesList } from 'actions'

class CompaniesList extends Component {
  componentDidMount () {
    this.props.fetchCompaniesList()
  }

  render() {
    const mock = [
      {
        id: '1',
        name: 'test111',
        status: 'Canceled'
      },
      {
        id: '2',
        name: 'test2',
        status: 'Ready'
      },
      {
        id: '3',
        name: 'test3',
        status: 'In Progress'
      }
    ]
    const renderitems = mock.map(({ id, name, status }) => {
      return (
        <CompanyItem
          key={id}
          id={id}
          name={name}
          status={status}
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
