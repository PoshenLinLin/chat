import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

const CardList = styled.div`
  padding: 20px;
`
const Title = styled.div`
  font-size: 26px;
  
`
const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  max-height: ${({max_h}) => `${max_h || '400'}px`};
  max-width: ${({max_w}) => `${max_w || '300'}px`};
`
const Item = styled.div`
  border-radius: 10px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
  width: 80px;
  background-color: cadetblue;
  margin: 10px;
`

const Index = ({title, sourceList, onHandleClick}) => {
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
        <CardList>
            {!!title ? <Title>{title}</Title> : <></>}
            <List>
                {sourceList.map(
                    (source, i) => {

                        return <Item key={i} onClick={() => onHandleClick(source)}>{source.name}</Item>
                    }
                )}
            </List>
        </CardList>

    )
}

export default Index