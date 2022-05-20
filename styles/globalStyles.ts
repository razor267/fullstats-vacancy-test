import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

:root {
  --white: #fff;
  --blue: #3258FB;
  --black: #333;
  --gray: #919EAB;
}

html {
  box-sizing: border-box;
}

* {
  box-sizing: inherit;
}

body {
  margin: 0;
}
`

export default GlobalStyles