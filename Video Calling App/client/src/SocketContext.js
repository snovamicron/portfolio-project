import { useState, useEffect, useRef, createContext } from "react";
import { io } from 'socket.io-client'
import Peer from 'simple-peer'

const SocketContext = createContext()
const socket = io('http://localhost:5000')

const ContextProvider = ()=>{
    const [ stream, setStream ] = useState(null)
    const [ me, setMe ] = useState('')
    const [ call, setCall ] = useState({})

    const myVideo = useRef()

    useEffect(()=>{
        const initial = async ()=>{
           const curreuntStream = await navigator.mediaDevices.getUserMedia({ video:true, audio:true })
            setStream(curreuntStream)
            myVideo.current.srcObject = curreuntStream
        }
        initial()
        socket.on('me',(id) => setMe(id))
        socket.on('calluser',({ signal, from, name: callerName })=>{
            setCall({
                isRecivedCall: true,
                from,
                signal,
                name: callerName
            })
        })
    })

    const answerCall = ()=>{
        
    }
    const leaveCall = ()=>{

    }
    const callUser = ()=>{

    }
}
