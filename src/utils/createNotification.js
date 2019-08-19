import { toast } from 'react-toastify'

const defaultOptions = {
  autoClose: 3000,
  hideProgressBar: false,
  closeButton: false,
  position: toast.POSITION.BOTTOM_LEFT
}

// Type: info, success, warning, error
const createNotification = (message, type = 'info', options = {}) => {
  if (options.notificationId) {
    // Update existing notification
    return toast.update(options.notificationId, Object.assign({}, defaultOptions, { render: message, type, hideProgressBar: true }, options))
  } else {
    // Create new notification
    toast.dismiss()
    return toast[type](message, Object.assign({}, defaultOptions, options))
  }
}

export default createNotification
