'use client'
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
    
    console.log(selectedProvince, provinceName, cityUrlName);

    
    if (!selectedProvince) {
        return <div>Province not found</div>;
    }


    let foundCity = null;

    // Iterate through the cities array to find the matching city
    for (const provinceCity of selectedProvince.cities) {
        if (provinceCity.urlName === cityUrlName) {
            foundCity = provinceCity;
            break; // Exit loop once the city is found
        }
    }
    console.log("Found City:", foundCity);
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
                                    <h2>{provinceName}</h2>
                                {
                                // selectedProvince.cities.map((city:any)=>(<h2 key={city.urlName}>{city.name}</h2>))
                                    // <span>{}</span>
                                    foundCity?.localidades.map((zona:any)=>(
                                        <div>
                                            <span key={zona.name}>{zona.name}</span>
                                            <p>{zona.coordinates.latitud}</p>
                                            <p>{zona.coordinates.longitud}</p>
                                        </div>
                                    ))
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
