import React from 'react';
import './Section8.css';
import "@fontsource/inter";

const Section8 = () => {
    function handlechange(e){
        e.preventDefault();
    }
  return (
    <div className='s8-main-container'>
        <div className='s8-container1'>
            <p>Subscribe Our Newsletter</p>
        </div>
        <div className='s8-container2'>
            <form>
                <input type="text" id="s8-name" placeholder='Name:'/>
                <input type="email" id="s8-email" placeholder='Enter your Email'/>
                <input type='submit' value="SEND" onClick={handlechange}/>
            </form>
        </div>
    </div>
  )
}

export default Section8