import { ROUTES } from '../../constants/urls'
import { Link } from '../Link'
import { Typography } from '../Typography'

export const Logo = () => {
  return (
    <Link type="link" props={{ to: ROUTES.MAIN }}>
      <Typography variant="logo">Alexander Moskovchenko</Typography>
    </Link>
  )
}
