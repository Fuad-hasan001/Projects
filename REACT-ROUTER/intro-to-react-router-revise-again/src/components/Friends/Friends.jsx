import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const friendsData = useLoaderData();
    // console.log(friendData)
    return (
        <div className='grid grid-cols-3 gap-4'>
            <h2>This is Friends page: {friendsData.length}</h2>
            {
                friendsData.map(friend => <Friend
                key={friend.id}
                friend={friend}
                ></Friend>)
            }
        </div>
    );
};

export default Friends;