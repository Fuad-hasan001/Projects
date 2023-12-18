import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id, name, phone, website} = friend;

    const navigate = useNavigate()
    const handlerPerson = () =>{
        navigate(`/friend/${id}`)
    }

    return (
        <div className='border-2 border-purple-400 mb-2 p-2 text-orange-400 text-left hover:text-center'>
            <h2>{name}</h2>
            <p>Phone: {phone}</p>
            <p>Visit: {website}</p>
            <Link to={`/friend/${id}`} className='text-blue-400 hover:text-green-700 '>Person Details...</Link>
            <button onClick={handlerPerson}>person Details</button>
        </div>
    );
};

export default Friend;