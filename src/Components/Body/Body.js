import React, {useState } from 'react';
import './Body.css';
function Body() {
    
    const [input,setInput] = useState('')
    const [input2,setInput2] = useState('')
    setInterval(() => {
        const date = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        const date2 = new Date().toDateString();
        setInput(date);
        setInput2(date2)
    }, 600);
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
   <div className="background__image">
       <h1>{input}</h1>
      <p> {input2}</p>
   </div>
   <div className='body__rightText'>
       No upcoming meeting today
   </div>
 </div>
 
     </div>
    )
}

export default Body;
