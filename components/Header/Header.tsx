import React, {DetailedHTMLProps, FC, HTMLAttributes} from 'react'
import styles from './Header.module.scss'
import cn from 'classnames'

interface PropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    toggleTitle? : boolean,
    toggleLogin?: boolean
}
const Header:FC<PropsType> = ({toggleLogin, toggleTitle,color, className}) => {
    return (
        <div className={cn(styles.header, className)}>
            <img src='logo.svg' alt="logo" className={styles.logo}/>
            {toggleTitle && <div className={styles.title}>FullStats</div>}
            {toggleLogin && <div className={styles.login}>Войти</div>}
        </div>
    )
}

export default Header