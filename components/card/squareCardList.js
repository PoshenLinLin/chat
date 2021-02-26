import React, { useEffect, useState, useRef} from 'react'
import styled from 'styled-components'

import useExpand from "hook/useExpand";

const ExpandSection = styled.div`
    display: flex;
  flex-direction: column;
  width: 100%;
`
const Expand = styled.button`
  width: 100%;
  height: 40px;
  color: #444;
  padding: 10px;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  p{
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 14px;
    text-align: left;
  }
`
const ExpandContent = styled.div`
  background-color: white;
  overflow: auto;
  transition: max-height 0.6s ease;
  max-height: ${ prop => prop.h};

`

const List = styled.div`

`

const Item = styled.div`

`

const Index = ({sourceList, onHandleClick, enableExpand}) => {
    const content = useRef(null)


    const {active, toggleExpand} = useExpand();
    /**
     * state
     */
    const [height, setHeight] = useState('0px')

    /**
     * effect
     */

    /**
     * methods
     */

    const toggle = () => {
        console.log('toggle in card')
        toggleExpand()
        setHeight(active ? '0px' : `${content.current.scrollHeight}px`)
    }

    /**
     * render
     */
    return (
        <ExpandSection>
            <Expand onClick = {toggle}><p>ooooooopen</p></Expand>
            <ExpandContent h={height} ref = {content}>Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit</ExpandContent>
        </ExpandSection>
    )
}

export default Index