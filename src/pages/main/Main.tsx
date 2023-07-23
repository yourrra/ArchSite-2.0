import { Card } from '../../components/Card'
import styles from './Main.module.css'

import WinterCabinPr from '../../assets/Winter cabin-2019_p_600px.jpg'
import WinterCabinFl from '../../assets/Winter cabin-2019_2k.jpg'
import SadovyePr from '../../assets/Sadovye-2020_p_600px.jpg'
import SadovyeFl from '../../assets/Sadovye-2020_2k.jpg'
import SamaraPr from '../../assets/Samara-2020_p_600px.jpg'
import SamaraFl from '../../assets/Samara-2020_2k.jpg'

export function Main() {
  const previewCard = [
    {
      id: 1,
      preview: WinterCabinPr,
      name: 'Winter Cabin',
      year: 2019,
      fullRes: WinterCabinFl,
    },
    {
      id: 2,
      preview: SadovyePr,
      name: 'Sadovye',
      year: 2020,
      fullRes: SadovyeFl,
    },
    {
      id: 3,
      preview: SamaraPr,
      name: 'Samara',
      year: 2020,
      fullRes: SamaraFl,
    },
    // {
    //   id: 4,
    //   img: require('../../img/preview/2020/Ufa_2020_p_600px.jpg'),
    //   name: 'Ufa',
    //   year: 2020,
    //   imgBig: require('../../img/fullResolution/2020/Ufa_2020_2k.jpg'),
    // },
    // {
    //   id: 5,
    //   img: require('../../img/preview/2021/Atlas_2021_p_600px.jpg'),
    //   name: 'Atlas',
    //   year: 2021,
    //   imgBig: require('../../img/fullResolution/2021/Atlas_2021_2k.jpg'),
    // },
    // {
    //   id: 6,
    //   img: require('../../img/preview/2021/Avain_2021_p_600px.jpg'),
    //   name: 'Avain',
    //   year: 2021,
    //   imgBig: require('../../img/fullResolution/2021/Avain_2021_2k.jpg'),
    // },
    // {
    //   id: 7,
    //   img: require('../../img/preview/2021/Green_yard_2021_p_600px.jpg'),
    //   name: 'Green Yard',
    //   year: 2021,
    //   imgBig: require('../../img/fullResolution/2021/Green_yard_2021_2k.jpg'),
    // },
    // {
    //   id: 8,
    //   img: require('../../img/preview/2021/Himki_2021_p_600px.jpg'),
    //   name: 'Himki',
    //   year: 2021,
    //   imgBig: require('../../img/fullResolution/2021/Himki_2021_2k.jpg'),
    // },
    // {
    //   id: 9,
    //   img: require('../../img/preview/2021/Ice_fishing_2021_p_600px.jpg'),
    //   name: 'Ice Fishing',
    //   year: 2021,
    //   imgBig: require('../../img/fullResolution/2021/Ice_fishing_2021_2k.jpg'),
    // },
    // {
    //   id: 10,
    //   img: require('../../img/preview/2021/Konakovo_2021_p_600px.jpg'),
    //   name: 'Konakovo',
    //   year: 2021,
    //   imgBig: require('../../img/fullResolution/2021/Konakovo_2021_2k.jpg'),
    // },
    // {
    //   id: 11,
    //   img: require('../../img/preview/2021/Narodnogo_opolcheniya_2021_p_600px.jpg'),
    //   name: 'Narodnogo Opolcheniya',
    //   year: 2021,
    //   imgBig: require('../../img/fullResolution/2021/Narodnogo_opolcheniya_2021_2k.jpg'),
    // },
    // {
    //   id: 12,
    //   img: require('../../img/preview/2021/Retail_street_2021_p_600px.jpg'),
    //   name: 'Retail Street',
    //   year: 2021,
    //   imgBig: require('../../img/fullResolution/2021/Retail_street_2021_2k.jpg'),
    // },
    // {
    //   id: 13,
    //   img: require('../../img/preview/2021/Road_to_the_bridge_2021_p_600px.jpg'),
    //   name: 'Road to the Bridge',
    //   year: 2021,
    //   imgBig: require('../../img/fullResolution/2021/Road_to_the_bridge_2021_2k.jpg'),
    // },
    // {
    //   id: 14,
    //   img: require('../../img/preview/2021/Sahalin_2021_p_600px.jpg'),
    //   name: 'Sahalin',
    //   year: 2021,
    //   imgBig: require('../../img/fullResolution/2021/Sahalin_2021_2k.jpg'),
    // },
    // {
    //   id: 15,
    //   img: require('../../img/preview/2021/Sports_center_2021_p_600px.jpg'),
    //   name: 'Sports Center',
    //   year: 2021,
    //   imgBig: require('../../img/fullResolution/2021/Sports_center_2021_2k.jpg'),
    // },
    // {
    //   id: 16,
    //   img: require('../../img/preview/2021/Vavilova_2_2021_p_600px.jpg'),
    //   name: 'Vavilova',
    //   year: 2021,
    //   imgBig: require('../../img/fullResolution/2021/Vavilova_2_2021_2k.jpg'),
    // },
    // {
    //   id: 17,
    //   img: require('../../img/preview/2021/Vavilova_2021_p_600px.jpg'),
    //   name: 'Vavilova',
    //   year: 2021,
    //   imgBig: require('../../img/fullResolution/2021/Vavilova_2021_2k.jpg'),
    // },
    // {
    //   id: 18,
    //   img: require('../../img/preview/2021/Vladivostok_2021_p_600px.jpg'),
    //   name: 'Vladivostok',
    //   year: 2021,
    //   imgBig: require('../../img/fullResolution/2021/Vladivostok_2021_2k.jpg'),
    // },
    // {
    //   id: 19,
    //   img: require('../../img/preview/2022/Chatswood_2022_p_600px.jpg'),
    //   name: 'Chatswood',
    //   year: 2022,
    //   imgBig: require('../../img/fullResolution/2022/Chatswood_2022_2k.jpg'),
    // },
    // {
    //   id: 20,
    //   img: require('../../img/preview/2022/DSK_2022_p_600px.jpg'),
    //   name: 'DSK',
    //   year: 2022,
    //   imgBig: require('../../img/fullResolution/2022/DSK_2022_2k.jpg'),
    // },
    // {
    //   id: 21,
    //   img: require('../../img/preview/2022/Hotel_2022_p_600px.jpg'),
    //   name: 'Hotel',
    //   year: 2022,
    //   imgBig: require('../../img/fullResolution/2022/Hotel_2022_2k.jpg'),
    // },
    // {
    //   id: 22,
    //   img: require('../../img/preview/2022/Oasis_2022_p_600px.jpg'),
    //   name: 'Oasis',
    //   year: 2022,
    //   imgBig: require('../../img/fullResolution/2022/Oasis_2022_2k.jpg'),
    // },
    // {
    //   id: 23,
    //   img: require('../../img/preview/2022/Obydenskiy_2022_p_600px.jpg'),
    //   name: 'Obydenski',
    //   year: 2022,
    //   imgBig: require('../../img/fullResolution/2022/Obydenskiy_2022_2k.jpg'),
    // },
    // {
    //   id: 24,
    //   img: require('../../img/preview/2022/Office_center_2022_p_600px.jpg'),
    //   name: 'Office Center',
    //   year: 2022,
    //   imgBig: require('../../img/fullResolution/2022/Office_center_2022_2k.jpg'),
    // },

    // {
    //   id: 25,
    //   img: require('../../img/preview/2022/Snake_2022_p_600px.jpg'),
    //   name: 'Snake',
    //   year: 2022,
    //   imgBig: require('../../img/fullResolution/2022/Snake_2022_2k.jpg'),
    // },
    // {
    //   id: 26,
    //   img: require('../../img/preview/2022/Streets_of_Moscow_2022_p_600px.jpg'),
    //   name: 'Streets of Moscow',
    //   year: 2022,
    //   imgBig: require('../../img/fullResolution/2022/Streets_of_Moscow_2022_2k.jpg'),
    // },
    // {
    //   id: 27,
    //   img: require('../../img/preview/2022/Tatarstan_2022_p_600px.jpg'),
    //   name: 'Tatarstan',
    //   year: 2022,
    //   imgBig: require('../../img/fullResolution/2022/Tatarstan_2022_2k.jpg'),
    // },
    // {
    //   id: 28,
    //   img: require('../../img/preview/2022/THE_HILL_2022_p_600px.jpg'),
    //   name: 'The Hill',
    //   year: 2022,
    //   imgBig: require('../../img/fullResolution/2022/THE_HILL_2022_2k.jpg'),
    // },
    // {
    //   id: 29,
    //   img: require('../../img/preview/2022/TRIO_BOX_Hill_2022_p_600px.jpg'),
    //   name: 'Trio Box Hill',
    //   year: 2022,
    //   imgBig: require('../../img/fullResolution/2022/TRIO_BOX_Hill_2022_2k.jpg'),
    // },
    // {
    //   id: 30,
    //   img: require('../../img/preview/2023/Extinction_Museum_2023_p_600px.jpg'),
    //   name: 'Extinction Museum',
    //   year: 2023,
    //   imgBig: require('../../img/fullResolution/2023/Extinction_Museum_2023_2k.jpg'),
    // },
    // {
    //   id: 31,
    //   img: require('../../img/preview/2023/Resedential_complex_2023_p_600px.jpg'),
    //   name: 'Resedential Complex',
    //   year: 2023,
    //   imgBig: require('../../img/fullResolution/2023/Resedential_complex_2023_2k.jpg'),
    // },
  ]

  return (
    <div className={styles.Renders}>
      {previewCard
        .map(card => (
          <Card
            preview={card.preview}
            name={card.name}
            year={card.year}
            fullRes={card.fullRes}
          />
        ))
        .reverse()}
    </div>
  )
}
