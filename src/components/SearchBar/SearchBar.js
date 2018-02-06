import React from 'react'
import { Input } from 'antd'
const Search = Input.Search

export class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.onUserSearch = this.onUserSearch.bind(this)
  }

  onUserSearch(username) {
    this.props.searchGithubUser(username)
  }

  render() {
    return (
      <Search
        placeholder="Search github user"
        onSearch={this.onUserSearch}
        enterButton={true} />
    )
  }
}
