import React, { useEffect, useState} from 'react'
import styled from 'styled-components'

import {GrayBackground} from 'styles/components/background'

const FullDialog = styled.div`
  ackground-color: white;
  border-radius: 10px;
  height: 90%;
  width: 100%;
  overflow: auto;
  position: absolute;
  bottom: 0;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  
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
        <GrayBackground>
            <FullDialog>
                {children}
            </FullDialog>
        </GrayBackground>
    )
}

export default Index