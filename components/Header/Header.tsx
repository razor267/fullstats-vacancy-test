import React, {DetailedHTMLProps, FC, HTMLAttributes} from 'react'
import * as H from './styles'

interface PropsType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    toggleTitle? : boolean,
    toggleLogin?: boolean
    sidebar?: boolean,
    passwordPage?: boolean
}
const Header:FC<PropsType> = ({toggleLogin, toggleTitle, className, sidebar, passwordPage}) => {
    return (
        <H.Header sidebar={sidebar} passwordPage={passwordPage}>
            <H.LogoHeader src='logo.svg' alt='logo'/>
            {toggleTitle && <H.TitleHeader>FullStats</H.TitleHeader>}
            {toggleLogin && <H.LoginHeader>Войти</H.LoginHeader>}
        </H.Header>
    )
}

export default Header