import React, {FC} from 'react'
import styles from './Header.module.scss'
import cn from 'classnames'

type PropsType = {
    toggleTitle? : boolean,
    toggleLogin?: boolean,
    color: 'white' | 'black'
}
const Header:FC<PropsType> = ({toggleLogin, toggleTitle,color}) => {
    return (
        <div className={cn(styles.header, {
            [styles.black]: color === 'black',
            [styles.white]: color === 'white'
        })}>
            <img src='logo.svg' alt="logo" className={styles.logo}/>
            {toggleTitle && <div className={styles.title}>FullStats</div>}
            {toggleLogin && <div className={styles.login}>Войти</div>}
        </div>
    )
}

export default Header