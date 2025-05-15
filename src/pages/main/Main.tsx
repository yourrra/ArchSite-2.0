import { Card } from '../../components/Card'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
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
import OfficeCenterPr from '../../assets/Office_center_p600.jpg'
import OfficeCenterFl from '../../assets/Office_center_2k.jpg'
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
import PrismPr from '../../assets/Prism_p600.jpg'
import PrismFl from '../../assets/Prism_2k.jpg'
import GrasslandHousePr from '../../assets/Grassland_House_p600.jpg'
import GrasslandHouseFl from '../../assets/Grassland_House_2k.jpg'
import RamseyRoadPr from '../../assets/Ramsey_Road_p600.jpg'
import RamseyRoadFl from '../../assets/Ramsey_Road_2k.jpg'

import WoodEchoPr from '../../assets/WoodEcho_600.jpg'
import WoodEchoFl from '../../assets/WoodEcho_2k.jpg'
import KrestovnikovyTerracePr from '../../assets/KrestovnikovyTerrace_600.jpg'
import KrestovnikovyTerraceFl from '../../assets/KrestovnikovyTerrace_2k.jpg'
import PavePr from '../../assets/Pave_600.jpg'
import PaveFl from '../../assets/Pave_2k.jpg'
import BaltschugPr from '../../assets/Baltschug_600.jpg'
import BaltschugFl from '../../assets/Baltschug_2k.jpg'
import BellPr from '../../assets/BELL_600.jpg'
import BellFl from '../../assets/BELL_2k.jpg'
import TulumPr from '../../assets/Tulum_600.jpg'
import TulumFl from '../../assets/Tulum_2k.jpg'
import ShiftPr from '../../assets/Shift_600.jpg'
import ShiftFl from '../../assets/Shift_2k.jpg'
import TabakovPr from '../../assets/Tabakov_600.jpg'
import TabakovFl from '../../assets/Tabakov_2k.jpg'
import PatrikPr from '../../assets/Patrik_600.jpg'
import PatrikFl from '../../assets/Patrik_2k.jpg'
import MarcoPoloPr from '../../assets/MarcoPolo_600.jpg'
import MarcoPoloFl from '../../assets/MarcoPolo_2k.jpg'
import KrestovnikovyPr from '../../assets/Krestovnikovy_600.jpg'
import KrestovnikovyFl from '../../assets/Krestovnikovy_2k.jpg'
import KharitonyevskyPr from '../../assets/Kharitonyevsky_600.jpg'
import KharitonyevskyFl from '../../assets/Kharitonyevsky_2k.jpg'
import JangalaPr from '../../assets/Jangala_600.jpg'
import JangalaFl from '../../assets/Jangala_2k.jpg'
import ForestKeeperPr from '../../assets/ForestKeeper_600.jpg'
import ForestKeeperFl from '../../assets/ForestKeeper_2k.jpg'
import VeilPr from '../../assets/VEIL_600.jpg'
import VeilFl from '../../assets/VEIL_2k.jpg'
import OrdynkaPr from '../../assets/Ordynka_600.jpg'
import OrdynkaFl from '../../assets/Ordynka_2k.jpg'
import PalashevskyLanePr from '../../assets/PalashevskyLane_600.jpg'
import PalashevskyLaneFl from '../../assets/PalashevskyLane_2k.jpg'

import.meta.glob('../../assets/*')

const CARD_WIDTH = 350
const CARD_HEIGHT = 350
const GAP = 50

