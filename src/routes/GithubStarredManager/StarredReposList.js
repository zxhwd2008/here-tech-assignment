import React from 'react'
import { Row, Col, List, Avatar, Icon } from 'antd'
import PropTypes from 'prop-types'
import { UserCard } from './UserCard'
import { Filters } from './Filters'
import styles from './starred-repos-list.less'

export class StarredReposList extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0)
  }

  render() {
    const { user, totalStarredRepos,
      starredRepos, sort, page,
      updateField, searchGithubUserStarredRepos} = this.props

    if ( user === null || totalStarredRepos === null ||
    starredRepos === null) {
      return (<div></div>)
    }

    const pagination = {
      pageSize: 30,
      current: page,
      total: totalStarredRepos,
      onChange: ( page ) => {
        updateField('page', page)
        searchGithubUserStarredRepos(user.login)
      },
    }

    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    )

    return(
      <Row gutter={24} className={styles['starred-repos-list-wrapper']}>
        <Col xs={24} sm={10} md={8}>
          <UserCard user={user} />
        </Col>
        <Col xs={24} sm={14} md={16}>
          <div className={styles['filters-wrapper']}>
            <Filters sort={sort}
              user={user}
              searchGithubUserStarredRepos={searchGithubUserStarredRepos}
              updateField={updateField} />
          </div>
          <List
              itemLayout="vertical"
              size="large"
              pagination={pagination}
              dataSource={starredRepos}
              renderItem={item => (
                <List.Item
                  key={item.full_name}
                  actions={[
                    <IconText type="info-circle" text={item.language || 'no info'} />,
                    <IconText type="star" text={item.stargazers_count} />,
                    <IconText type="fork" text={item.forks_count} />]}
                >
                  <List.Item.Meta
                    title={<a>{item.full_name}</a>}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
        </Col>
      </Row>
    )
  }
}

StarredReposList.propTypes = {
  user: PropTypes.object,
  totalStarredRepos: PropTypes.number,
  starredRepos: PropTypes.array,
  page: PropTypes.number,
  sort: PropTypes.string,
}
