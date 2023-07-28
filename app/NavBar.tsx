import image  from "../app/assets/images/Burger-King-Logo-CMS.png";
import styles from './page.module.css'
import Link from 'next/link'
import Image from "next/image";
const Links = [
    {
        label: 'Pedi tu combo',
        route: 'https://order.burgerking.com.ar/'
    },
    {
        label : 'Menu',
        route : '/menu'
    },
    {
        label: 'Cupones',
        route: '/coupons'
    },
    {
        label: 'Restaurantes',
        route: '/locations'
    },
    {
        label: 'Novedades',
        route: '/news'
    },
    {
        label: 'Delivery',
        route: '/order'
    },
]
export function NavBar() {
    return (
        <header className={styles.Navbar_container}>
            <Link href={'/'}>
                <Image className={styles.Navbar_container__logo} src={image} alt="burger-king-logo" />
            </Link>
            <div className={styles.Navbar_container__navegation}>
                {
                Links.map(({label, route})=>(
                <a key={route}><Link href={route}>{label}</Link></a>
                ))
                }
            </div>
        </header>
    )
}