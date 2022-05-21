import React, {FC} from 'react'
import styles from './Sidebar.module.scss'
import Header from '../Header'
import * as S from './styles'

type PropsType = {
    img?: string
}
const Sidebar: FC<PropsType> = ({img}) => {
    return (
        // <div className={styles.sidebar}>
        //     <div className={styles.wrapper}>
        //         <Header toggleTitle className={styles.headerSidebar}/>
        //         <img src={img} alt="bg_image" className={styles.bgImage}/>
        //     </div>
        // </div>
        <S.Sidebar>
            <S.Wrapper>
                <S.HeaderSidebar>
                    <Header toggleTitle/>
                </S.HeaderSidebar>
                <S.BgImage src={img} alt='bgImage'/>
            </S.Wrapper>
        </S.Sidebar>
    )
}

export default Sidebar