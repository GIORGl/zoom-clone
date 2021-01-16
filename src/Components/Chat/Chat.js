import React,{useRef, useState} from 'react';
import './Chat.css'

function Chat() {
    const dummy = useRef();
    const [input,setInput] = useState([]);
    const [messages,setMessages]  = useState([])
    const handleChange =(e) => {
e.preventDefault();
setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(input) {
            setMessages([...messages,input])
            console.log(dummy.current)
            dummy.current.scrollIntoView( {position:0, behavior: 'smooth', block: 'start' } );
            setInput('');
        }
    }
    return (
        <div className='chat'>
        
            <div  className="chat__box">

{messages.map(message => (
    <div className="message">
<h3>{message}</h3>
    </div>
    
))}
<div  ref={dummy}></div>
            </div>
            <form onSubmit={handleSubmit}>
            <input value={input} onChange={handleChange} type="text"/>
            </form>        

        </div>
    )
}

export default Chat
