import Image from 'next/image';
import Link from 'next/link';
import styles from './locations.module.css'
import svg from '../assets/images/png-clipart-flag-of-argentina-map-argentina-team-border-leaf.png';

import provinceData  from "../assets/data/bkLocation.json";


interface CoordinatesClass {
    latitud:  number;
    longitud: number;
}
interface LocationCoordinates{
    lat: number;
    lon: number;
}
interface LocalitiesData {
    name: string;
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

            <div className={styles.locationSettings_container}>
                <div className={styles.location_navigation_container}>

                    <ul className={styles.miniNav}>
                            <li><Link href={'/'}>Home</Link></li>
                            /
                            <li><Link href={'/locations'}>Restaurantes</Link></li>
                    </ul>

                    <div className={styles.city_list}>
                        <h2>ELIJA PROVINCIA</h2>
                        <ul>
                            {
                                provinces.map((province:any)=>(
                                    <li><Link href={`/locations/${province.urlName}`}>{province.name}</Link></li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
                <div className={styles.map_container}>
                    <Image width="256" alt="Blank Argentina Map" src={svg} />
                </div>
            </div>
        </div>
    )
};
