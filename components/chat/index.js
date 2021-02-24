import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import breakpoints from "styles/breakpoints";
import Icon from 'components/icon'

const Flex = styled.div`
  display: flex;

`

const Chatroom = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: aquamarine;
  width: 100%;
  max-width: 600px;
  height: 90vh;
  max-height: 100vh;
  
  @media (min-width: ${breakpoints.size.xs}) {
    //width: 100%;
    //height: 100%;
    //min-height: 500px;
  }
  @media (min-width: ${breakpoints.size.sm}) {
  }
  @media (min-width: ${breakpoints.size.lg}) {
  }
`
const ChatTitle = styled.h2`
  height: 50px;
  line-height: 50px;
`
const ChatBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex: 1;
  width: 90%;
  background-color: aqua;
  //max-height: 450px;
  overflow-y: auto;
  margin: 5px 0;
`
const MessageList = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
`
const MessageBox = styled.div`
  width: 100%;
  height: 100%;
  min-height: max-content;
  // min-height: 100%;
  background-color: #eaeaea;
  margin: 0 1px 10px 0;
  //padding: 10px;
  display: flex;
  align-items: flex-start;
`
const Message = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 60px);
  //height: 100%;
  min-height: 50px;
  line-height: 20px;
  background-color: darkgreen;
  word-break: normal;
`
const MessageContent = styled.div`
  padding: 10px;
`
const Profile = styled.div`
  background-color: crimson;
  width: 50px;
  height: 50px;
  margin: 0 2px;
`

const ChatInputBox = styled.div`
  width: 100%;
  height: 50px;
  min-height: 50px;
  background-color: antiquewhite;

  display: flex;
  align-items: center;
  input{
    margin-right: 8px;
    width: 100%;
    min-height: 38px;
    font-size: 15px;
    border: 1px solid #c8c8c8;
    border-radius: 5px;
  }
  button{
    background-color: #128ff2;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    color: #fff;
    width: 80px;
    height: 40px;
  }
`

const msg = [
    {principal: 'me', text: 'CSS： calc() 數值運算｜專欄文章｜五倍紅寶石5xruby.tw › ... › 技術文章 › CSS： calc() 數值運算CSS： calc() 數值運算｜專欄文章｜五倍紅寶石5xruby.tw › ... › 技術文章 › CSS： calc() 數值運算CSS： calc() 數值運算｜專欄文章｜五倍紅寶石5xruby.tw › ... › 技術文章 › CSS： calc() 數值運算CSS： calc() 數值運算｜專欄文章｜五倍紅寶石5xruby.tw › ... › 技術文章 › CSS： calc() 數值運算 這是結尾', time: ''},
    {principal: 'me', text: 'bbb', time: ''},
    {principal: 'other', text: 'cc', time: ''},
    {principal: 'me', text: 'opooo', time: ''},
    {principal: {}, text: 'dd', time: ''},
    {principal: {}, text: 'ee', time: ''},
    {principal: {}, text: 'tt', time: ''},
    {principal: {}, text: 'hgh', time: ''},
    {principal: {}, text: 'tfwet', time: ''},
    {principal: {}, text: 'j45j4', time: ''},
    // {principal: {}, text: 'gew', time: ''},
    // {principal: {}, text: 'ggg', time: ''},
    // {principal: {}, text: 'fasf', time: ''},
]

const Index = () => {
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
        <Chatroom>
            <ChatTitle>Chat Demo</ChatTitle>
            <ChatBox>
                {msg.map( (m,i) => {
                    let text = <MessageContent>{m.text}</MessageContent>
                    return <MessageBox key = {i}>
                        {m.principal === 'me' ?
                        <><Message>{text}</Message><Profile></Profile> </>:
                        <><Profile></Profile><Message>{text}</Message></>}
                    </MessageBox>
                })}

            </ChatBox>
            <ChatInputBox>
                <input type = "text"  placeholder="Type a message..." />
                <button>Send</button>
            </ChatInputBox>
        </Chatroom>
    )
}

export default Index