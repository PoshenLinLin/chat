import React, { useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import styled from 'styled-components'

import Header from 'components/header'

const Layout = styled.div`
  background-color: ${({theme}) => theme.bg.primary};
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 90vh;
  
  //padding: 0 0.5rem;
  flex-direction: column;
`

// 要扣除 Header 高度
const Content = styled.div`
  margin-top: 70px;
  width: 100%;
`

// TODO 需要區分
const Index = ({children}) => {
    const isLoading = useSelector((state) => state.requestReducer.loading)
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
    if(isLoading) return '...loading'
    return (
        <Layout>
            <Header/>
            <Content>{children}</Content>

        </Layout>
    )
}

export default Index