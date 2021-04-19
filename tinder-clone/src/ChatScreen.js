import React,{useState}from 'react'
import  './ChatScreen.css';
import Avatar from '@material-ui/core/Avatar'
function ChatScreen() {
    const [input,setinput]=useState('');
    const [messages,setmessages] = useState([
        {
            name:'magha mundra',
            image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qutMfPmwYXoU2UM2Cy__-wHaEc%26pid%3DApi&f=1',
            message:'how are you'
        },{
            name:'Arnav Goswami',
            image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tumYGBPb9I4a00__95nkxAHaEK%26pid%3DApi&f=1',
            message:'how are you'
        },{
            
            message:'how are you'
        }
    ]);
    const handleSend=(e)=>{
        e.preventDefault();
        setmessages([...messages,{ message:input }]);
        setinput("");
    };
    return (
        <div className="chatScreen">
            <p className='chatScreen_timestamp'>You match with allen on 10/2/30</p>
            {messages.map((message)=>
                message.name ? (
                <div className='chatScreen_message'>
                    <Avatar 
                    className='chatScreen_image' 
                    alt={message.name} 
                    src={message.image}/>

                    <p className='chatScreen_text'>{message.message}</p>
                </div>
                ):(<div className='chatScreen_message'>
                    <p className='chatScreen_textuser'>{message.message}</p>
                </div>)
)}
             
                <form className='chatScreen_input'>
                    <input 
                    value={input} 
                    onChange={(e)=>setinput(e.target.value)} 
                    className='chatScreen_inputfield' 
                    placeholder='Type your messages....'
                    type='text'
                    />
                    <button type='submit' 
                    onClick={handleSend} 
                    className='chatScreen_inputbutton'>SEND</button>
                </form>
            
        </div>
    )
}
export default ChatScreen

