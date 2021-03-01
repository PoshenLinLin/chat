import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

import breakpoints from "styles/breakpoints";
import Icon from 'components/common/icon'

const Flex = styled.div`
  display: flex;

`

const Chatroom = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #92959E;
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
  width: 100%;
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
  //background-color: #eaeaea;
  margin: 0 1px 15px 0;
  //padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: ${({me}) => me ? 'row-reverse':'row'};
`
const MessageBoxMe = styled(MessageBox)`
    
`
const MessageBoxOther = styled(MessageBox)`
  
`
const Message = styled.div`
  display: flex;
  align-items: center;
  max-width: calc(95% - 90px);
  //width: 100%;
  //height: 100%;
  min-height: 50px;
  line-height: 20px;
  background-color: ${({me}) => me? '#94c2ed' : '#86BB71'};
  word-break: normal;
  border-radius: 10px;
`
const MessageContent = styled.div`
  padding: 10px;
`
const Profile = styled.div`
  background-color: crimson;
  width: 50px;
  height: 50px;
  border-radius: 99rem;
  margin: 0 5px;
`

const MessageDetail = styled.div`
  width: 30px;
  height: 20px;
  align-self: flex-end;
  font-size: 10px;
  margin: 0 5px;
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
    {principal: 'me', text: 'CSS： calc() 數值運算｜專欄文章｜五倍紅寶石5xruby.tw › ... › 技術文章 › CSS： calc() 數值運算CSS： calc() 數值運算｜專欄文章｜五倍紅寶石5xruby.tw › ... › 技術文章 › CSS： calc() 數值運算CSS： calc() 數值運算｜專欄文章｜五倍紅寶石5xruby.tw › ... › 技術文章 › CSS： calc() 數值運算CSS： calc() 數值運算｜專欄文章｜五倍紅寶石5xruby.tw › ... › 技術文章 › CSS： calc() 數值運算 這是結尾', time: '12:11'},
    {principal: 'me', text: 'bbb', time: '12:11'},
    {principal: 'other', text: 'cc', time: '12:11'},
    {principal: 'me', text: 'opooo', time: '12:11'},
    {principal: {}, text: 'dd', time: '12:11'},
    {principal: {}, text: 'ee', time: '12:11'},
    {principal: {}, text: 'tt', time: '12:11'},
    {principal: {}, text: 'hgh', time: '12:11'},
    {principal: {}, text: 'tfwet', time: '12:11'},
    {principal: {}, text: 'j45j4', time: '12:11'},
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
                    let me = m.principal === 'me'
                    return <MessageBox key = {i} me={me}><Profile></Profile><Message me={me}>{text}</Message><MessageDetail>{m.time}</MessageDetail></MessageBox>

                    // if(m.principal === 'me') return <MessageBoxMe key={i}><Message color={true}>{text}</Message><Profile></Profile></MessageBoxMe>
                    // else return <MessageBoxOther key={i}><Profile></Profile><Message color={false}>{text}</Message></MessageBoxOther>

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