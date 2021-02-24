import React, { useEffect, useState} from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background-color: ${({theme}) => theme.element.primary};
  color: ${({theme}) => theme.bg.text};
  width: 100%;
  height: 100%;
  min-height: 100%;
  border: 1px solid rgba(0,0,0,.125);;
  border-radius: 10px;
  box-shadow: 0 3px 20px rgba(0,0,0,.1),
  0 3px 20px rgba(0,0,0,.1);
`

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
        <Card>
            {children}
        </Card>
    )
}

export default Index