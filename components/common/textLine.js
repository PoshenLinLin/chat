import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
`

const Avatar = styled.div`
  height: ${({size}) => size? size : '40px'};
  width: ${({size}) => size? size : '40px'};
  background-color: aquamarine;
  border-radius: ${({size}) => size? size : '40px'};
  border: 0;
  margin: 0 5px;
`

const Line = styled.div`
  width: calc(100% - ${({size}) => size? size : '40px'});
  height: ${({size}) => size? size : '40px'};
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5px;
`
const Title = styled.div`
    font-size: 1rem;
`
const Prompt = styled.div`
  font-size: 0.6rem;
    color: #ccc;
`

const Index = ({size, item, }) => {
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
    let prompt = item?.prompt
    return (
        <Item onClick = {() => {}}>
            <Avatar></Avatar>
            <Line>
                <Title>{item.name}</Title>
                {prompt ? <Prompt>{prompt}</Prompt> : ''}
            </Line>
        </Item>
    )
}

export default Index
