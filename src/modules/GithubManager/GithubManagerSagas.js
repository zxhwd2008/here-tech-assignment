import { takeEvery, call, all, put } from 'redux-saga/effects'
import { message } from 'antd'
import { Api } from 'services'
import { parseGithubLink } from 'modules/utils/parseGithubLink'
import { ActionType } from 'modules/actions'
import { updateField } from './index'

function* fetchGithubData(url, showError = false) {
  const result = yield call(Api.get, url)
  if (!result.error) {
    return result
  }
  if (showError) {
    message.error(result.error)
  }
  return false
}

function* fetchUserStarredSideEffects(action) {
  const { user, page, sort } = action.payload

  const [totalData, starredReposData] = yield all([
    yield call(fetchGithubData, 'users/' + user + '/starred?per_page=1'),
    yield call(fetchGithubData, 'users/' + user +
    '/starred?per_page=30&page=' + page + '&sort=' + sort),
  ])

  if (totalData && totalData.headers) {
    const linkHeaders = yield call(parseGithubLink, totalData.headers.get('link'))
    if (!linkHeaders) {
      yield put(updateField('totalStarredRepos', 0))
    } else {
      const last = linkHeaders && linkHeaders.last
      let total = last.split('?')[1]
      total = JSON.parse('{"' + decodeURI(total)
      .replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
      yield put(updateField('totalStarredRepos',
      total && total.page && parseInt(total.page, 10)))
    }
  }

  if (starredReposData) {
    yield put(updateField('starredRepos', starredReposData.response))
  }
}

function* fetchUserSideEffects(action) {
  const { user } = action.payload
  const userData = yield call(fetchGithubData, 'users/' + user, true)
  if (userData) {
    yield put(updateField('user', userData.response))
  }
}

export function* watchGithubRequest() {
  yield all([
    takeEvery(ActionType.GITHUBMANAGER.FETCH_USER, fetchUserSideEffects),
    takeEvery(ActionType.GITHUBMANAGER.FETCH_USER_STARRED_REPOS, fetchUserStarredSideEffects),
  ])
}
