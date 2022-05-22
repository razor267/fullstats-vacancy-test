import React, {FC} from 'react'
import styles from './Input.module.scss'
import * as I from './styled'

type PropsType = {
    type: 'text' | 'password'
    placeholder: string
    emailLabel?: boolean
}
const Input: FC<PropsType> = ({placeholder, type, emailLabel}) => {
    return (
        /*  <div className={styles.wrapper}>
              {emailLabel && <div className={styles.emailLabel}>Email</div>}
              <input
                  type={type}
                  placeholder={placeholder}
              />
              {type === 'password' && <img src='eye.svg' alt="logo" className={styles.eye}/>}
          </div>*/

        <I.Wrapper>
            {emailLabel && <I.EmailLabel>Email</I.EmailLabel>}
            <I.InputStyled type={type} placeholder={placeholder}/>
            {type === 'password' && <I.Eye src='eye.svg' alt='logo'/>}
        </I.Wrapper>
    )
}

export default Input