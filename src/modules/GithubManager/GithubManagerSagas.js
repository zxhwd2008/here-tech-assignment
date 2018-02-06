import { takeEvery, call, all, put, select } from 'redux-saga/effects'
import { Api } from 'services'
import { message } from 'antd'
import { updateField } from './index'
import { ActionType } from 'modules/actions'

function* fetchGithubData(url) {
  const result = yield call(Api.get, url)
  if (!result.error) {
    return result.response
  } else {
    message.error(result.error)
    return false
  }
}

function* fetchUserStarredSideEffects(action) {
  const { user } = action.payload
  const data = yield call(fetchGithubData, 'users/' + user + '/starred')
  if (data) {
    console.log(data)
  }
}

function* fetchUserSideEffects(action) {
  const { user } = action.payload
  const data = yield call(fetchGithubData, 'users/' + user)
  if (data) {
    console.log(data)
  }
}

export function* watchGithubRequest() {
  yield all([
    takeEvery(ActionType.GITHUBMANAGER.FETCH_USER, fetchUserSideEffects),
    takeEvery(ActionType.GITHUBMANAGER.FETCH_USER_STARRED_REPOS, fetchUserStarredSideEffects),
  ])
}
