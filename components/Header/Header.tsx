import React, {DetailedHTMLProps, FC, HTMLAttributes} from 'react'
import styles from './Header.module.scss'
import cn from 'classnames'
import * as H from './styles'
import * as S from '../Sidebar/styles'

interface PropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    toggleTitle? : boolean,
    toggleLogin?: boolean
    sidebar?: boolean,
    passwordPage?: boolean
}
const Header:FC<PropsType> = ({toggleLogin, toggleTitle, className, sidebar, passwordPage}) => {
    return (
     /*   <div className={cn(styles.header, className)}>
            <img src='logo.svg' alt="logo" className={styles.logo}/>
            {toggleTitle && <div className={styles.title}>FullStats</div>}
            {toggleLogin && <div className={styles.login}>Войти</div>}
        </div>*/

        <H.Header sidebar={sidebar} passwordPage={passwordPage}>
            <H.LogoHeader src='logo.svg' alt='logo'/>
            {toggleTitle && <H.TitleHeader>FullStats</H.TitleHeader>}
            {toggleLogin && <H.LoginHeader>Войти</H.LoginHeader>}
        </H.Header>
    )
}

export default Header