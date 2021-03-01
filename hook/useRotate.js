import React, {useEffect, useState} from 'react'

const useRotate = (start, end) => {

    /**
     * state
     */
    const [angle, setAngle] = useState(start)

    /**
     * effect
     */

    /**
     * methods
     */
    const toggleRotate = () => {
        let a = angle == start ? end : start
        setAngle(a)
    }

    /**
     * render
     */
    return {angle, toggleRotate}
}

export default useRotate