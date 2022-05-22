import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  width: 100vw;
`

export const FormStyled = styled.div`
  display: grid;
  position: absolute;
  align-self: center;
  justify-self: center;
  width: 480px;
  gap: 28px;
  height: 360px;
`

export const Text = styled.div`
  display: grid;
  gap: 16px;
  font-family: 'Roboto', sans-serif;
  height: max-content;
`

export const HeaderText = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
`

export const Description = styled.div`
  font-size: 16px;
  line-height: 24px;
`

export const InputAndButton = styled.div`
  display: grid;
  gap: 19px;
  height: max-content;
`

export const ButtonStyled = styled.div`
  padding-top: 5px;
`

export const Back = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  color: var(--blue);
  cursor: pointer;
  justify-self: center;
`