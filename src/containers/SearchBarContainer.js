import { connect } from 'react-redux'
import { SearchBar } from 'components/SearchBar'
import {
  updateField,
  searchGithubUser,
  searchGithubUserStarredRepos,
} from 'modules/GithubManager'


const mapDispatchToProps = dispatch => ({
  updateField: (field, value) => dispatch(updateField(field, value)),
  searchGithubUser: (user) => dispatch(searchGithubUser(user)),
  searchGithubUserStarredRepos: (user) => dispatch(searchGithubUserStarredRepos(user)),
})

export const SearchBarContainer = connect(
  null,
  mapDispatchToProps
)(SearchBar)
