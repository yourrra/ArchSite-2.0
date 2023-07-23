import { ROUTES } from '../../constants/urls'
import { Link } from '../Link'
import logoDesk from '../../assets/alextecture.svg'
import logoMob from '../../../public/favicon.svg'

type Props = {
  variant?: 'desktop' | 'mobile'
}

export const Logo = ({ variant = 'desktop' }: Props) => {
  return (
    <Link type="icon" props={{ to: ROUTES.MAIN }}>
      {variant === 'desktop' ? (
        <img src={logoDesk} alt="Logo" height={34} />
      ) : (
        <img src={logoMob} alt="Logo" height={25} width={25} />
      )}
    </Link>
  )
}
