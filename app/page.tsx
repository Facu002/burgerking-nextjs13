import styles from './page.module.css'
import LocationSearchContainer from './LocationSearch'
import MobileAppSection  from './MobileAppSection'
import	Banner from './Banner'
export default function Home() {
  return (
    <div className={styles.main}>
      <Banner/>
      <LocationSearchContainer />
      <MobileAppSection />
    </div>
  )
}
