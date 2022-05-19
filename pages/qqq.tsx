import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 24px;
  font-family: 'Consolas', sans-serif;
  }
  `

type HeaderSCType = {
    primary?: string
}
const HeaderSC = styled.div<HeaderSCType>`
  border: 2px solid var(--blue);
  border-radius: 8px;
  background: ${({primary}) => primary || 'green'};
  height: 50px;
  max-height: 50px;
  width: 400px;
  display: grid;
  align-items: center;
  justify-items: center;
  align-self: center;
  justify-self: center;
  cursor: pointer;
  &:hover {
    border: 2px solid red;
    color: var(--white);
  }
  `

const WrapperSC = styled.div`
  display: grid;
  gap: 20px;
  position: relative;
  top: calc(100vh/2 - 60px);
  `

const Qqq = () => {
    return (
        <>
            <Global/>
            <WrapperSC>
                <HeaderSC primary='orange'>orange</HeaderSC>
                <HeaderSC>green</HeaderSC>
            </WrapperSC>
        </>
    )
}

export default Qqq