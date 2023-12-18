import React from 'react';

const LInk = ({route}) => {

    // const {route} = props; //optional receive props
    return (
        <div>
            <li className='mr-12 hover:bg-purple-600'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default LInk;