import styled, {css} from 'styled-components'

export const Header = styled.div<{sidebar?: boolean, passwordPage?: boolean}>`
  display: grid;
  grid-template-columns: repeat(2, max-content) auto;
  
  ${ props => props.sidebar && css `
    color: var(--black);
    padding: 39px 0 0 40px;
  `}
    ${ props => props.passwordPage && css `
    padding: 40px 0 0 40px;
    @media ${props => props.theme.media.weight768px} {
      padding: 0;
    }
  `}
`

export const LogoHeader = styled.img`
  padding-top: 1px;
  cursor: pointer;
  @media ${props => props.theme.media.weight768px} {
    padding: 32px 0 0 20px;
    width: 60px;
  }
`

export const TitleHeader = styled.div`
  position: relative;
  top: -1px;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  font-size: 26px;
  justify-self: start;
  padding-left: 8px;
  cursor: pointer;
  @media ${props => props.theme.media.weight768px} {
    display: none;
  }
`

export const LoginHeader = styled.div`
  font-family: 'Roboto', sans-serif;
  justify-self: end;
  font-size: 16px;
  padding-right: 145px;
  padding-top: 2px;
  cursor: pointer;
`
