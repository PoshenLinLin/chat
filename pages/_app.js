import {useState} from 'react'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'

// import '../styles/globals.css'
import rootReducer from 'reducers'
import NoLayout from 'layout/noLayout'
import GeneralLayout from 'layout/generalLayout'
import GlobalStyle from 'styles/globalStyle'
import {lightMode, darkMode} from 'styles/theme'
import useDarkMode from "/hook/useDarkMode";

const MyApp = ({Component, pageProps, router}) => {

    const store = createStore(rootReducer)


    const {theme, themeToggle, mountedComponent} = useDarkMode()
    const themeMode = theme === 'light' ? lightMode : darkMode

    let renderObj
    if (router.pathname.startsWith('/user/')) {
        renderObj = <GeneralLayout><Component {...pageProps} /></GeneralLayout>
    } else {
        renderObj = <NoLayout><Component {...pageProps} /></NoLayout>
    }

    return (
        <Provider store={store}>
            <ThemeProvider theme={themeMode}>
                <GlobalStyle/>
                {renderObj}
                {/*<NoLayout>*/}
                {/*    <Component {...pageProps} />*/}
                {/*</NoLayout>*/}
            </ThemeProvider>
        </Provider>
    )
}


export default MyApp
