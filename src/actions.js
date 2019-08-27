import cookies from 'js-cookie'
import requestHandler from 'utils/request-handler'
import * as CONSTANT from 'constant'
import { browserHistory } from 'App'
import createNotification from 'utils/createNotification'

export const sendLoginAttempt = (data) => {
  return () => {
    const options = {
      type: 'post',
      url: '/login/',
      data
    }
    const cb = ({ data }) => {
      cookies.set('token', data.auth_token, { expires: 365 })
      browserHistory.push('/')
      createNotification('Successful login', 'success')
    }
    requestHandler({ options, cb })
  }
}

export const fetchCompaniesList = () => {
  return (dispatch) => {
    const options = {
      type: 'get',
      url: '/main/'
    }
    const cb = ({ data }) => {
      dispatch({ type: CONSTANT.COMPANIES_LIST, payload: data })
    }
    requestHandler({ options, cb })
  }
}

export const fetchQueryTitles = () => {
  return (dispatch) => {
    const options = {
      type: 'get',
      url: '/query-titles/'
    }
    const cb = ({ data }) => {
      dispatch({ type: CONSTANT.QUERY_TITLES, payload: data })
    }
    requestHandler({ options, cb })
  }
}

export const fetchQueryTags = (queryId, setQueryTagsList) => {
  return (dispatch) => {
    const options = {
      type: 'post',
      url: '/query-titles/',
      data: {
        query_id: queryId
      }
    }
    const cb = ({ data }) => {
      setQueryTagsList(data)
    }
    requestHandler({ options, cb })
  }
}

export const fetchIgnoreTitles = () => {
  return (dispatch) => {
    const options = {
      type: 'get',
      url: '/ignore-titles/'
    }
    const cb = ({ data }) => {
      dispatch({ type: CONSTANT.IGNORE_TITLES, payload: data })
    }
    requestHandler({ options, cb })
  }
}

export const fetchIgnoreTags = (igonreId, setIgnoreTagsList) => {
  return (dispatch) => {
    const options = {
      type: 'post',
      url: '/ignore-titles/',
      data: {
       ignore_id: igonreId
      }
    }
    const cb = ({ data }) => {
      setIgnoreTagsList(data)
    }
    requestHandler({ options, cb })
  }
}

export const createCompanyAttempt = (data) => {
  return (dispatch) => {
    const options = {
      type: 'post',
      url: '/main/',
      data
    }
    const cb = () => {
      fetchCompaniesList()
      dispatch({ type: CONSTANT.OPENED_MODAL, payload: null, item: null })
    }
    requestHandler({ options, cb })
  }
}

export const stopCompanyAttempt = (id) => {
  return dispatch => {
    const options = {
      type: 'delete',
      url: `/stop/${id}/`
    }
    const cb = () => {
      fetchCompaniesList()
      dispatch({ type: CONSTANT.OPENED_MODAL, payload: null, item: null })
    }
    const failCb = () => {
      dispatch({ type: CONSTANT.OPENED_MODAL, payload: null, item: null })
    }
    requestHandler({ options, cb, failCb})
  }
}
