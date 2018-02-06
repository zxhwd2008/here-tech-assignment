import { takeEvery, call, all, put, select } from 'redux-saga/effects'
import { Api } from 'services'
import { updateField } from './index'
import { ActionType } from 'modules/actions'

function* fetchUserStarredSideEffects(action) {
  console.log(action)
}

export function* watchGithubRequest() {
  yield all([
    takeEvery(ActionType.GITHUBMANAGER.FETCH_USER_STARRED_REPOS, fetchUserStarredSideEffects)
  ])
}
