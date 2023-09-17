const getContactHref = (name, contact) => {
  let href

  switch (name) {
    case 'twitter':
      href = `https://www.twitter.com/${contact}`
      break
    case 'github':
      href = `https://github.com/Lanestuartbuckler`
      break
    case 'facebook':
      href = `https://fb.com/${contact}`
      break
    case 'linkedin':
      href = `www.linkedin.com/in/lane-buckler-aa1056158`
      break
    case 'instagram':
      href = `https://instagram.com/${contact}/`
      break
    case 'telegram':
      href = `https://t.me/${contact}`
      break
    case 'email':
      href = `mailto: lanebucklerstu@gmail.com`
      break
    default:
      href = contact
      break
  }

  return href
}

export default getContactHref
