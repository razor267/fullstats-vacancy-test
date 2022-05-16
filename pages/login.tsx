import {NextPage} from 'next'
import styles from '../styles/Login.module.scss'
import React from 'react'
import Header from '../components/Header'

const Login: NextPage = () => {
    return (
        <>
            <div className={styles.loginWrapper}>
                <div className={styles.sidebar}>
                    <div className={styles.wrapper}>
                        <Header toggleTitle className={styles.headerSidebar}/>
                        <img src="background_image_login.png" alt="bg_image" className={styles.bgImage}/>
                    </div>
                </div>
                <div>content</div>
            </div>
        </>
    )
}

export default Login