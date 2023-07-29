import styles from './menu.module.css'
import FoodTypeContainer from './FoodTypeContainer'

    export default async function Menu(){
    return(
        <div className={styles.main}>
            <FoodTypeContainer></FoodTypeContainer>
        </div>
    )
}
