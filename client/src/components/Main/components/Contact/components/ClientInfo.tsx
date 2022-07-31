import React, {useEffect, useState} from 'react';

function ClientInfo() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState<any[]>([]);

    const fetchItems = async() => {
        const data = await fetch('/BackendData');
        const items = await data.json();
        console.log(data.json)
        setItems(items);
        
    };

    return(
        <>
        <div>Hi</div>
        <section>
            {
            items.map(item => (
                <div className="container-fluid p-3 w-50">
                    <div className="card-deck">
                        <div className="card">
                            <div className="card-body p-1">
                                <h6 className="card-title">{item.name}</h6>
                                <p className="card-text">{item.msg}</p>
                                <p className="card-text"><i>by {item.username}</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </section>;
</>
    )
}

export default ClientInfo;