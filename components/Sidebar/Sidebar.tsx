import React, {FC} from 'react'
import styles from './Sidebar.module.scss'
import Header from '../Header'

type PropsType = {
    img?: string
}
const Sidebar: FC<PropsType> = ({img}) => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.wrapper}>
                <Header toggleTitle className={styles.headerSidebar}/>
                <img src={img} alt="bg_image" className={styles.bgImage}/>
            </div>
        </div>
    )
}

export default Sidebar