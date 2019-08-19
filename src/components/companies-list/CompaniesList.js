import React, { Component } from 'react'
import requestHandler from 'utils/request-handler'

import CompanyItem from './CompanyItem'

export default class CompaniesList extends Component {
  componentDidMount () {
    const options = {
      type: 'get',
      url: '/stop/'
    }

    requestHandler(options)
      .then(({ data }) => {
        console.log(data)
      })
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
