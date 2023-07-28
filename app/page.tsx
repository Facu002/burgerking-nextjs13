import Image from 'next/image'
import styles from './page.module.css'
import { NavBar } from './NavBar'
import LocationSearchContainer from './LocationSearch'
export default function Home() {
  return (
    <div className={styles.main}>
      {/* <NavBar /> */}
      {/* <h1>Home</h1> */}
      <LocationSearchContainer />
    </div>
  )
}
