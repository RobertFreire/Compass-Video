import { memo } from 'react'
import styles from "../Home/Home.module.css";
import Overlay from '../MainDetails/Overlay/Overlay'
import ButtonsMain from '../MainDetails/ButtonsMain/ButtonsMain';
import { Season} from '../../shared/information';
import { SeasonDetails } from './DetailsMedia';
import pStyles from '../MainDetails/Details/Details.module.css'
import Details from '../MainDetails/Details/Details';

const MovieInfo = memo(({season }: {season: Season}) => {

  if (season) {
  return (
    <section className={styles.home}>
      <div className={styles.content} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${season.poster_path})`}}>
        <div className={styles.main}>
          
          <Overlay>
            <div className={styles.information}>
            <SeasonDetails season={season as Season} />
              <ButtonsMain trailer/>
              <p className={pStyles.description}>{window.innerWidth >= 768 ? season.overview : season.overview.slice(0, 200) + '...'}</p>
            </div>
          </Overlay>
        </div>
      </div>
    </section>
    
  )
}
});




export default MovieInfo