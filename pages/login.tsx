import {NextPage} from 'next'
import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Sidebar from '../components/Sidebar'
import * as L from '../styles/loginStyles'
import { useLoginMutation } from '../redux/api'

const Login: NextPage = () => {

    const [login] = useLoginMutation()

    const handleLogin = async () => {
        await login({
            "email": "demoFS267@example.com",
            "password": "demoFS267_password"
        })
    }

    return (
    <L.LoginWrapper>
        <Sidebar img="background_image_login.png"/>
        <L.ContentWrapper>
            <L.Account>
                <span>Нет учетной записи? </span>
                <L.Reg>Зарегистрироваться</L.Reg>
            </L.Account>
            <L.FormWrapper>
                <div>
                    <L.Login>Войти</L.Login>
                    <L.YourData>Введите свои данные ниже</L.YourData>
                </div>
                <L.Form>
                    <L.Example>
                        <L.Info src="info.svg" alt="info"/>
                        <span>
                                Используй <L.Bold>email</L.Bold> : demo@minimals.ru / <L.Bold>пароль</L.Bold> : demo1234
                        </span>
                    </L.Example>
                    <Input type='text' emailLabel placeholder='demo@minimals.cc'/>
                    <L.Password>
                        <Input type='password' placeholder='Пароль'/>
                    </L.Password>
                    <L.RememberWrapper>
                        <L.RememberIcon src="remember_me.svg" alt="remember_me"/>
                        <L.RememberMe>Запомнить меня</L.RememberMe>
                        <L.RecoveryPassword>Забыли пароль?</L.RecoveryPassword>
                    </L.RememberWrapper>
                    <L.Button onClick={handleLogin}>
                        <Button label='Войти'/>
                    </L.Button>
                </L.Form>
            </L.FormWrapper>
        </L.ContentWrapper>
    </L.LoginWrapper>
    )
}

export default Login