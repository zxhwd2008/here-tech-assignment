import { connect } from 'react-redux'
import { SearchBar } from 'components/SearchBar'
import {
  searchGithubUser,
  searchGithubUserStarredRepos,
} from 'modules/GithubManager'


const mapDispatchToProps = dispatch => ({
  searchGithubUser: (user) => dispatch(searchGithubUser(user)),
  searchGithubUserStarredRepos: (user) => dispatch(searchGithubUserStarredRepos(user)),
})

export const SearchBarContainer = connect(
  null,
  mapDispatchToProps
)(SearchBar)
