import Image from 'next/image';
import newsData from '../assets/data/news.json'
import styles from './news.module.css'
import Link from 'next/link';

interface NewsInformation {
    id: number;
    name: string;
    urlName: string;
    moreInfo: string;
    description: string;
    image: string;
}

const news: NewsInformation[] = newsData;

export default function NewsContainer(props : any) {
    return(
        <div className={styles.NewsListContainer}>
            
            {news.map((category: any) => (
                <div className={styles.articleContainer}  key={category.id}>

                    <Link href={`./news/${category.urlName}`} key={category.id} >
                        <Image height={250} width={300} src={category.image} alt={category.name}></Image>
                    </Link>
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>

                </div>
            ))}
        </div>
    )
};
