import Image from 'next/image';
import menuData from '../assets/data/menuData.json'
import styles from './menu.module.css'
import Link from 'next/link';
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

export default function FoodTypeContainer(props : any) {
    return(
        <div className={styles.MenuListContainer}>
            {categories.map((category: any) => (
                <div className={styles.category_container} key={category.id}>
                    <h2>{category.name}</h2>

                    <div className={styles.category_products__content}>
                        {category.content.map((item: any) => (
                            <Link href={`./menu/${item.categoryName}/${item.productName}`} key={item.id} className={styles.category_products}>
                                <div className={styles.ImageContainer}>
                                    <Image width={500} height={500} className={styles.Image} src={item.image} alt={item.name} />
                                </div>
                                <p>{item.name}</p>
                            </Link>
                        ))}
                    </div>

                </div>
            ))}
        </div>
    )
};
