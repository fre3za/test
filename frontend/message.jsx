import React  from 'react';
function message({msg}){
    const style = {TextAlign: msg.sender === 'user' ? 'right':'left',margin:'5px',backgroundColor : msg.sender === 'user' ? rgba(220, 248, 198, 1) : '#f1f0f0',padding :'8px',
        borderRadius: '10px'
    };
    return <div style={style}>{msg.text}</div>;
}
export default message;