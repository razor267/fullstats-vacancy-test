import React from 'react'
import type {AppProps} from 'next/app'
import GlobalStyles from '../styles'
import {ThemeProvider} from 'styled-components'
import {theme} from '../styles/globalStyles'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
