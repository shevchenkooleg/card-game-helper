import React from 'react';
import { UserType } from '../bll/gameSlice';
import {useAppSelector} from "../bll/store";

type SingleGamePropsType = {
    gameId: string
}

const SingleGame:React.FC<SingleGamePropsType> = ({gameId}) => {

    const singleGame = useAppSelector(state => state.singleGame[gameId])
    const gameData = useAppSelector(state=>state.gameList.find(el=>el.gameId === gameId))
    console.log(singleGame)

    return (
        <div className='flex flex-col w-[300px] border m-[10px] rounded-md p-3'>
            <div className='flex flex-row justify-around'>
                <div>{gameData && gameData.name}</div>
                <div>{gameData && gameData.startDate}</div>
            </div>
            <div>
                {singleGame.map((u: UserType, k) =>{
                    return <div key={k} className='flex justify-around'>
                        <div>
                            {u.userName}
                        </div>
                        <div>
                            {u.scores}
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default SingleGame;