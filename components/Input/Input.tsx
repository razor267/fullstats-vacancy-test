import React, {FC} from 'react'
import * as I from './styled'

type PropsType = {
    type: 'text' | 'password'
    placeholder: string
    emailLabel?: boolean
}
const Input: FC<PropsType> = ({placeholder, type, emailLabel}) => {
    return (
        <I.Wrapper>
            {emailLabel && <I.EmailLabel>Email</I.EmailLabel>}
            <I.InputStyled type={type} placeholder={placeholder}/>
            {type === 'password' && <I.Eye src='eye.svg' alt='logo'/>}
        </I.Wrapper>
    )
}

export default Input