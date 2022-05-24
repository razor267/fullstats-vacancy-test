import type {NextPage} from 'next'
import React from 'react'

import styles from '../styles/Home.module.scss'
import Button from '../components/Button'
import * as I from '../styles/indexStyles'

const Home: NextPage = () => {

    return (
        <>
            {/*<div className={styles.backgroundLay}>
                <img src="background_image_home.png" alt="bg_image" className={styles.bgImage}/>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.transform}>
                    <div className={styles.header}>
                        <img src='logo.svg' alt="logo" className={styles.logo}/>
                        <div className={styles.title}>FullStats</div>
                        <div className={styles.login}>Войти</div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.bigText}>
                        Start a&nbsp;<br/>
                        new project <br/> with <span className={styles.blueText}>FullStats</span>
                    </div>
                    <div className={styles.description}>Платформа для аналитики поможет вам в выборе товара или ниши, анализа конкурентов,&nbsp; увеличении продаж и в ускорении оборачиваемости вашего товара</div>
                    <div className={styles.button}>
                        <Button label='Попробовать сейчас'/>
                    </div>
                </div>
            </div>*/}

            <I.BackgroundLay>
                <I.BgImage src="background_image_home.png" alt="bg_image"/>
            </I.BackgroundLay>
            <I.Wrapper>
                <I.Transform>
                    <I.Header>
                        <I.Logo src='logo.svg' alt="logo"/>
                        <I.Title>FullStats</I.Title>
                        <I.Login>Войти</I.Login>
                    </I.Header>
                </I.Transform>
                <I.Content>
                    <I.BigText>
                        Start a&nbsp;<br/>
                        new project <br/> with <I.BlueText>FullStats</I.BlueText>
                    </I.BigText>
                    <I.Description>Платформа для аналитики поможет вам в выборе товара или ниши, анализа
                        конкурентов,&nbsp; увеличении продаж и в ускорении оборачиваемости вашего товара</I.Description>
                    <I.Button>
                        <Button label='Попробовать сейчас'/>
                    </I.Button>
                </I.Content>
            </I.Wrapper>
        </>
    )
}

export default Home