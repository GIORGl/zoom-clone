import React, { useEffect, useState } from 'react';
import './Body.css';
function Body() {
    
    const [input,setInput] = useState('')
    const date = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    useEffect(() => {
        setInput(date);
    },[date])
    return (
        <div className='body'>
   
 <div className="body__left">
     <div className="body__row">
     <div className="body__comp">
     <img src="newmeeting.jpg" alt="new meeting img"/>
<h4>New meeting</h4>
     </div>
<div className="body__comp">
    <img src="join.jpg" alt="join img"/>
    <h4>Join</h4>
</div>
     </div>

    <div className="body__row">
    <div className="body__comp">
    <img src="schedule.png" alt="shedule img"/>
    <h4>Schedule</h4>

 </div>
 <div className="body__comp">
     <img src="share.png" alt=""/>
     <h4>share</h4>
 </div>
    </div>
 
 </div>
 <div className="body__right">
    <div  className="background__image">
   {input}
    </div>
 </div>
        </div>


    )
}

export default Body;
