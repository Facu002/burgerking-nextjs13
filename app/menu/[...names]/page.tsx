import menuData  from "../../assets/data/menuData.json";
import Image from "next/image";
import Link from "next/link";
import styles from "../menu.module.css"
interface Item {
    id: number;
    name: string;
    categoryName: string;
    productName: string;
    image: string;
    productDescription: string;

}

interface Category {
    id: number;
    name: string;
    categoryName: string;
    content: Item[];
}

const categories: Category[] = menuData;

export default function menuWithId({params}: any) {
    let productName = params.names[1];
    // console.log(productName)
    // console.log(categories);
    
    // let filteredProduct = categories.filter(function (el) {
    //     // console.log(el.categoryName);
    //     let ok = productName
    //     el.categoryName == productName ? console.log(ok)
    //     : console.log('nono')
    // })

    // Function to filter and obtain all properties of the nested object
    function filterAndGetProperties(categories : any, productNameToFilter : any) {
        const filteredObjects = categories.map((item : any) => item.content.find((obj: any) => obj.productName === productNameToFilter)).filter(Boolean);
        return filteredObjects;
    }
    
    const productNameToFilter = productName;
    const filteredObjects = filterAndGetProperties(categories, productNameToFilter);
    
    console.log(filteredObjects);
    // console.log(productName);
    return(
        <div className={styles.Product_info_container}>
            {/* <h1>menu with id : {productName}</h1> */}
            {filteredObjects.map((obj:any) => (
                <div className={styles.Product_info_container__contentWrap} key={obj.id}>

                    <ul className={styles.miniNav}>
                        <li><Link href={'/'}>Home</Link></li>
                        /
                        <li><Link href={'/menu'}>Productos</Link></li>
                        /
                        <li><Link href={`/menu/${obj.categoryName}/${obj.productName}`}>{obj.name}</Link></li>
                        
                    </ul>
                    <Image className={styles.product_info__img} width={650} height={500} src={obj.image} alt={obj.name} />
                    <div className={styles.product_info__text}>
                        <h2>{obj.name}</h2>
                        <p>{obj.productDescription}</p>
                    </div>
                    {/* <p>Category: {obj.categoryName}</p> */}
                    {/* <p>Product Name: {obj.productName}</p> */}
                </div>
            ))}
        </div>
    )
};

