import { connect } from 'react-redux'
import { GithubManager } from 'routes/GithubManager/StarredRepos'
import {
  searchGithubUserStarredRepos,
  GithubManager as GithubManagerState,
} from 'modules/GithubManager'

const mapStateToProps = state => ({
  user: GithubManagerState.user()(state),
  totalStarredRepos: GithubManagerState.totalStarredRepos()(state),
  starredRepos: GithubManagerState.starredRepos()(state),
})

const mapDispatchToProps = dispatch => ({
  searchGithubUserStarredRepos: (user) => dispatch(searchGithubUserStarredRepos(user)),
})

export const GithubStarredManagerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubManager)
