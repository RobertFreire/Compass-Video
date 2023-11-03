import React from 'react'
import styles from './ButtonsMain.module.css';
import MoreInfo from '../../Buttons/MoreInfo/MoreInfo'
import PlusBtn from '../../Buttons/PlusBtn/PlusBtn'
import FavBtn from '../../Buttons/FavBtn/FavBtn'
import SeeNow from '../../Buttons/see-now/SeeNow'


const ButtonsMain = ({ trailer }: { trailer?: boolean }) => {
    return (
        <div className={styles.buttons}>
            <SeeNow />
            <MoreInfo trailer={trailer} />
            <div className={styles.circlesButtons}>
            <PlusBtn />
            <FavBtn />
            </div>
        </div>
    )
}

export default ButtonsMain