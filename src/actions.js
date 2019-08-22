import cookies from 'js-cookie'
import requestHandler from 'utils/request-handler'
import * as CONSTANT from 'constant'
import { browserHistory } from 'App'
import createNotification from 'utils/createNotification'

export const sendLoginAttempt = (data) => {
  return dispatch => {
    const options = {
      type: 'post',
      url: '/login/',
      data
    }

    requestHandler(options)
      .then(({ data: { data } }) => {
        cookies.set('token', data.auth_token, { expires: 365 })
        browserHistory.push('/')
        dispatch({ type: CONSTANT.LOADING, payload: false })
        createNotification('Successful login', 'success')
      })
      .catch(function (error) {
        if(error.response && error.response.data.error) {
          createNotification(error.response.data.error, 'error')
        }
        dispatch({ type: CONSTANT.LOADING, payload: false })
      })
  }
}

export const fetchCompaniesList = () => {
  return (dispatch) => {
    const options = {
      type: 'get',
      url: '/main/'
    }

    requestHandler(options)
      .then(({ data: { data } }) => {
        dispatch({ type: CONSTANT.COMPANIES_LIST, payload: data })
        dispatch({ type: CONSTANT.LOADING, payload: false })
      })
      .catch(function (error) {
        if(error.response && error.response.data.error) {
          createNotification(error.response.data.error, 'error')
        }
        dispatch({ type: CONSTANT.LOADING, payload: false })
      })
  }
}

export const stopCompanyAttempt = (id) => {
  return dispatch => {
    // const options = {
    //   type: 'post',
    //   url: `/stop/${id}/`
    // }

    // dispatch({ type: CONSTANT.LOADING, payload: true })
    console.log('id', id)

    // requestHandler(options)
    //   .then(({ data }) => {
    //     dispatch({ type: CONSTANT.LOADING, payload: false })
    //     dispatch({ type: CONSTANT.OPENED_MODAL, payload: null, item: null })
    //   }).catch(function (error) {
    //     dispatch({ type: CONSTANT.LOADING, payload: false })
    //     dispatch({ type: CONSTANT.OPENED_MODAL, payload: null, item: null })
    //   })
  }
}
