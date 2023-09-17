import React from 'react'
import {
  TwitterOutlined,
  GithubOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  MailOutlined
} from '@ant-design/icons'
import TelegramIcon from '../components/CustomIcons/Telegram'
import RssIcon from '../components/CustomIcons/Rss.js'

const getIcon = name => {
  let icon

  switch (name) {
    case 'github':
      icon = <GithubOutlined />
      break
    case 'linkedin':
      icon = <LinkedinOutlined />
      break
    case 'email':
      icon = <MailOutlined />
      break
    default:
      icon = ''
      break
  }

  return <>{icon}</>
}

export default getIcon
