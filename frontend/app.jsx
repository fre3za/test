import React from 'react';
import ChatWindow from './ChatWindow';
import {ChatProvider} from './chatcontext';
function app(){
    return(
        <ChatProvider><ChatWindow/></ChatProvider>
    );
}
export default app;