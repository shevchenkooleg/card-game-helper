import React from 'react';
import {useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()

    const addNewGameHandler = () => {
       navigate('/addNewGame')
    }

    return (
        <div className='flex flex-row bg-blue-900 justify-end items-center h-[70px]'>
            <h1 className='font-bold basis-2/5'>Card helper</h1>
            <button className="btn btn-sm btn-active btn-primary mr-[10px]" onClick={addNewGameHandler}>Add new game</button>
        </div>
    );
};

export default Header;