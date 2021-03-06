import {useEffect, useState} from 'react'

/**
 * @param
 * @param theme 主題顏色狀態
 * @method setMode 設定模式
 * @returns {{themeToggle: themeToggle, mountedComponent: boolean, theme: string}}
 */
const useDarkMode = () => {

    const [theme, setTheme] = useState('light')
    const [mountedComponent, setMountedComponent] = useState(false)

    const setMode = (mode) => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    const themeToggle = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    }

    useEffect(() => {
        let localTheme = window.localStorage.getItem('theme')
        localTheme ? setTheme(localTheme) : setMode('light')
        setMountedComponent(true)
    },[])

    return {theme, themeToggle, mountedComponent}
}

export default useDarkMode