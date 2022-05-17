import {NextPage} from 'next'
import styles from '../styles/Registration.module.scss'
import React from 'react'
import Sidebar from '../components/Sidebar'
import Input from '../components/Input'
import Button from '../components/Button'

const Registration: NextPage = () => {
    return (
        <>
            <div className={styles.registrationWrapper}>
                <Sidebar img='background_image_registration.png'/>
                <div className={styles.contentWrapper}>
                    <div className={styles.loginLink}>
                        <span>Уже есть аккаунт? </span>
                        <span className={styles.login}>Войти</span>
                    </div>
                    <div className={styles.formWrapper}>
                        <div className={styles.header}>
                            <div className={styles.reg}>Зарегистрироваться</div>
                            <div className={styles.regDescription}>Зарегистрируйтесь, чтобы начать работу с сервисом:</div>
                        </div>
                        <div className={styles.form}>
                            <div className={styles.name}>
                                <Input type='text' placeholder='Имя'/>
                                <Input type='text' placeholder='Фамилия'/>
                            </div>
                            <Input type='text' placeholder='Email'/>
                            <Input type='password' placeholder='Пароль'/>
                            <div className={styles.button}>
                                <Button label='Зарегистрироваться'/>
                            </div>
                            <div className={styles.footer}>
                                <span>Регистрируясь, я соглашаюсь с минимальными условиями обслуживания и </span>
                                <span className={styles.privacy}>Политикой конфиденциальности.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration