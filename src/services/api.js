import 'isomorphic-fetch'
import { constants } from './constants'
import { updateField } from 'modules/Root'
import { store } from 'index.js'

function callApi(endpoint, data = null, method = 'GET', showSpinner) {
  const fullUrl = (endpoint.indexOf('http://') && endpoint.indexOf('https://') === -1) ? constants.API_ROOT + endpoint : endpoint
  const config = {
    method,
    mode: 'cors',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }

  if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
    config.body = JSON.stringify(data)
  }

  if (showSpinner) {
    store.dispatch(updateField('fetching', true))
  }

  return fetch(fullUrl, config)
  .then(response => {
    store.dispatch(updateField('fetching', false))
    return response.json().then(json => ({ json, response }))
  })
  .then(({ json, response }) => !response.ok ? Promise.reject(json) : json)
  .then(
    response => ({ response }),
    error => ({ error: error.message || 'Something bad happened' })
  )
}

// api services
export const get = (resource, showSpinner = true) => callApi(`/${resource}`, null, 'GET', showSpinner)
export const post = (resource, data, showSpinner = true) => callApi(`/${resource}`, data, 'POST', showSpinner)
export const del = (resource, data, showSpinner = true) => callApi(`/${resource}`, data, 'DELETE', showSpinner)
export const put = (resource, data, showSpinner = true) => callApi(`/${resource}`, data, 'PUT', showSpinner)
