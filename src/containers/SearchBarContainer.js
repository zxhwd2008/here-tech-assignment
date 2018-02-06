import { connect } from 'react-redux'
import { SearchBar } from 'components/SearchBar'
import {
  GithubManager as GithubManagerState,
  searchGithubUser,
  searchGithubUserStarredRepos,
} from 'modules/GithubManager'

const mapStateToProps = state => ({
  user: GithubManagerState.user()(state),
  starredRepos: GithubManagerState.starredRepos()(state),
})

const mapDispatchToProps = dispatch => ({
  searchGithubUser: (user) => dispatch(searchGithubUser(user)),
  searchGithubUserStarredRepos: (user) => dispatch(searchGithubUserStarredRepos(user)),
})

export const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
