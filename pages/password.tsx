import {NextPage} from 'next'
import React from 'react'
import Header from '../components/Header'
import Input from '../components/Input'
import Button from '../components/Button'
import * as P from '../styles/passwordStyles'

const Password: NextPage = () => {
    return (
        <P.Wrapper>
            <Header toggleTitle passwordPage/>
            <P.FormStyled>
                <P.Text>
                    <P.HeaderText>Забыли свой пароль?</P.HeaderText>
                    <P.Description>
                        Пожалуйста, введите адрес электронной почты, связанный с вашей учетной записью, и мы отправим
                        вам ссылку для сброса пароля.
                    </P.Description>
                </P.Text>
                <P.InputAndButton>
                    <Input type='text' placeholder='Email'/>
                    <P.ButtonStyled>
                        <Button label='Восстановить пароль'/>
                    </P.ButtonStyled>
                    <P.Back>Назад</P.Back>
                </P.InputAndButton>
            </P.FormStyled>
        </P.Wrapper>
    )
}

export default Password