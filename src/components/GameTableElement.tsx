import React from 'react';
import {UserType} from '../bll/gameSlice';
import {useAppSelector} from "../bll/store";
import {useNavigate} from "react-router-dom";

type SingleGamePropsType = {
    gameId: string
    onDelete: () => void
    setModalName: (gameName: string) => void
    setDeleteGameId: (gameId: string) => void
}

const GameTableElement: React.FC<SingleGamePropsType> = ({gameId, onDelete, setModalName, setDeleteGameId}) => {


    const singleGame = useAppSelector(state => state.singleGame[gameId])
    const gameData = useAppSelector(state => state.gameList.find(el => el.gameId === gameId))
    const navigate = useNavigate()

    const onContinueClickHandler = () => {
        gameData && navigate(`/game/${gameData.gameId}`)
    }

    const onDeleteClickHandler = () => {
        gameData && setModalName(gameData.name)
        gameData && setDeleteGameId(gameData.gameId)
        onDelete()
    }


    if (singleGame) {
        return (
            <>
                <div className='flex flex-col w-[350px] border m-[10px] rounded-md p-4 relative'>
                    <div className='flex flex-row justify-around'>
                        <div>{gameData && gameData.name}</div>
                        <div>{gameData && gameData.startDate}</div>
                    </div>
                    <div>
                        {singleGame.map((u: UserType, k) => {
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
                    <div className='mt-[10px]'>
                        <button className="btn btn-sm btn-active btn-primary mr-[10px] mt-[10px]"
                                onClick={onContinueClickHandler}>Continue game
                        </button>
                    </div>
                    <div className='absolute top-0 right-0 translate-y-[5px] translate-x-[-5px]'>
                        <button className="btn btn-circle btn-xs btn-outline" onClick={onDeleteClickHandler}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </>
        );
    } else {
        return (<div></div>)
    }


};
export default GameTableElement;