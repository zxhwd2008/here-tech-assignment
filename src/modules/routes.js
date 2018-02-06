import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import { RootContainer } from 'containers/RootContainer'
import { GithubStarredManagerContainer } from 'containers/GithubStarredManagerContainer'

export default (
  <Route path="/" component={RootContainer}>
    <IndexRoute component={GithubStarredManagerContainer} />

    <Redirect from="*" to="/" />
  </Route>
)
