import React ,{useContext} from 'react';
import {ChatContext} from './ChatContext';
import message from './message';
function MessageList(){
    const{messages} = useContext(ChatContext);
    return(
        <div style={{maxHeight:'300px',overflowY:'scroll'}}>
            {messages.map((msg,index)=> (<message Key = {index} msg = {msg}/>))}
        </div>
    );
}
export default MessageList;