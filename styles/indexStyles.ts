import styled from 'styled-components'

export const BackgroundLay = styled.div`
  height: 100vh;
  background: var(--gray);
  display: grid;
  align-items: center;
  justify-items: end;
`

export const BgImage = styled.img`
  position: relative;
  top: -11px;
  padding-right: 70px;
  @media ${props => props.theme.media.weight768px} {
    top: -18px;
    right: -2px;
    padding: 0;
    width: 246px;
    justify-self: center;
  }
`

export const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  background: radial-gradient(106.64% 115.35% at 4.1% 5.52%, rgba(22, 28, 36, 0.48) 0%, rgba(22, 28, 36, 0.8) 45.53%, #161C24 100%, #161C24 100%, #161C24 100%);
  transform: matrix(-1, 0, 0, 1, 0, 0);
`

export const Transform = styled.div`
  transform: matrix(-1, 0, 0, 1, 0, 0);
`

export const Header = styled.div`
  color: var(--white);
  padding: 32px 0 0 150px;
  display: grid;
  grid-template-columns: repeat(2, max-content) auto;
  @media ${props => props.theme.media.weight768px} {
    padding: 32px 0 0 20px;
  }
`

export const Logo = styled.img`
  padding-top: 1px;
  cursor: pointer;
  @media ${props => props.theme.media.weight768px} {
    position: relative;
    width: 20px;
    top: -1px;
  }
`

export const Title = styled.div`
  position: relative;
  top: -1px;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  font-size: 26px;
  justify-self: start;
  padding-left: 8px;
  cursor: pointer;
  @media ${props => props.theme.media.weight768px} {
    position: relative;
    top: 0;
    font-size: 16px;
    line-height: 19px;
  }
`

export const Login = styled.div`
  font-family: 'Roboto', sans-serif;
  justify-self: end;
  font-size: 16px;
  padding-right: 145px;
  padding-top: 2px;
  cursor: pointer;
  @media ${props => props.theme.media.weight768px} {
    position: relative;
    font-size: 14px;
    top: 2px;
    padding-right: 20px;
  }
`

export const Content = styled.div`
  transform: matrix(-1, 0, 0, 1, 0, 0);
  display: grid;
  width: 466px;
  grid-template-rows: repeat(3, auto);
  gap: 40px;
  position: absolute;
  align-self: center;
  right: 144px;
  @media ${props => props.theme.media.weight768px} {
    display: grid;
    width: 343px;
    right: auto;
    align-self: center;
    justify-self: center;
    justify-items: center;
  }
`

export const BigText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 64px;
  line-height: 80px;
  color: var(--white);
  @media ${props => props.theme.media.weight768px} {
    width: 343px;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
  }
`

export const BlueText = styled.span`
  color: var(--blue);
  padding-left: 17px;
  @media ${props => props.theme.media.weight768px} {
    padding-left: 0;
  }
`

export const Description = styled.div`
  position: relative;
  top: 1px;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: var(--white);
  width: 466px;
  text-align: start;
  @media ${props => props.theme.media.weight768px} {
    position: relative;
    width: 343px;
    top: -1px;
    text-align: center;
  }
`

export const Button = styled.div`
  width: 191px;
  @media ${props => props.theme.media.weight768px} {
    width: 191px;
  }
`