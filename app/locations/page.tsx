import Image from 'next/image';
import Link from 'next/link';
import styles from './locations.module.css'

import provinceData  from "../assets/data/bkLocation.json";


interface CoordinatesClass {
    latitud:  number;
    longitud: number;
}

interface LocationCoordinates{
    latitud: number;
    longitud: number;
}
interface LocalitiesData {
    name: string;
    maps: string;
    dir: string;
    coordinates: LocationCoordinates[] | CoordinatesClass;
}
interface CityData {
    name: string;
    urlName:string;
    localidades: LocalitiesData[];
}
interface ProvinceData {
    name: string;
    urlName: string;
    satImage: string;
    cities: CityData[];
}

const provinces : ProvinceData[] = provinceData;


export default function page(params:any) {
    return (
    <div className={styles.main}>

        <div className={styles.location_navigation_container}>
            <ul className={styles.miniNav}>
                            <li><Link href={'/'}>Home</Link></li>
                            /
                            <li><Link href={'/locations'}>Restaurantes</Link></li>
            </ul>
            <div className={styles.province_list}>
                <h2>ELIJA PROVINCIA</h2>
                <ul>
                    {
                    provinces.map((province:any)=>(
                        <div key={province.urlName} className={styles.province_list__wrapper}>
                        
                        <div className={styles.province_list__provinceContainer}>
                            <h3>{province.name}</h3>
                            <Image height={300} width={200} src={`https://firebasestorage.googleapis.com/v0/b/bk-next13.appspot.com/o/${province.urlName}.png?alt=media&token=d9aae900-4370-490b-b2ce-6e0abbfb06af`} alt={`${province.urlName}`} />
                        </div>

                            <div className={styles.province_list__cityContainer}>
                            {province.cities.map((city:any)=>(
                                <div key={city.name} className={styles.cityInformation}>
                                    <h3>{city.name}</h3>
                                    <div className={styles.localInformation_wrapper}>
                                    {
                                    city.localidades.map((local:any)=>(
                                    <div key={local.name} className={styles.localInformation}>
                                        <span>{local.name}</span>
                                        <p>{local.dir}</p>
                                        <a target="_blank" href={local.maps}>
                                            Abir Direccion 
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin-share" width="15" height="15" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#E54929" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                            <path d="M12.02 21.485a1.996 1.996 0 0 1 -1.433 -.585l-4.244 -4.243a8 8 0 1 1 13.403 -3.651" />
                                            <path d="M16 22l5 -5" />
                                            <path d="M21 21.5v-4.5h-4.5" />
                                            </svg>
                                        </a>
                                    </div>))
                                    }
                                    </div>
                                </div>))}
                            </div>
                        </div>))
                            }
                        </ul>
                    </div>
                </div>
        </div>
    )
};
