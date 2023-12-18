import React from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const friends = () => {
    const friends = useLoaderData();
    // console.log(data)

    return (
        <div>
            <h2>These are my friends: {friends.length}</h2>
            <div>
                {
                    friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default friends;