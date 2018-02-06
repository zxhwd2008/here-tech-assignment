import { connect } from 'react-redux'
import { SearchBar } from 'components/SearchBar'
import {
  GithubManager as GithubManagerState,
  searchGithubUser,
} from 'modules/GithubManager'

const mapStateToProps = state => ({
  starredRepos: GithubManagerState.starredRepos()(state),
})

const mapDispatchToProps = dispatch => ({
  searchGithubUser: (user) => dispatch(searchGithubUser(user)),
})

export const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
