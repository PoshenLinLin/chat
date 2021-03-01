import React, {useEffect, useState, useRef} from 'react'
import styled from 'styled-components'

import useExpand from "hook/useExpand";
import useRotate from "hook/useRotate";

import TextLine from 'components/common/textLine'

const ExpandSection = styled.div`
  display: flex;

  flex-direction: column;
  width: 100%;
`
const Expand = styled.button`
  background-color: ${({theme}) => theme.element.primary};
  position: relative;
  width: 100%;
  height: 40px;
  color: #444;
  padding: 10px;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  justify-self: flex-start;

  p {
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 14px;
    text-align: left;
  }
`

const Svg = styled.svg`
  height: 20px;
  width: 20px;
  position: absolute;
  right: 10px;
  transition: transform 0.6s ease;
  transform: rotate(${({angle}) => `${angle}deg`});
`

const ExpandContent = styled.div`
  background-color: white;
  overflow: auto;
  transition: max-height 0.6s ease;
  max-height: ${prop => prop.h};
  padding: 0 10px;
`

const List = styled.div`
  width: 100%;
  height: 100%;
`

const Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`



const Index = ({title, sourceList, onHandleClick, enableExpand}) => {
    title = title || '標題'
    const content = useRef(null)
    const {angle, toggleRotate} = useRotate(0, 90)

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
        toggleExpand()
        toggleRotate()
        setHeight(active ? '0px' : `${content.current.scrollHeight}px`)
        // setHeight(active ? '0' : '100%')
    }

    const handleClick = (item) => {
        // TODO 打開dialog
        console.log('handleClick', item)
        onHandleClick(item)
    }

    /**
     * render
     */
    return (
        <ExpandSection>
            <Expand onClick={toggle}><p>{title}</p>
                <Svg
                    angle={angle}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                >
                    <path
                        fill='#777'
                        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    />
                </Svg>
            </Expand>
            {/* 如何 pre render 知道高度*/}
            <ExpandContent h={height} ref = {content}>
                <List>
                    {sourceList.map(
                        (item, i) => {
                            // TODO 要dispatch 呼叫打開全屏的 dialog
                            // TODO 把Text 的component 做到該層（同一層才不會牽套太深 , 避免 component 又呼叫另一個 component
                            return <TextLine key = {i} size = '50px' item = {item} ></TextLine>
                        }
                    )}
                </List>
            </ExpandContent>
        </ExpandSection>
    )
}

export default Index