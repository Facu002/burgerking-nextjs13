import Link from 'next/link'
import styles from './page.module.css'
export function Footer(params:any) {
    return(
        <div className={styles.FooterContainer}>
            <div className={styles.footer_top}>

                <div className={styles.footer_top__img}>
                    <img src="https://s3-eu-central-1.amazonaws.com/www.burgerking.com.ar.v2/wp-media-folder-burger-king-argentina//home/ubuntu/wordpress/web/app/uploads/sites/5/2021/03/Logo-3.svg" alt="logo3" />
                </div>
                {/* <div className={styles.footer_top__spacer}></div> */}
                <div className={styles.footer_top__navigation}>

                <div className={styles.footer_top__links}>
                    <h4>Info BK</h4>
                    <ul>
                        <li><Link href={'./menu'}>Menu</Link></li>
                        <li><Link href={'./locations'}>Restaurantes</Link></li>
                        <li><Link href={'./coupons'}>Cupones</Link></li>
                    </ul>
                </div>
                <div className={styles.footer_top__links}>
                    <h4>Información</h4>
                    <ul>
                        <li><Link href={'./'}>Sitemap</Link></li>
                    </ul>
                </div>
                <div className={styles.footer_top__links}>
                    <h4>Info BK</h4>
                    <ul>
                        <li><Link href={'./'}>Contactanos</Link></li>
                        <li><Link href={'./'}>Empleo</Link></li>
                        <li><Link href={'./'}>Delivery</Link></li>
                        <li><Link href={'./'}>Politica de privacidad</Link></li>
                        <li><Link href={'./'}>Defensa de las y los consumidores</Link></li>
                    </ul>
                </div>
                </div>
            </div>
            <hr />
            <div className={styles.footer_bottom}>
                <span>TM © 2023 Burger King Corporation. Todos los derechos reservados.</span>
                <div className={styles.footer_bottom__social}>
                    <Link href={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="40" height="40" viewBox="0 0 24 24" stroke-width="1" stroke="#F5ECDC" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg>
                    </Link>
                    <Link href={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1" stroke="#F5ECDC" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                        <path d="M16.5 7.5l0 .01" />
                        
                    </svg>
                    </Link>
                    <Link href={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-youtube" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1" stroke="#F5ECDC" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                        <path d="M10 9l5 3l-5 3z" />
                    </svg>
                    </Link>
                    <Link href={'/'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1" stroke="#F5ECDC" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                    </svg>
                    </Link>
                </div>
            </div>
        </div>
        

    )
};
