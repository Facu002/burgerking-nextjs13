import styles from './page.module.css'
import LocationSearchContainer from './LocationSearch'
import MobileAppSection  from './MobileAppSection'
export default function Home() {
  return (
    <div className={styles.main}>
      <LocationSearchContainer />
      <MobileAppSection />
    </div>
  )
}
