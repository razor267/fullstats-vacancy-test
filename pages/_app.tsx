import React from 'react'
import type {AppProps} from 'next/app'
import GlobalStyles from '../styles'
import {ThemeProvider} from 'styled-components'
import {theme} from '../styles/globalStyles'
import {Provider} from 'react-redux'
import {store} from '../redux/store'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
