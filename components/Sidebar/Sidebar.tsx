import React, {FC} from 'react'
import Header from '../Header'
import * as S from './styles'

type PropsType = {
    img?: string
}
const Sidebar: FC<PropsType> = ({img}) => {
    return (
        <S.Sidebar>
            <S.Wrapper>
                <Header toggleTitle sidebar/>
                <S.BgImage src={img} alt='bgImage'/>
            </S.Wrapper>
        </S.Sidebar>
    )
}

export default Sidebar