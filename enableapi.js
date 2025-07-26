const sendMessage = async () => {
    const usermsg = {sender : 'user',Text: input};
    setMessage(prev => [...prev,usermsg]);
    const response = await fetch("http://localhost:8080/api/chat",{
        method: "POST",headers: {"Content-Type":"application/json"},body: JSON.stringify({message:input})
    });
    const data = await response.text();
    setMessage(prec => [...prev,{sender: 'ai', text: data}]);
    setinput('');
};