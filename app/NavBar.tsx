'use client'

import image  from "../app/assets/images/Burger-King-Logo-CMS.png";
import styles from './page.module.css'
import Link from 'next/link'
import Image from "next/image";
import {useState, useEffect} from 'react'
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
    const [mobileNavMenu, setMobileNavMenu] = useState(false);
    const [toggleNavMenu, setToggleNavMenu] = useState('closed');

    useEffect(() => {
        if (mobileNavMenu == true) {
            console.log('isOpen');
            setToggleNavMenu('open')
        }else{
            console.log('isClosed');
            setToggleNavMenu('closed')

        }
    }, [mobileNavMenu])
    

    return (
        <header className={styles.Navbar_container}>
                <Link href={'/'} onClick={()=>setMobileNavMenu(false)}>
                    <Image className={styles.Navbar_container__logo} src={image} alt="burger-king-logo" />
                </Link>
                <div className={styles.Navbar_container__navegation}>
                    {
                    Links.map(({label, route})=>(
                    <Link key={route} href={route}>{label}</Link>
                    ))
                    }
                </div>
                <div className={styles.Navbar_container__hamburger} onClick={()=>setMobileNavMenu(!mobileNavMenu)}>
                    {
                        mobileNavMenu ? 
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#502314" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="40" height="40" viewBox="0 0 24 24" stroke-width="1.5" stroke="#502314" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                        </svg>
                    }
                </div>
            <div className={toggleNavMenu}>
                <div>
                    {
                    Links.map(({label, route})=>(
                    <Link onClick={()=>setMobileNavMenu(false)} key={route} href={route}>{label}</Link>
                    ))
                    }
                </div>
            </div>
        </header>
    )
}