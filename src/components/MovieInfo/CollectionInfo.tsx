import { memo } from 'react'
import styles from "../Home/Home.module.css";
import Overlay from '../MainDetails/Overlay/Overlay'
import ButtonsMain from '../MainDetails/ButtonsMain/ButtonsMain';
import { Collection, Season} from '../../shared/information';
import { CollectionsDetails, SeasonDetails } from './DetailsMedia';
import pStyles from '../MainDetails/Details/Details.module.css'

const CollectionInfo = memo(({collection }: {collection: Collection}) => {

  if (collection) {
  return (
    <section className={styles.home}>
      <div className={styles.content} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${collection.backdrop_path})`}}>
        <div className={styles.main}>
          <Overlay>
            <div className={styles.information}>
            <CollectionsDetails collection={collection as Collection} />
            </div>
          </Overlay>
        </div>
      </div>
    </section>
    
  )
}
});




export default CollectionInfo