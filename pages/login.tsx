import {NextPage} from 'next'
import styles from '../styles/Login.module.scss'
import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'

const Login: NextPage = () => {
    return (
        <div className={styles.loginWrapper}>
            <Sidebar img="background_image_login.png"/>
            <div className={styles.contentWrapper}>
                <div className={styles.account}>
                    <span>Нет учетной записи? </span>
                    <span className={styles.reg}>Зарегистрироваться</span>
                </div>
                <div className={styles.formWrapper}>
                    <div>
                        <div className={styles.login}>Войти</div>
                        <div className={styles.yourData}>Введите свои данные ниже</div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.example}>
                            <img src="info.svg" alt="info" className={styles.info}/>
                            <span>
                                    Используй <span className={styles.bold}>email</span> : demo@minimals.ru / <span
                                className={styles.bold}>пароль</span> : demo1234
                                </span>
                        </div>
                        <Input type='text' emailLabel placeholder='demo@minimals.cc'/>
                        <div className={styles.password}>
                            <Input type='password' placeholder='Пароль'/>
                        </div>
                        <div className={styles.rememberWrapper}>
                            <img src="remember_me.svg" alt="remember_me" className={styles.rememberIcon}/>
                            <div className={styles.rememberMe}>Запомнить меня</div>
                            <div className={styles.recoveryPassword}>Забыли пароль?</div>
                        </div>
                        <div className={styles.button}>
                            <Button label='Войти'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login