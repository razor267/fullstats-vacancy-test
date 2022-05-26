import {NextPage} from 'next'
import React from 'react'
import Sidebar from '../components/Sidebar'
import Input from '../components/Input'
import Button from '../components/Button'
import * as R from '../styles/registrationStyles'
import {useRegistrationMutation} from '../redux/api'

const Registration: NextPage = () => {

    const [registration] = useRegistrationMutation()

    const handleRegistration = async () => {
        await registration({
            "username": "demoFS267",
            "email": "demoFS267@example.com",
            "password": "demoFS267_password"
        })
    }

    return (
        <>
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
                            <R.Button onClick={handleRegistration}>
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