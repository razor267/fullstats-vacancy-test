import type {NextPage} from 'next'
import React from 'react'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
    return (
        <>
            <div className={styles.backgroundLay}>
                <img src="background_image_home.png" alt="bg_image" className={styles.bgImage}/>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <img src='logo.svg' alt="logo" className={styles.logo}/>
                    <div className={styles.title}>FullStats</div>
                    <div className={styles.login}>Войти</div>
                </div>
                <div className={styles.content}>
                    <div className={styles.bigText}>
                        Start a <br/>
                        new project with <span className={styles.blueText}>FullStats</span>
                    </div>
                    <div className={styles.description}>Платформа для аналитики поможет вам в выборе товара или ниши, анализа конкурентов,&nbsp; увеличении продаж и в ускорении оборачиваемости вашего товара</div>
                    <button className={styles.button}>Попробовать сейчас</button>
                </div>
            </div>
        </>
    )
}

export default Home