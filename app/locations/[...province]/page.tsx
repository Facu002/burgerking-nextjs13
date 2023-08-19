import provinceData  from "../../assets/data/bkLocation.json";
import Image from "next/image";
import Link from "next/link";
import styles from '../locations.module.css'

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

let provinceSelected : ProvinceData[] = provinceData;


export default function ProvinceSelectedComponent({params}:any) {

    let cityUrlName = params.province[1];

    let provinceName = params.province[0];
    
    const selectedProvince = provinceSelected.find(province => province.urlName === provinceName);
    
    if (!selectedProvince) {
        return <div>Province not found</div>;
    }
    return(
            
            <div className={styles.main}>
                <div className={styles.locationSettings_container}>
                    {
                        cityUrlName ? 
                        <>
                            <div className={styles.location_navigation_container}>
                                <ul className={styles.miniNav}>
                                    <li><Link href={'/'}>Home</Link></li>
                                    /
                                    <li><Link href={'/locations'}>Restaurantes</Link></li>
                                </ul>
                                <div className={styles.city_list}>
                                {
                                    selectedProvince.cities.map((city:any)=>(<h2>{city.name}</h2>))
                                }
                                </div>
                            </div>
                            <div className={styles.map_container}>
                                <Image height={300} width={200} src={`https://firebasestorage.googleapis.com/v0/b/bk-next13.appspot.com/o/${selectedProvince.urlName}.png?alt=media&token=d9aae900-4370-490b-b2ce-6e0abbfb06af`} alt={`${selectedProvince.urlName}`} />
                            </div>
                        </>
                        :
                        <>
                            <div className={styles.location_navigation_container}>
                                <ul className={styles.miniNav}>
                                        <li><Link href={'/'}>Home</Link></li>
                                        /
                                        <li><Link href={'/locations'}>Restaurantes</Link></li>
                                </ul>
                                <div className={styles.city_list}>
                                    <h1>{selectedProvince.name}</h1>
                                    <ul>
                                        {
                                        selectedProvince.cities.map((city:any)=>(
                                            <li><Link href={`/locations/${selectedProvince.urlName}/${city.urlName}`}>{city.name}</Link></li>
                                        ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.map_container}>
                                <Image height={300} width={200} src={`https://firebasestorage.googleapis.com/v0/b/bk-next13.appspot.com/o/${selectedProvince.urlName}.png?alt=media&token=d9aae900-4370-490b-b2ce-6e0abbfb06af`} alt={`${selectedProvince.urlName}`} />
                            </div>
                        </>
                    }
                </div>
            </div>

    )
};
