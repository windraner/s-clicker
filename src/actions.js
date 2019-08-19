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

    dispatch({ type: CONSTANT.LOADING, payload: true })

    requestHandler(options)
      .then(({ data }) => {
        const { data: { auth_token } } = data
        cookies.set('token', auth_token, { expires: 365 })
        browserHistory.push('/')
        dispatch({ type: CONSTANT.LOADING, payload: false })
        createNotification('Successful login', 'success')
      }).catch(function (error) {
        if(error.response && error.response.data.error) {
          createNotification(error.response.data.error, 'error')
        }
        dispatch({ type: CONSTANT.LOADING, payload: false })
      })
  }
}

export const fetchWorkersList = (data = {}) => {
  return (dispatch, getState) => {

    data.page = getState()[CONSTANT.PAGE]
    data.q = getState()[CONSTANT.QUERY]

    const options = {
      type: 'post',
      url: '/',
      data
    }

    dispatch({ type: CONSTANT.LOADING, payload: true })

    requestHandler(options)
      .then(response => {
        dispatch({ type: CONSTANT.PAGE, payload: response.data.page })
        dispatch({ type: CONSTANT.PAGE_COUNT, payload: response.data.pages })
        dispatch({ type: CONSTANT.LOADING, payload: false })
      }).catch(function (error) {
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