export function Main() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 10 })
  const [columns, setColumns] = useState(3)

  const data = [
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
      id: 25,
      preview: SnakePr,
      name: 'Snake',
      year: 2022,
      fullRes: SnakeFl,
    },
    {
      id: 26,
      preview: ResedentialComplexPr,
      name: 'Resedential Complex',
      year: 2023,
      fullRes: ResedentialComplexFl,
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
      preview: StreetsOfMoscowPr,
      name: 'Streets of Moscow',
      year: 2022,
      fullRes: StreetsOfMoscowFl,
    },
    {
      id: 32,
      preview: OfficeCenterPr,
      name: 'Office Center',
      year: 2022,
      fullRes: OfficeCenterFl,
    },
    {
      id: 33,
      preview: PrismPr,
      name: 'Prism',
      year: 2023,
      fullRes: PrismFl,
    },
    {
      id: 34,
      preview: GrasslandHousePr,
      name: 'Grassland House',
      year: 2023,
      fullRes: GrasslandHouseFl,
    },
    {
      id: 35,
      preview: RamseyRoadPr,
      name: 'Ramsey Road',
      year: 2023,
      fullRes: RamseyRoadFl,
    },
    {
      id: 36,
      preview: WoodEchoPr,
      name: 'Wood Echo',
      year: 2024,
      fullRes: WoodEchoFl,
    },
    {
      id: 37,
      preview: KrestovnikovyTerracePr,
      name: 'Krestovnikovy Terrace',
      year: 2024,
      fullRes: KrestovnikovyTerraceFl,
    },
    {
      id: 38,
      preview: PavePr,
      name: 'Pave',
      year: 2024,
      fullRes: PaveFl,
    },
    {
      id: 39,
      preview: BaltschugPr,
      name: 'Baltschug',
      year: 2024,
      fullRes: BaltschugFl,
    },
    {
      id: 40,
      preview: BellPr,
      name: 'BELL',
      year: 2024,
      fullRes: BellFl,
    },
    {
      id: 41,
      preview: TulumPr,
      name: 'Tulum',
      year: 2024,
      fullRes: TulumFl,
    },
    {
      id: 42,
      preview: ShiftPr,
      name: 'Shift',
      year: 2024,
      fullRes: ShiftFl,
    },
    {
      id: 43,
      preview: TabakovPr,
      name: 'Tabakov',
      year: 2024,
      fullRes: TabakovFl,
    },
    {
      id: 44,
      preview: PatrikPr,
      name: 'Patrik',
      year: 2024,
      fullRes: PatrikFl,
    },
    {
      id: 45,
      preview: MarcoPoloPr,
      name: 'Marco Polo',
      year: 2024,
      fullRes: MarcoPoloFl,
    },
    {
      id: 46,
      preview: KrestovnikovyPr,
      name: 'Krestovnikovy',
      year: 2024,
      fullRes: KrestovnikovyFl,
    },
    {
      id: 47,
      preview: KharitonyevskyPr,
      name: 'Kharitonyevsky',
      year: 2024,
      fullRes: KharitonyevskyFl,
    },
    {
      id: 48,
      preview: JangalaPr,
      name: 'Jangala',
      year: 2024,
      fullRes: JangalaFl,
    },
    {
      id: 49,
      preview: ForestKeeperPr,
      name: 'Forest Keeper',
      year: 2024,
      fullRes: ForestKeeperFl,
    },
    {
      id: 50,
      preview: VeilPr,
      name: 'VEIL',
      year: 2024,
      fullRes: VeilFl,
    },
    {
      id: 51,
      preview: OrdynkaPr,
      name: 'Ordynka',
      year: 2024,
      fullRes: OrdynkaFl,
    },
    {
      id: 52,
      preview: PalashevskyLanePr,
      name: 'Ordynka',
      year: 2024,
      fullRes: PalashevskyLaneFl,
    },
  ].reverse()

  // Обновляем количество колонок в зависимости от ширины контейнера
  const updateColumns = useCallback(() => {
    if (!containerRef.current) return

    const width = containerRef.current.clientWidth
    if (width <= 500) setColumns(1)
    else if (width <= 1025) setColumns(2)
    else setColumns(3)
  }, [])

  useEffect(() => {
    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [updateColumns])

  // Высота всего контента с учетом отступов и карточек
  const totalRows = Math.ceil(data.length / columns)
  const totalHeight = totalRows * (CARD_HEIGHT + GAP) - GAP

  // Функция для обновления видимого диапазона по скроллу
  const onScroll = () => {
    if (!containerRef.current) return

    const scrollTop = containerRef.current.scrollTop
    const containerHeight = containerRef.current.clientHeight

    // Вычисляем верхний и нижний индекс видимого ряда + запас в 1 ряд сверху и снизу
    const startRow = Math.max(
      Math.floor(scrollTop / (CARD_HEIGHT + GAP)) - 1,
      0,
    )
    const endRow = Math.min(
      Math.ceil((scrollTop + containerHeight) / (CARD_HEIGHT + GAP)) + 1,
      totalRows,
    )

    const startIndex = startRow * columns
    const endIndex = Math.min(endRow * columns, data.length)

    setVisibleRange({ start: startIndex, end: endIndex })
  }

  useEffect(() => {
    const current = containerRef.current
    if (!current) return
    onScroll() // инициализация видимого диапазона
    current.addEventListener('scroll', onScroll)
    return () => current.removeEventListener('scroll', onScroll)
  }, [columns, data.length])

  // Карточки для рендера
  const visibleCards = data.slice(visibleRange.start, visibleRange.end)

  return (
    <div ref={containerRef} className={styles.MainWrapper}>
      <div
        className={styles.Renders}
        style={{
          position: 'relative',
          height: totalHeight,
          width: '100%',
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, ${CARD_WIDTH}px)`,
          gap: `${GAP}px`,
        }}
      >
        {visibleCards.map((card, index) => {
          const absoluteIndex = visibleRange.start + index
          const row = Math.floor(absoluteIndex / columns)
          const col = absoluteIndex % columns

          return (
            <div
              key={card.id}
              style={{
                position: 'absolute',
                top: row * (CARD_HEIGHT + GAP),
                left: col * (CARD_WIDTH + GAP),
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
              }}
            >
              <Card
                preview={card.preview}
                name={card.name}
                year={card.year}
                fullRes={card.fullRes}
              />
            </div>
          )
        })}
      </div>
    </div>
  )

  // return (
  //   <div className="Wrapper">
  //     <div className={styles.Renders}>
  //       {data
  //         .map(card => (
  //           <Card
  //             key={card.id}
  //             preview={card.preview}
  //             name={card.name}
  //             year={card.year}
  //             fullRes={card.fullRes}
  //           />
  //         ))
  //         .reverse()}
  //     </div>
  //   </div>
  // )
}
