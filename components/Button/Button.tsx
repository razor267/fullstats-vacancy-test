import React, {FC} from 'react'
import styles from './Button.module.scss'

type PropsType = {
    label: string
}
const Button: FC<PropsType> = ({label}) => {
    return (
        <button className={styles.button}>
            <div className={styles.buttonText}>{label}</div>
        </button>
    )
}

export default Button