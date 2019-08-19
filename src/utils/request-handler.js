import axios from 'axios'
import qs from 'qs'
import cookies from 'js-cookie'

export default (options) => {
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

	return axios(axiosOptions)
}
