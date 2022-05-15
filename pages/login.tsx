import {NextPage} from 'next'
import styles from '../styles/Login.module.scss'
import React from 'react'
import Header from '../components/Header'

const Login: NextPage = () => {
    return (
        <>
            <div className={styles.loginWrapper}>
                <div>
                    <Header toggleTitle color='black'/>
                </div>
                <div>content</div>
            </div>
        </>
    )
}

export default Login