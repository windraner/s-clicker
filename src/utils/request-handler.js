import axios from 'axios'
import qs from 'qs'
import cookies from 'js-cookie'
import { store } from 'index'
import * as CONSTANT from 'constant'
import createNotification from 'utils/createNotification'

export default ({ options, cb, failCb }) => {
	const token = cookies.get('token')

	options.data = options.data || {}
	options.url = process.env.REACT_APP_API_URL + options.url

	let axiosOptions = {
		url: options.url,
		method: options.type,
		headers: {
      'Content-Type': 'application/json',
    }
  }

  if (token) axiosOptions.headers['Authorization'] = `Token ${token}`

	switch (options.type.toLowerCase()) {

		case 'get':
			if (options.data)	{
				axiosOptions.url += '?' + qs.stringify(options.data)
			}

      break

		case 'put':
		case 'post':
      axiosOptions.data = options.data
      break

		case 'delete':
		case 'patch':
		default:
			axiosOptions.data = options.data
			break
  }

  store.dispatch({ type: CONSTANT.LOADING, payload: true })
  return axios(axiosOptions)
    .then(({ data }) => {
      if (typeof cb === 'function') cb(data)
      store.dispatch({ type: CONSTANT.LOADING, payload: false })
    })
    .catch(function (error) {
      if(error.response && error.response.data.error) {
        createNotification(error.response.data.error, 'error')
      }
      if (typeof failCb === 'function') failCb(error)
      store.dispatch({ type: CONSTANT.LOADING, payload: false })
    })
}
