import {NextPage} from 'next'
import styles from '../styles/Registration.module.scss'
import React from 'react'
import Sidebar from '../components/Sidebar'
import Input from '../components/Input'
import Button from '../components/Button'
import * as R from '../styles/registrationStyles'

const Registration: NextPage = () => {
    return (
        <>
            {/*<div className={styles.registrationWrapper}>
                <Sidebar img='background_image_registration.png'/>
                <div className={styles.contentWrapper}>
                    <div className={styles.loginLink}>
                        <span>Уже есть аккаунт ? </span>
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
            </div>*/}

            <R.RegistrationWrapper>
                <Sidebar img='background_image_registration.png'/>
                <R.ContentWrapper>
                    <R.LoginLink>
                        <span>Уже есть аккаунт? </span>
                        <R.Login>Войти</R.Login>
                    </R.LoginLink>
                    <R.FormWrapper>
                        <R.Header>
                            <R.Reg>Зарегистрироваться</R.Reg>
                            <R.RegDescription>Зарегистрируйтесь, чтобы начать работу с сервисом:</R.RegDescription>
                        </R.Header>
                        <R.Form>
                            <R.Name>
                                <Input type='text' placeholder='Имя'/>
                                <Input type='text' placeholder='Фамилия'/>
                            </R.Name>
                            <Input type='text' placeholder='Email'/>
                            <Input type='password' placeholder='Пароль'/>
                            <R.Button>
                                <Button label='Зарегистрироваться'/>
                            </R.Button>
                            <R.Footer>
                                <span>Регистрируясь, я соглашаюсь с минимальными условиями обслуживания и </span>
                                <R.Privacy>Политикой конфиденциальности.</R.Privacy>
                            </R.Footer>
                        </R.Form>
                    </R.FormWrapper>
                </R.ContentWrapper>
            </R.RegistrationWrapper>
        </>
    )
}

export default Registration