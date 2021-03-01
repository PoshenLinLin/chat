import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import {CardFrame} from 'components/wrapper/frame'
import CardList from 'components/card/cardList'


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
    const handleClick = (item) => {
        console.log('item', item)
    }

    /**
     * render
     */
    return (
        <>
            <CardFrame>
                <CardList title='上線中' sourceList={wsList} onHandleClick={handleClick}/>
            </CardFrame>
        </>
    )
}

export default Index