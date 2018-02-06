import React from 'react'
import { Link, IndexLink } from 'react-router'
import { Menu } from 'antd'
import classnames from 'classnames'
import { SearchBarContainer } from 'containers/SearchBarContainer'
import styles from './header.less'

export const Header = () =>
  <div className={styles.home}>
    <div className={styles.logo} />
    <div className={styles['search-wrapper']}>
      <SearchBarContainer />
    </div>
  </div>
