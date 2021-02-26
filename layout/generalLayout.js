import React, { useEffect, useState} from 'react'
import styled from 'styled-components'

const Layout = styled.div`
  background-color: ${({theme}) => theme.bg.primary};

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  
  //padding: 0 0.5rem;
  flex-direction: column;
`

// TODO 需要區分
const Index = ({children}) => {
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
        <Layout>
            {children}
        </Layout>
    )
}

export default Index