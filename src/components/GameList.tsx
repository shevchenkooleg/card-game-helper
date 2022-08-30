import React from 'react';
import SingleGame from "./SingleGame";
import {useAppSelector} from "../bll/store";

const GameList = () => {

    const gamesArr = useAppSelector(state=> state.gameList)

    return (
        <div className='flex flex-wrap mt-[10px]'>
            {gamesArr.map((g, k)=>{
                return <SingleGame gameId={g.gameId} key={k}/>
            })}
        </div>
    );
};

export default GameList;