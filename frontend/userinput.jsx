//const { useState, useContext } = require("react");

import React, {useState,useContext} from 'react';
import {ChatContext} from './ChatContext';
function userInput(){
    const[input , setInput] = useState('');
    const{sendMessage} = useContext(ChatContext);
    const handleSend  = () => {
        if(input.trim() !== ''){
            sendMessage(input);
            setInput(' ');

        }
    };
    return (
        <div>
            <input value = {input} onChange={e => setInput(e.target.value)}/>
            <button onClick={handleSend}>send</button>
        </div>
    );
}
export default userInput;