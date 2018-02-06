import { createState } from 'modules/utils/createState'

export const GithubManager = createState({
  name: 'GithubManager',
  fields: {
    totalStarredRepos: null,
    user: null,
    starredRepos: null,
  },
})
