import styles from './About.module.css'
import { Picture } from '../../components/Picture'

import avatar from '../../assets/avatar.jpg'
import { TextBlock } from '../../components/TextBlock'

export function About() {
  return (
    <div className="wrapper">
      <div className={styles.AboutWrapper}>
        <div className={styles.About}>
          <div className={styles.infoBlock}>
            <Picture img={avatar} width={350} />
            <TextBlock title={'About me'}>
              My name is Alexander and I specialize in exterior visualization.
            </TextBlock>
            <TextBlock title={'Education'}>
              As a Bachelor of Architecture, I have a good understanding of
              project logic. As an experienced visualizer, I know how to present
              your project in the most favorable light.
            </TextBlock>
            <TextBlock title={'Experience'}>
              Over the years, I have gained unique experience, which allows me
              to find efficient solutions for any architectural task, whether
              it's a large master plan or a simple house in the woods.
            </TextBlock>
          </div>
          <div className={styles.imgBlock}>
            {/* <img src={backAboutImg} alt="Back" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
