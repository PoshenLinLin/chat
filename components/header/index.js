import React, { useEffect, useState} from 'react'
import {useRouter} from "next/router";
import styled from 'styled-components'

import breakpoint from 'styles/breakpoints'

const Header = styled.div`
  background-color: ${({theme}) => theme.element.primary};
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  
  @media (min-width: ${breakpoint.size.xs}) {
  }
  @media (min-width: ${breakpoint.size.sm}){
  }
  @media (min-width: ${breakpoint.size.lg}){
  }
`

const HeaderAvatar = styled.div`
  height: 50px;
  width: 50px;justify-self: flex-start;
  background-color: aquamarine;
  border-radius: 60px;
  border: 0;
  margin: 0 5px;
`

const IconBtn = styled.div`
  height: 50px;
  width: 50px;
  
`

const Index = () => {
    const router = useRouter()
    /**
     * state
     */

    /**
     * effect
     */

    /**
     * methods
     */
    const handleClick = () => {
        router.push('/')
    }

    /**
     * render
     */
    return (
        <Header>
            <HeaderAvatar onClick = {handleClick}></HeaderAvatar>
        </Header>
    )
}

export default Index