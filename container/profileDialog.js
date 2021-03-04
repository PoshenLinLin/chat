import React, { useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'

import FullDialog from 'components/common/fullDialog'



const Header = styled.div`
  background-color: antiquewhite;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CloseIcon = styled.div`
  height: 20px;
  width: 20px;
  margin-left: 10px;
`
const Option = styled.div`
  height: 100%;
  width: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
  div{
    width: 20px;
    height: 20px;
  }
`

const Content = styled.div`
  height: calc(100% - 100px);
  width: 100%;
`

const Footer = styled.div`
  background-color: cadetblue;
  height: 50px;
  width: 100%;
  display: flex;
  //align-items: center;
  div{
    flex: 1;
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
`


/**
 * 重複共用的 User Profile Dialog 元件
 * @param item
 * @returns {JSX.Element}
 * @constructor
 */
const Index = ({show, item}) => {

    const dispatch = useDispatch()
    const [isShow, setIsShow] = useState(show)
    /**
     * state
     */

    /**
     * effect
     */
    useEffect(() => {
    }, [show])

    /**
     * methods
     */
    const handleStar = () => {

    }
    const handleGift = () => {

    }
    const handleClose = () => {
        console.log('handleClose')
        setIsShow(false)
    }

    /**
     * render
     */

    if(!isShow) return <></>
    return (
        <FullDialog>

            <Header>
                <CloseIcon onClick={handleClose}>X</CloseIcon>
                <Option>
                    <div onClick={handleStar}>star</div>
                    <div onClick={handleGift}>gift</div>
                </Option>
            </Header>
            <Content></Content>
            <Footer>
                <div>Posts</div>
                <div>Photos & videos</div>
            </Footer>
        </FullDialog>
    )
}

export default Index