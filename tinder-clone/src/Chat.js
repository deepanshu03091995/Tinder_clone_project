import React from 'react'
import './Chat.css';
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';

function Chat({name,message,profilepic,timestamp}) {
    return (
        <Link to={`/chat/${name}`}>
        <div className='chat'>
           <Avatar 
           className="chat_image" 
           alt={name} 
           src={profilepic} />
      <div className="chat_details">
        <h1>{name}</h1>
        <p>{message}</p>
      </div>
      <p className="chat_timestamp">{timestamp}</p>
    </div> 
        

</Link>
    );
}

export default Chat;