import React, {FC} from 'react'
import styles from './Button.module.scss'
import * as B from './styles'

type PropsType = {
    label: string
}
const Button: FC<PropsType> = ({label}) => {
    return (
        /*<button className={styles.button}>
            <div className={styles.buttonText}>{label}</div>
        </button>*/

        <B.ButtonStyled>
            <B.ButtonText>{label}</B.ButtonText>
        </B.ButtonStyled>
    )
}

export default Button