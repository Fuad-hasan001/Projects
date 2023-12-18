import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid'

const FriendDetails = () => {
    const details = useLoaderData();
    // console.log(details);
    const {username,company,email} = details;
    const navigate = useNavigate()


    
    const handlerGoback =() =>{
        navigate(-1);
    }
    return (
        <div>
            <h2>{username}</h2>
            <h3>Company: {company.name}</h3>
            <p>Email: {email}</p>
            <button onClick={handlerGoback}> <ArrowLeftCircleIcon className="h-6 w-6 text-blue-500 mx-4" />Go Back</button>
        </div>
    );
};

export default FriendDetails;