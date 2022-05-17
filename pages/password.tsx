import {NextPage} from 'next'
import React from 'react'
import styles from '../styles/Password.module.scss'
import Header from '../components/Header'
import Input from '../components/Input'
import Button from '../components/Button'


const Password: NextPage = () => {
    return (
        <div className={styles.wrapper}>
            <Header toggleTitle className={styles.header}/>
            <div className={styles.form}>
                <div className={styles.text}>
                    <div className={styles.headerText}>
                        Забыли свой пароль?
                    </div>
                    <div className={styles.description}>
                        Пожалуйста, введите адрес электронной почты, связанный с вашей учетной записью, и мы отправим
                        вам ссылку для сброса пароля.
                    </div>
                </div>
                <div className={styles.inputAndButton}>
                    <Input type='text' placeholder='Email'/>
                    <div className={styles.button}>
                        <Button label='Восстановить пароль'/>
                    </div>
                    <div className={styles.back}>Назад</div>
                </div>
            </div>
        </div>
    )
}

export default Password