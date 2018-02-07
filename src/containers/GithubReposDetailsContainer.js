import { connect } from 'react-redux'
import { ReposDetails } from 'routes/ReposDetails'
import {
  searchGithubRepos,
  GithubManager as GithubManagerState,
} from 'modules/GithubManager'

const mapStateToProps = state => ({
  repository: GithubManagerState.repository()(state),
})

const mapDispatchToProps = dispatch => ({
  searchGithubRepos: (repos) => dispatch(searchGithubRepos(repos)),
})

export const GithubReposDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReposDetails)
