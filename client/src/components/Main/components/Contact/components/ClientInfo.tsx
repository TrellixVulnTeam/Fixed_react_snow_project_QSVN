import React, {useEffect, useState} from 'react';

function ClientInfo() {
    const [initialState, setInitialState] = useState([])
    
    useEffect(()=>{
        fetch('/BackendData').then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setInitialState(jsonResponse))
    },[])

    console.log(initialState)
    return(<div>Hey</div>)
}

export default ClientInfo;