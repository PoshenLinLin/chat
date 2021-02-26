import React, {useEffect, useState} from 'react'

const useExpand = () => {
    /**
     * state
     */
    const [active, setActive] = useState(false)

    const toggleExpand = () => {
        console.log('before set ', active)
        setActive(!active)
    }

    /**
     * effect
     */

    /**
     * methods
     */

    /**
     * render
     */
    return {active, toggleExpand}
}

export default useExpand