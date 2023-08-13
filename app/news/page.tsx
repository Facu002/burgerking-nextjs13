import styles from './news.module.css'
import NewsContainer from './NewsContainer'
import Link from 'next/link'
    export default async function Menu(){
    return(
        <div className={styles.main}>
            <ul className={styles.miniNav}>
                    <li><Link href={'/'}>Home</Link></li>
                    /
                    <li><Link href={'/news'}>Novedades</Link></li>
            </ul>
            <h2 className={styles.newsTitle}>Novedades</h2>

            <NewsContainer/>
        </div>
    )
}
