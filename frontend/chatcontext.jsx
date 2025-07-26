import React ,{createContext, useState} from 'react';
export const ChatContext = createContext();
export function chatprovider({children}){
    const[messages,setMesssages] = useState([]);
    const sendMessage = (text ) => {
        const usermsg = {sender: 'user',text};
        const aimsg = {sender: 'ai', text:"Ai : response for - " + text};
        setMesssages(prev =>[...prev,usermsg,aimsg]);
    };
    return ( 
        <ChatContext.Provider value = {{messages,sendMessage}}>{children}</ChatContext.Provider>
    );
}