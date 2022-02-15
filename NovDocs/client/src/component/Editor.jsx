import React, { useEffect, useState } from 'react';
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import '../CSS/Editor.css'
import { io } from "socket.io-client"
import { useParams } from 'react-router-dom';


const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent 
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],

    ['clean']                                         // remove formatting button
];

const Editor = () => {

    const [quill, setQuill] = useState()
    const [socket, setSocket] = useState()
    const { id } = useParams()

    useEffect(() => {
        const quillServer = new Quill('#editor', {
            modules: {
                toolbar: toolbarOptions
            },
            theme: 'snow'
        });
        quillServer.disable()
        quillServer.setText('loading content...')
        setQuill(quillServer)
    }, [])

    // making connection with socket.io server
    useEffect(() => {
        const socketServer = io('http://localhost:4000')
        setSocket(socketServer) 

        //this is component will unmount 
        return () => {
            socketServer.disconnect()
        }
    }, [])

    // hendaling quillServer data 
    useEffect(()=> {
        const handleChange = (delta, oldDelta, source)=>{
            if( source !== 'user') return

            socket && socket.emit('send-change', delta)
        }

        if(socket === null || quill === null) return
        quill && quill.on('text-change',handleChange)

        return () => {
            quill && quill.off('text-change',handleChange)
        }
    },[quill, socket])

    useEffect(()=> {
        const handleChange = (delta)=>{
            quill && quill.updateContents(delta)
        }

        if(socket === null || quill === null) return
        socket && socket.on('receive-change',handleChange)

        return () => {
            socket && socket.off('receive-change',handleChange)
        }
    },[quill, socket])

    useEffect(()=> {
        if( socket === null || quill === null ) return
        socket && socket.once('load-document', document => {
            quill && quill.setContents(document)
            quill && quill.enable()
        })
        socket && socket.emit('get-document', id)
    },[quill, socket, id])

    useEffect(()=> {
        if( socket === null || quill === null ) return
        
        const interval = setInterval(() => {
            socket && socket.emit('save-documnet', quill.getContents())
        }, 1000);

        return () => {
            clearInterval(interval)
        }

    },[quill, socket])

    return (
        <>
            <div className='container'>
                <div id="editor"></div>
            </div>
        </>
    );
};

export default Editor;
