import { Avatar } from '@material-ui/core';
import React from 'react';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ContactsIcon from '@material-ui/icons/Contacts';
function Header() {
    return (
        <div className="header">
            
            <div className="header__left">
                <div className='header__comp'>
                <HomeIcon />   
          <h4>Home</h4>
                </div>
                <div className='header__comp'>
                <ChatIcon />
           <h4>Chat</h4>
                </div>
         <div className='header__comp'>
         <AccessTimeIcon />
           <h4>Meetings</h4>
         </div>
         <div className='header__comp'>
         <ContactsIcon />
           <h4>Contacts</h4>
         </div>
       </div>
         <div className="header__right">
         
            <input placeholder=' search' className="header__input" type="text"/>
        
<Avatar className="header__avatar" />
       </div>
        </div>
    )
}

export default Header
