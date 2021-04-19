import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from "@material-ui/icons/Forum"
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link ,useHistory} from 'react-router-dom';

function Header({backButton}) {
    const history=useHistory()
    return (
        <div className='header'>
            {backButton?(
                <IconButton onClick={()=>history.replace(backButton)}>
                <ArrowBackIcon fontSize='large' className='header_icon'/></IconButton> ):(<IconButton>
            <PersonIcon fontSize="large" className='header_icon'/>
            </IconButton> )}
            
            
            
            
            <Link to='/'>
            <IconButton>            
            <img className="header_logo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthescuttleslut.files.wordpress.com%2F2020%2F05%2Ftinder-logo.png%3Fw%3D1920%26h%3D1080%26crop%3D1&f=1&nofb=1" alt=""/>
            </IconButton> 
            </Link>
            <Link to="/chats">
            
            <IconButton>
             <ForumIcon fontSize="large" className="header_icon" />   
            </IconButton>
            </Link>   
            
       </div>
    )
}

export default Header 
