import styles from './page.module.css'
import appstore from './assets/images/app__store.png'
import googleplay from './assets/images/google_play.png'
import rappi from './assets/images/Rappi.jpg'
import pedidosya from './assets/images/PedidosYa.jpg'

import appLandigMockUp from './assets/images/landing_page_image-croped-5-1-1.png'

import Image from 'next/image'

export default function MobileAppSection() {
    return(
        <div className={styles.MobileAppSection_container}>
            <div className={styles.callDelivery_container}>
                <div className={styles.callDelivery_text}>
                    <h2>BK Delivery</h2>
                    <span>Como vos querés, donde vos querés</span>
                    <div className={styles.selectDelivery_container}>
                        <label>
                            <input className={styles.inputDelivery} type="radio" name="test" checked/>
                            <Image width={180} height={80} src={rappi} alt="Option 1" />
                        </label>
                        <label>
                            <input className={styles.inputDelivery} type="radio" name="test" />
                            <Image width={180} height={80} src={pedidosya} alt="Option 2"/>
                        </label>
                    </div>
                    <button className={styles.callDelivery__actionBtn}>Hacé tu pedido</button>
                </div>
            </div>
            <div className={styles.downloadApp_container}>
                <Image  alt='appLandingMockUp' width={450} height={400} src={appLandigMockUp}/>
                <div className={styles.dowloadApp_text}>
                    <h2>Descargá la APP y disfrutá mucho más por mucho menos </h2>
                    <div className={styles.toAppStore}>
                        <Image alt='googleplay' height={50} width={150} src={googleplay}/>
                        <Image alt='appstore' height={50} width={150} src={appstore}/>
                    </div>
                    <p>Apple y el logotipo de Apple son marcas comerciales de Apple Inc., registradas en EE. UU. Y otros países. App Store es una marca de servicio de Apple Inc. Google Play es una marca comercial de Google Inc. Se aplican términos.</p>
                </div>
            </div>
        </div>
    )
};
