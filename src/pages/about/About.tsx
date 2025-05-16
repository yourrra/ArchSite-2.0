import { Picture } from '../../components/Picture'
import { TextBlock } from '../../components/TextBlock'
import avatar from '../../assets/avatar_2.jpg'
import aboutImg from '../../assets/Vavilova-2021_2k-page.jpeg'

import styles from './About.module.css'

export function About() {
  return (
    <div className="Wrapper">
      <div className={styles.About}>
        <div className={styles.InfoBlock}>
          <Picture img={avatar} alt={'avatar'} width={350} />
          <div className={styles.Text}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ margin: '0' }}>
                1. Professionalism and Deep Expertise
              </h3>
              <TextBlock>
                We don’t just create great visuals — we offer a comprehensive
                service based on deep immersion in your project. Our exclusive
                focus on the real estate sector allows us to deliver solutions
                that precisely meet your needs.
              </TextBlock>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ margin: '0' }}>
                2. Reliability and Control of Deadlines
              </h3>
              <TextBlock>
                We value your time and guarantee on-time task completion. Clear
                deadlines and transparency in our work are commitments we make
                to every client.
              </TextBlock>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ margin: '0' }}>
                3. Personalized Approach and Empathy
              </h3>
              <TextBlock>
                We are not just service providers — we are partners who
                understand your challenges and goals. Our human-centered
                approach and attention to detail help us create visuals that
                truly work for your business.
              </TextBlock>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ margin: '0' }}>
                4. Full Range of Services Within a Single Niche
              </h3>
              <TextBlock>
                By focusing solely on real estate, we’re able to offer
                everything you need: from photorealistic interior and exterior
                renderings to dynamic animations that leave a lasting impression
                on your clients.
              </TextBlock>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ margin: '0' }}>5. Results-Driven Focus</h3>
              <TextBlock>
                Our goal isn’t just to create beautiful images — it’s to deliver
                a powerful tool for selling and promoting your projects. We
                craft visualizations that attract, persuade, and stay memorable.
              </TextBlock>
            </div>
            {/* <TextBlock>
              As a Bachelor of Architecture, I have a good understanding of
              project logic. As an experienced visualizer, I know how to present
              your project in the most favorable light.
            </TextBlock>
            <TextBlock>
              Over the years, I have gained unique experience, which allows me
              to find efficient solutions for any architectural task, whether
              it's a large master plan or a simple house in the woods.
            </TextBlock> */}
          </div>
        </div>
        <div className={styles.ImgBlock}>
          <img
            className={styles.Img}
            src={aboutImg}
            alt="Vavilova"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

// 1. Professionalism and Deep Expertise
// We don’t just create great visuals — we offer a comprehensive service based on deep immersion in your project. Our exclusive focus on the real estate sector allows us to deliver solutions that precisely meet your needs.

// 2. Reliability and Control of Deadlines
// We value your time and guarantee on-time task completion. Clear deadlines and transparency in our work are commitments we make to every client.

// 3. Personalized Approach and Empathy
// We are not just service providers — we are partners who understand your challenges and goals. Our human-centered approach and attention to detail help us create visuals that truly work for your business.

// 4. Full Range of Services Within a Single Niche
// By focusing solely on real estate, we’re able to offer everything you need: from photorealistic interior and exterior renderings to dynamic animations that leave a lasting impression on your clients.

// 5. Results-Driven Focus
// Our goal isn’t just to create beautiful images — it’s to deliver a powerful tool for selling and promoting your projects. We craft visualizations that attract, persuade, and stay memorable.
