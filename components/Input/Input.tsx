import React, {FC} from 'react'
import styles from './Input.module.scss'

type PropsType = {
    type: 'text' | 'password'
    placeholder: string
    emailLabel?: boolean
}
const Input: FC<PropsType> = ({placeholder, type, emailLabel}) => {
    return (
        <div className={styles.wrapper}>
            {emailLabel && <div className={styles.emailLabel}>Email</div>}
            <input
                type={type}
                placeholder={placeholder}
            />
            {type === 'password' && <img src='eye.svg' alt="logo" className={styles.eye}/>}
        </div>
    )
}

export default Input