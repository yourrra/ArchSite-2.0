import { Picture } from '../../components/Picture'
import { TextBlock } from '../../components/TextBlock'
import avatar from '../../assets/avatar.jpeg'
import aboutImg from '../../assets/Vavilova-2021_2k-page.jpeg'

import styles from './About.module.css'

export function About() {
  return (
    <div className="wrapper">
      <div className={styles.AboutWrapper}>
        <div className={styles.About}>
          <div className={styles.InfoBlock}>
            <Picture
              img={avatar}
              alt={'avatar'}
              width={350}
              variant={'adaptive'}
            />
            <div className={styles.Text}>
              <TextBlock title={'About me'}>
                My name is Alexander and I specialize in exterior visualization.
              </TextBlock>
              <TextBlock title={'Education'}>
                As a Bachelor of Architecture, I have a good understanding of
                project logic. As an experienced visualizer, I know how to
                present your project in the most favorable light.
              </TextBlock>
              <TextBlock title={'Experience'}>
                Over the years, I have gained unique experience, which allows me
                to find efficient solutions for any architectural task, whether
                it's a large master plan or a simple house in the woods.
              </TextBlock>
            </div>
          </div>
          <div className={styles.ImgBlock}>
            <img className={styles.Img} src={aboutImg} alt="Vavilova" />
          </div>
        </div>
      </div>
    </div>
  )
}
