import styled from 'styled-components'

export const Sidebar = styled.div`
  display: grid;
  @media ${props => props.theme.media.weight1000px} {
    width: 280px;
  }
`

export const Wrapper = styled.div`
  box-shadow: 0 16px 32px -4px rgba(145, 158, 171, 0.12);
  border-radius: 16px;
  margin: 16px 0 16px 16px;
  height: calc(100vh - 32px);
   @media ${props => props.theme.media.weight768px} {
    margin: 0;
    height: max-content;
    box-shadow: none;
  }
`

export const BgImage = styled.img`
  width: 364px;
  position: absolute;
  top: calc(50% - 137px);
  @media ${props => props.theme.media.weight1000px} {
    width: 264px;
  }
  @media ${props => props.theme.media.weight768px} {
    display: none;
  }
`