import React, { useEffect, useState} from 'react'
import styled from 'styled-components'

import breakpoint from 'styles/breakpoints'

const Card = styled.div`
  background-color: ${({theme}) => theme.element.primary};
  color: ${({theme}) => theme.bg.text};
  min-height: 100%;
  border: 1px solid rgba(0,0,0,.125);;
  border-radius: 10px;
  box-shadow: 0 3px 20px rgba(0,0,0,.1),
  0 3px 20px rgba(0,0,0,.1);
  @media (min-width: ${breakpoint.size.xs}) {
    flex-direction: column;
    width: 100px;
    height: 100px;
  }
  @media (min-width: ${breakpoint.size.sm}){
    width: 100px;
    height: 100px;
  }
  @media (min-width: ${breakpoint.size.lg}){
    display: flex;
    width: 300px;
    height: 300px;
  }
}
`

const SimpleCard = () => {
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

        </Card>
    )
}

export default SimpleCard