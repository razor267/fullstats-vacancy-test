import type {NextPage} from 'next'
import React from 'react'
import Button from '../components/Button'
import * as I from '../styles/indexStyles'

const Home: NextPage = () => {

    return (
        <>
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