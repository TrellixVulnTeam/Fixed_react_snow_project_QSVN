import React, {useEffect, useState} from 'react';
import './ClientInfo.scss'

function ClientInfo() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState<any[]>([]);

    const fetchItems = async() => {
        const data = await fetch("http://localhost:4000/BackendData");
        const items = await data.json();
        console.log(data.json)
        setItems(items);
        
    };

    return(
        <>
        <section>
        <table className="card-body-p-1">
                            <tr>
                                <th className='card-title'>name</th>
                                <th className='card-title'>email</th>
                                <th className='card-title'>phone</th>
                                <th className='card-title'>skill level</th>
                                <th className='card-title'>gender</th>
        </tr>
            {
            items.map((item, key)=> (
                <tr key={key}>

                                <td className="card-text">{item.name}</td>
                                <td className="card-text">{item.email}</td>
                                <td className="card-text"><i>{item.phone}</i></td>
                                <td className="card-text">{item.skill_level}</td>
                                <td className="card-text"><i>{item.gender}</i></td>
                                <br/>
                                </tr>
            ))
            }
            </table>
        </section>
</>
    )
}

export default ClientInfo;