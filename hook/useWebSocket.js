import React, {useState, useEffect} from 'react'
import webSocket from 'socket.io-client'

const useWebSocket = () => {

    const [ws,setWs] = useState(null)

    const connectWebSocket = () => {
        setWs(webSocket('http://localhost:8080'))
    }

    const disConnectWebSocket = () => {
        ws.emit('', '')
    }
    const initWebSocket = () => {
    }

    const sendMessage = (type, id, message) => {

    }

    useEffect(() => {
        if(ws){

        }
        initWebSocket()
    }, [ws])

    return {ws, connectWebSocket, sendMessage}
}

export default useWebSocket()