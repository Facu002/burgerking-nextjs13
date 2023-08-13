import Image from 'next/image';
import newsData from '../../assets/data/news.json'
import styles from '../news.module.css'
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


export default function newsArticle({params}: any) {
    let newsArticleName = params.articleInfo;
    
    function filterAndGetProperties(news: any, newsArticleName:any){
        
        const filteredItem = news.filter((item:any) => item.urlName == newsArticleName);
        
        return filteredItem[0]
    }
    const filteredObjects = filterAndGetProperties(news, newsArticleName)
    console.log(typeof filteredObjects)
    return(
        <div className={styles.main}>
                <ul className={styles.miniNav}>
                    <li><Link href={'/'}>Home</Link></li>
                    /
                    <li><Link href={'/news'}>Novedades</Link></li>
                    /
                    <li><Link href={`/menu/news/${filteredObjects.name}`}>{filteredObjects.name}</Link></li>
                    
                </ul>
            
            {
                <div className={styles.news_info_container__contentWrap} key={filteredObjects.id}>


                    <h2>{filteredObjects.name}</h2>
                
                    <Image className={styles.news_info__img} width={900} height={600} src={filteredObjects.image} alt={filteredObjects.name} />

                    <div className={styles.news_info__text}>
                        <p>{filteredObjects.description}</p>
                        <p>{filteredObjects.moreInfo}</p>
                    </div>
                
                </div>
            }
        </div>
    )
};
