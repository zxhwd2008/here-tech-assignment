import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

const { Meta } = Card

export const UserCard = ({ user }) => (
  user ?
  (
    <Card cover={ <img src={ user.avatar_url } /> }>
      <Meta
        title={ user.name }
        description={ user.bio }
      />
    </Card>
  )
  : (<div></div>)
)

UserCard.propTypes = {
  user: PropTypes.object,
}
