import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'

import ProfileDialog from 'container/profileDialog'
import SquareCardList from 'components/card/squareCardList'


const friends = [
    {name: 'joe', status: true, id: '', prompt: 'aa'},
    {name: 'tyson', status: false, id: ''},
    {name: 'meow', status: true, id: ''},
    {name: 'joe', status: true, id: ''},
    {name: 'tyson', status: false, id: ''},
    {name: 'meow', status: true, id: ''},
    {name: 'joe', status: true, id: ''},
    {name: 'tyson', status: false, id: ''},
    {name: 'meow', status: true, id: ''},
]

const groups = [
    {name: '奧米專案', status: true, id: ''},
    {name: '家庭', status: true, id: ''},
]
const favorites = [
    {name: 'f1', status: true, id: ''},
    {name: 'f2', status: true, id: ''},
]
const Index = () => {
    const dispatch = useDispatch()

    /**
     * state
     */

    /**
     * effect
     */

    /**
     * methods
     */
    const openUserProfile = (item) => {
        console.log('open userProfile', item)

    }

    /**
     * render
     */
    return (
        <>
            {/* store 狀態看是否顯示全屏的 dialog */}
            <ProfileDialog/>
            <SquareCardList title='Favorites' sourceList={favorites} onHandleClick={openUserProfile}></SquareCardList>
            <SquareCardList title='Friends' sourceList={friends} onHandleClick={openUserProfile}></SquareCardList>
            <SquareCardList title='Groups' sourceList={groups} onHandleClick={openUserProfile}></SquareCardList>
        </>
    )
}

export default Index