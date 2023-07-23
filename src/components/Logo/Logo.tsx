import { ROUTES } from '../../constants/urls'
import { Link } from '../Link'
import alextecture from '../../assets/alextecture.svg'

export const Logo = () => {
  return (
    <Link type="link" props={{ to: ROUTES.MAIN }}>
      <img src={alextecture} alt="alextecture" height={34} />
    </Link>
  )
}
