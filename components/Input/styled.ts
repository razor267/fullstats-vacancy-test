import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
`

export const EmailLabel = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 18px;
  color: var(--gray);
  width: 35px;
  background: var(--white);
  position: relative;
  text-align: center;
  left: 14px;
  top: 9px;
`

export const InputStyled = styled.input`
width: 100%;
    border: 1px solid rgba(145, 158, 171, 0.3);
    border-radius: 8px;
    height: 56px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 24px;
    padding: 0 0 0 13px;

    &::placeholder {
      color: var(--gray);
    }
`

export const Eye = styled.img`
  cursor: pointer;
  justify-self: end;
  position: relative;
  top: -36px;
  padding-right: 12px;
`