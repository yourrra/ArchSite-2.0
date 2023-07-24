import { Card } from '../../components/Card'
import styles from './Main.module.css'

import WinterCabinPr from '../../assets/Winter-cabin-2019_p_600px.jpg'
import WinterCabinFl from '../../assets/Winter-cabin-2019_2k.jpg'
import SadovyePr from '../../assets/Sadovye-2020_p_600px.jpg'
import SadovyeFl from '../../assets/Sadovye-2020_2k.jpg'
import SamaraPr from '../../assets/Samara-2020_p_600px.jpg'
import SamaraFl from '../../assets/Samara-2020_2k.jpg'
import UfaPr from '../../assets/Ufa-2020_p_600px.jpg'
import UfaFl from '../../assets/Ufa-2020_2k.jpg'
import AtlasPr from '../../assets/Atlas-2021_p_600px.jpg'
import AtlasFl from '../../assets/Atlas-2021_2k.jpg'
import AvainPr from '../../assets/Avain-2021_p_600px.jpg'
import AvainFl from '../../assets/Avain-2021_2k.jpg'
import GreenYardPr from '../../assets/Green-yard-2021_p_600px.jpg'
import GreenYardFl from '../../assets/Green-yard-2021_2k.jpg'
import HimkiPr from '../../assets/Himki-2021_p_600px.jpg'
import HimkiFl from '../../assets/Himki-2021_2k.jpg'
import FishingPr from '../../assets/Ice-fishing-2021_p_600px.jpg'
import FishingFl from '../../assets/Ice-fishing-2021_2k.jpg'
import KonakovoPr from '../../assets/Konakovo-2021_p_600px.jpg'
import KonakovoFl from '../../assets/Konakovo-2021_2k.jpg'
import NarodnogoOpolcheniyaPr from '../../assets/Narodnogo-opolcheniya-2021_p_600px.jpg'
import NarodnogoOpolcheniyaFl from '../../assets/Narodnogo-opolcheniya-2021_2k.jpg'
import RetailStreetPr from '../../assets/Retail-street-2021_p_600px.jpg'
import RetailStreetFl from '../../assets/Retail-street-2021_2k.jpg'
import RoadToTheBridgePr from '../../assets/Road-to-the-bridge-2021_p_600px.jpg'
import RoadToTheBridgeFl from '../../assets/Road-to-the-bridge-2021_2k.jpg'
import SahalinPr from '../../assets/Sahalin-2021_p_600px.jpg'
import SahalinFl from '../../assets/Sahalin-2021_2k.jpg'
import SportsCenterPr from '../../assets/Sports-center-2021_p_600px.jpg'
import SportsCenterfL from '../../assets/Sports-center-2021_2k.jpg'
import VavilovaPr from '../../assets/Vavilova-2021_p_600px.jpg'
import VavilovaFl from '../../assets/Vavilova-2021_2k.jpg'
import Vavilova2Pr from '../../assets/Vavilova-2-2021_p_600px.jpg'
import Vavilova2Fl from '../../assets/Vavilova-2-2021_2k.jpg'
import VladivostokPr from '../../assets/Vladivostok-2021_p_600px.jpg'
import VladivostokFl from '../../assets/Vladivostok-2021_2k.jpg'
import ChatswoodPr from '../../assets/Chatswood-2022_p_600px.jpg'
import ChatswoodFl from '../../assets/Chatswood-2022_2k.jpg'
import DskPr from '../../assets/DSK-2022_p_600px.jpg'
import DskFl from '../../assets/DSK-2022_2k.jpg'
import HotelPr from '../../assets/Hotel-2022_p_600px.jpg'
import HotelFl from '../../assets/Hotel-2022_2k.jpg'
import OasisPr from '../../assets/Oasis-2022_p_600px.jpg'
import OasisFl from '../../assets/Oasis-2022_2k.jpg'
import ObydenskiPr from '../../assets/Obydenskiy-2022_p_600px.jpg'
import ObydenskiFl from '../../assets/Obydenskiy-2022_2k.jpg'
import OfficeCenterPr from '../../assets/Office-center-2022_p_600px.jpg'
import OfficeCenterFl from '../../assets/Office-center-2022_2k.jpg'
import SnakePr from '../../assets/Snake-2022_p_600px.jpg'
import SnakeFl from '../../assets/Snake-2022_2k.jpg'
import StreetsOfMoscowPr from '../../assets/StreetsofMoscow-2022_p_600px.jpg'
import StreetsOfMoscowFl from '../../assets/StreetsofMoscow-2022_2k.jpg'
import TatarstanPr from '../../assets/Tatarstan-2022_p_600px.jpg'
import TatarstanFl from '../../assets/Tatarstan-2022_2k.jpg'
import TheHillPr from '../../assets/THE-HILL-2022_p_600px.jpg'
import TheHillFl from '../../assets/THE-HILL-2022_2k.jpg'
import TrioBoxHillPr from '../../assets/TRIO-BOX-Hill-2022_p_600px.jpg'
import TrioBoxHillFl from '../../assets/TRIO-BOX-Hill-2022_2k.jpg'
import ExtinctionMuseumPr from '../../assets/ExtinctionMuseum-2023_p_600px.jpg'
import ExtinctionMuseumFl from '../../assets/ExtinctionMuseum-2023_2k.jpg'
import ResedentialComplexPr from '../../assets/Resedentialcomplex-2023_p_600px.jpg'
import ResedentialComplexFl from '../../assets/Resedentialcomplex-2023_2k.jpg'
import.meta.glob('../../assets/*')

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
    {
      id: 4,
      preview: UfaPr,
      name: 'Ufa',
      year: 2020,
      fullRes: UfaFl,
    },
    {
      id: 5,
      preview: AtlasPr,
      name: 'Atlas',
      year: 2021,
      fullRes: AtlasFl,
    },
    {
      id: 6,
      preview: AvainPr,
      name: 'Avain',
      year: 2021,
      fullRes: AvainFl,
    },
    {
      id: 7,
      preview: GreenYardPr,
      name: 'Green Yard',
      year: 2021,
      fullRes: GreenYardFl,
    },
    {
      id: 8,
      preview: HimkiPr,
      name: 'Himki',
      year: 2021,
      fullRes: HimkiFl,
    },
    {
      id: 9,
      preview: FishingPr,
      name: 'Ice Fishing',
      year: 2021,
      fullRes: FishingFl,
    },
    {
      id: 10,
      preview: KonakovoPr,
      name: 'Konakovo',
      year: 2021,
      fullRes: KonakovoFl,
    },
    {
      id: 11,
      preview: NarodnogoOpolcheniyaPr,
      name: 'Narodnogo Opolcheniya',
      year: 2021,
      fullRes: NarodnogoOpolcheniyaFl,
    },
    {
      id: 12,
      preview: RetailStreetPr,
      name: 'Retail Street',
      year: 2021,
      fullRes: RetailStreetFl,
    },
    {
      id: 13,
      preview: RoadToTheBridgePr,
      name: 'Road to the Bridge',
      year: 2021,
      fullRes: RoadToTheBridgeFl,
    },
    {
      id: 14,
      preview: SahalinPr,
      name: 'Sahalin',
      year: 2021,
      fullRes: SahalinFl,
    },
    {
      id: 15,
      preview: SportsCenterPr,
      name: 'Sports Center',
      year: 2021,
      fullRes: SportsCenterfL,
    },
    {
      id: 16,
      preview: VavilovaPr,
      name: 'Vavilova',
      year: 2021,
      fullRes: VavilovaFl,
    },
    {
      id: 17,
      preview: Vavilova2Pr,
      name: 'Vavilova',
      year: 2021,
      fullRes: Vavilova2Fl,
    },
    {
      id: 18,
      preview: VladivostokPr,
      name: 'Vladivostok',
      year: 2021,
      fullRes: VladivostokFl,
    },
    {
      id: 19,
      preview: ChatswoodPr,
      name: 'Chatswood',
      year: 2022,
      fullRes: ChatswoodFl,
    },
    {
      id: 20,
      preview: DskPr,
      name: 'DSK',
      year: 2022,
      fullRes: DskFl,
    },
    {
      id: 21,
      preview: HotelPr,
      name: 'Hotel',
      year: 2022,
      fullRes: HotelFl,
    },
    {
      id: 22,
      preview: OasisPr,
      name: 'Oasis',
      year: 2022,
      fullRes: OasisFl,
    },
    {
      id: 23,
      preview: ObydenskiPr,
      name: 'Obydenski',
      year: 2022,
      fullRes: ObydenskiFl,
    },
    {
      id: 24,
      preview: OfficeCenterPr,
      name: 'Office Center',
      year: 2022,
      fullRes: OfficeCenterFl,
    },
    {
      id: 25,
      preview: SnakePr,
      name: 'Snake',
      year: 2022,
      fullRes: SnakeFl,
    },
    {
      id: 26,
      preview: StreetsOfMoscowPr,
      name: 'Streets of Moscow',
      year: 2022,
      fullRes: StreetsOfMoscowFl,
    },
    {
      id: 27,
      preview: TatarstanPr,
      name: 'Tatarstan',
      year: 2022,
      fullRes: TatarstanFl,
    },
    {
      id: 28,
      preview: TheHillPr,
      name: 'The Hill',
      year: 2022,
      fullRes: TheHillFl,
    },
    {
      id: 29,
      preview: TrioBoxHillPr,
      name: 'Trio Box Hill',
      year: 2022,
      fullRes: TrioBoxHillFl,
    },
    {
      id: 30,
      preview: ExtinctionMuseumPr,
      name: 'Extinction Museum',
      year: 2023,
      fullRes: ExtinctionMuseumFl,
    },
    {
      id: 31,
      preview: ResedentialComplexPr,
      name: 'Resedential Complex',
      year: 2023,
      fullRes: ResedentialComplexFl,
    },
  ]

  return (
    <div className="Wrapper">
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
    </div>
  )
}
