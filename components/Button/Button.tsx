import React, {FC} from 'react'
import * as B from './styles'

type PropsType = {
    label: string
}
const Button: FC<PropsType> = ({label}) => {
    return (
        <B.ButtonStyled>
            <B.ButtonText>{label}</B.ButtonText>
        </B.ButtonStyled>
    )
}

export default Button