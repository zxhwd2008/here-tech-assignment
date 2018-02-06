import { createState } from 'modules/utils/createState'

export const GithubManager = createState({
  name: 'GithubManager',
  fields: {
    user: null,
    starredRepos: null,
  },
})
