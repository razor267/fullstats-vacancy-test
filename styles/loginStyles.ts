import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: grid;
  grid-template-columns: 380px auto;
  @media ${props => props.theme.media.weight1000px} {
    grid-template-columns: 280px auto;
  }
  @media ${props => props.theme.media.weight768px} {
    grid-template-columns: auto;
  }
`

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: max-content auto;
  @media ${props => props.theme.media.weight768px} {
    grid-template-areas: "formWrapper" "account";
  }
`

export const Account = styled.div`
  justify-self: end;
  padding: 41px 41px 0 0;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 22px;
  @media ${props => props.theme.media.weight768px} {
    justify-self: center;
    padding: 83px 0 0 0;
    grid-area: account;
  }
`

export const Reg = styled.span`
  font-weight: 600;
  color: var(--blue);
  cursor: pointer;
  @media ${props => props.theme.media.weight768px} {
    font-weight: 700;
  }
`

export const FormWrapper = styled.div`
  display: grid;
  height: max-content;
  gap: 40px;
  justify-self: center;
  align-self: center;
  margin-left: 80px;
  width: 480px;
  position: relative;
  top: -44px;
  font-family: 'Roboto', sans-serif;
  @media ${props => props.theme.media.weight1000px} {
    margin: 0;
  }
  @media ${props => props.theme.media.weight768px} {
    height: max-content;
    width: 335px;
    margin: 0;
    top: 58px;
    grid-area: formWrapper;
  }
`

export const Login = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  padding-bottom: 8px;
  @media ${props => props.theme.media.weight768px} {
    line-height: 30px;
  }
`

export const YourData = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`

export const Form = styled.div`
  display: grid;
  gap: 6px;
`

export const Example = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  height: 50px;
  background: rgba(50, 88, 251, 0.2);
  border-radius: 8px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 22px;
  align-items: center;
  @media ${props => props.theme.media.weight768px} {
    height: 70px;
  }
`

export const Info = styled.img`
  padding: 0 14px 0 18px;
`

export const Bold = styled.span`
  font-weight: 600;
  @media ${props => props.theme.media.weight768px} {
    font-weight: 400;
  }
`

export const Password = styled.div`
  padding-top: 18px;
`

export const RememberWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content max-content auto;
  padding-top: 5px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 22px;
  align-items: start;
`

export const RememberIcon = styled.img`
  padding-left: 11px;
  cursor: pointer;
`

export const RememberMe = styled.div`
  padding-left: 11px;
`

export const RecoveryPassword = styled.div`
  justify-self: end;
  font-weight: 700;
  color: var(--blue);
  cursor: pointer;
`

export const Button = styled.div`
  padding-top: 17px;
`