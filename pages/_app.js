import {useState} from 'react'
import {ThemeProvider} from 'styled-components'

// import '../styles/globals.css'
import NoLayout from 'layout/noLayout'
import GeneralLayout from 'layout/generalLayout'
import GlobalStyle from 'styles/globalStyle'
import {lightMode, darkMode} from 'styles/theme'
import useDarkMode from "/hook/useDarkMode";

const MyApp = ({Component, pageProps}) => {


    const {theme, themeToggle, mountedComponent} = useDarkMode()
    const themeMode = theme === 'light' ? lightMode : darkMode

    return (
        <ThemeProvider theme = {themeMode}>
            <GlobalStyle/>

            <NoLayout>
                <Component {...pageProps} />
            </NoLayout>
        </ThemeProvider>
    )
}


export default MyApp
