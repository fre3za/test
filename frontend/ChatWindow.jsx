import React  from 'react';
import MessageList from './MessageList';
import UserInput from './UserInput';
function chatWindow(){
    return(
        <div style={{border: '1px solid gray',padding: '10px',width:'400px'}}>
            <h3>chatbot</h3>
            <MessageList />
            <UserInput />
        </div>
    );
}
export default chatWindow;