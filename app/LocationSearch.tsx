'use client'
import Image from "next/image"
import { useState } from "react"
import styles from './page.module.css'
import LocationImage from './assets/images/BK_ILLUSTRATION_PICKLE_EYE_MASK_ST_FC.png'
export default function LocationSearchContainer(){
    const [searchValue, setSearchValue] = useState<string>('');

    return(
        <article className={styles.LocalSearch_container}>
            <div className={styles.LocalSearch_container__text}>
                <h4>Locales</h4>
                <span>Encontrá el mas cercano</span>

                <div className={styles.inputContainer}>
                    <input type="text" name="search" id="search" placeholder="Tu ciudad o direccion" 
                    value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                    <a  target="_blank" href={`https://www.google.com.ar/maps/search/${encodeURIComponent(searchValue)},+burger+king`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width="30" height="30" viewBox="0 0 24 24" strokeWidth="2.5" stroke="#502314" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M10 14l11 -11" />
                            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className={styles.LocalSearch_container__image}>
                <Image src={LocationImage} alt="searchRestaurant"></Image>
            </div>
        </article>
    )
}