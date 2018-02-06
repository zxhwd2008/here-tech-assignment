import { connect } from 'react-redux'
import { Root } from 'routes/Root'
import {
  Router as RouterState,
} from '../modules/Router'
import {
  Root as RootState,
} from '../modules/Root'

const mapStateToProps = state => ({
  fetching: RootState.fetching()(state),
  routing: RouterState.locationBeforeTransitions()(state),
})

export const RootContainer = connect(
  mapStateToProps
)(Root)
