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

@font-face {
    font-family: 'Open Sans';
    src: url('/fonts/OpenSans/OpenSans-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
 @font-face {
    font-family: 'Public Sans';
    src: url('/fonts/Public_Sans/PublicSans-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto/Roboto-Regular.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto';
    src: url('/fonts/Roboto/Roboto-Bold.ttf') format('truetype');
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto Slab';
    src: url('/fonts/Roboto_Slab/RobotoSlab-SemiBold.ttf') format('truetype');
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: 'Roboto Slab';
    src: url('/fonts/Roboto_Slab/RobotoSlab-ExtraBold.ttf') format('truetype');
    font-style: normal;
    font-weight: 800;
    font-display: swap;
  }
`

export const theme = {
    media: {
        weight768px: '(max-width: 768px)',
        weight1000px: '(max-width: 1000px) and (min-width: 768px)'
    }
}

export default GlobalStyles