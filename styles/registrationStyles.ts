import styled from 'styled-components'

export const RegistrationWrapper = styled.div`
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
    grid-template-areas: "formWrapper" "loginLink";
  }
`

export const LoginLink = styled.div`
  justify-self: end;
  padding: 41px 41px 0 0;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 22px;
  @media ${props => props.theme.media.weight768px} {
    padding-top: 209px;
    padding-right: 4px;
    justify-self: center;
    grid-area: loginLink;
  }
`

export const Login = styled.span`
  color: var(--blue);
  font-weight: 600;
  cursor: pointer;
  @media ${props => props.theme.media.weight768px} {
    font-family: 'Public Sans', sans-serif;
    font-weight: 700;
  }
`

export const FormWrapper = styled.div`
  display: grid;
  grid-template-rows: max-content auto;
  gap: 40px;
  position: absolute;
  left: calc(100vw / 2 - 10px);
  align-self: center;
  width: 480px;
  height: 461px;
  @media ${props => props.theme.media.weight1000px} {
    left: auto;
    justify-self: center;
  }
  @media ${props => props.theme.media.weight768px} {
    grid-area: formWrapper;
    width: 335px;
    left: auto;
    justify-self: center;
    position: relative;
    top: 56px;
  }
`

export const Header = styled.div`
  display: grid;
  grid-template-rows: max-content auto;
  gap: 8px;
  font-family: 'Roboto', sans-serif;
  @media ${props => props.theme.media.weight768px} {
    gap: 7px;
  }
`

export const Reg = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
`

export const RegDescription = styled.div`
  font-size: 16px;
  @media ${props => props.theme.media.weight768px} {
    width: 309px;
    line-height: 130%;
  }
`

export const Form = styled.div`
  display: grid;
  gap: 24px;
  height: max-content;
`

export const Name = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 16px;
  @media ${props => props.theme.media.weight768px} {
    grid-template-columns: auto;
    gap: 24px;
  }
`

export const Button = styled.div`
  position: relative;
  top: -15px;
  @media ${props => props.theme.media.weight768px} {
    top: -17px;
  }
`

export const Footer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: var(--gray);
  position: relative;
  top: -14px;
  @media ${props => props.theme.media.weight768px} {
    top: -16px;
  }
`

export const Privacy = styled.span`
  color: var(--blue);
  text-decoration: underline;
  cursor: pointer;
  &:hover {
              text-decoration: none;
            }
`