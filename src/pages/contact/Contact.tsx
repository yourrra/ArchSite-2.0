import { Link } from '../../components/Link'
import { TextBlock } from '../../components/TextBlock'
import phone from '../../assets/phone.svg'
import mail from '../../assets/mail.svg'
import behance from '../../assets/behance.svg'
import instagram from '../../assets/instagram.svg'
import telegram from '../../assets/telegram.svg'

import contactImg from '../../assets/Samara-2020_contact.jpg'

import styles from './Contact.module.css'

export function Contact() {
  return (
    <div className="Wrapper">
      <div className={styles.Contact}>
        <div className={styles.Text}>
          <TextBlock title={'E-mail'}>
            <Link
              type="a"
              props={{ href: 'mailto:alextecture@gmail.com' }}
              icon={mail}
            >
              <div className={styles.Link}>alextecture@gmail.com</div>
            </Link>
          </TextBlock>
          <TextBlock title={'Phone'}>
            <Link type="a" props={{ href: 'tel:+79002891404' }} icon={phone}>
              <div className={styles.Link}>8 (900) 289-14-04</div>
            </Link>
          </TextBlock>
          <TextBlock title={'Social Network'}>
            <div className={styles.Network}>
              <Link
                type="a"
                props={{
                  href: 'https://www.instagram.com/alextecture_visual/',
                }}
                icon={instagram}
              >
                <div className={styles.Link}>Instagram</div>
              </Link>
              <Link
                type="a"
                props={{ href: 'https://www.behance.net/alextecture' }}
                icon={behance}
              >
                <div className={styles.Link}>Behance</div>
              </Link>
              <Link
                type="a"
                props={{ href: 'https://t.me/alextecture' }}
                icon={telegram}
              >
                <div className={styles.Link}>Telegram</div>
              </Link>
            </div>
          </TextBlock>
        </div>
        <div className={styles.ImgBlock}>
          <img className={styles.Img} src={contactImg} alt="Samara" />
        </div>
      </div>
    </div>
  )
}
