import keyMirror from 'key-mirror-nested'

export const ActionType = keyMirror({
  ROOT: {
    UPDATE_FIELD: null,
  },
  GITHUBMANAGER: {
    FETCH_USER_STARRED_REPOS: null,
    UPDATE_FIELD: null,
  },
})
