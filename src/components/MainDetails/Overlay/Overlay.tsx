import React, { ReactNode } from 'react'
import styles from './Overlay.module.css'

interface OverlayProps{
    children: ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ children }) => {
    return (
        <div className={styles.overlay_1}>
            <div className={styles.overlay_2}>
                {children}
            </div>
        </div>
    )
}

export default Overlay