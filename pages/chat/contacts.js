import React, { useEffect, useState} from 'react'
import styled from 'styled-components'

import SquareCardList from 'components/card/squareCardList'
const wsList = [
    {name: 'joe', status: true, id: ''},
    {name: 'tyson', status: false, id: ''},
    {name: 'meow', status: true, id: ''},
    {name: 'joe', status: true, id: ''},
    {name: 'tyson', status: false, id: ''},
    {name: 'meow', status: true, id: ''},
    {name: 'joe', status: true, id: ''},
    {name: 'tyson', status: false, id: ''},
    {name: 'meow', status: true, id: ''},
]
const Index = () => {
    /**
     * state
     */

    /**
     * effect
     */

    /**
     * methods
     */

    /**
     * render
     */
    return (
        <SquareCardList sourceList={wsList}></SquareCardList>
    )
}

export default Index