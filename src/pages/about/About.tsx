import styles from './About.module.css'
import { Picture } from '../../components/Picture'

import avatar from '../../assets/avatar.jpg'

export function About() {
  return (
    <div className="wrapper">
      <div className={styles.AboutWrapper}>
        <div className={styles.About}>
          <div className={styles.infoBlock}>
            <div className={styles.avatarBlock}></div>
            <Picture img={avatar} width={350} />
            <div className={styles.aboutBlock_wrapper}>
              <div className={styles.aboutBlock}>
                <h2>About me</h2>
                <p>
                  My name is Alexander and I specialize in exterior
                  visualization.
                </p>
              </div>
              <div className={styles.edBlock}>
                <h2>Education</h2>
                <p>
                  As a Bachelor of Architecture, I have a good understanding of
                  project logic. As an experienced visualizer, I know how to
                  present your project in the most favorable light.
                </p>
              </div>
              <div className={styles.exBlock}>
                <h2>Experience</h2>
                <p>
                  Over the years, I have gained unique experience, which allows
                  me to find efficient solutions for any architectural task,
                  whether it's a large master plan or a simple house in the
                  woods.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.imgBlock}>
            {/* <img src={backAboutImg} alt="Back" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
