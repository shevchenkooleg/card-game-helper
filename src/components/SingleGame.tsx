import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../bll/store";
import SingleGameTableElement from "./SingleGameTableElement";
import {useNavigate, useParams} from "react-router-dom";
import { setNewScore, updateLeader } from '../bll/gameSlice';
import { setNewCircle } from '../bll/gameListSlice';

const SingleGame: React.FC = () => {

    let params = useParams()
    const navigate = useNavigate()
    const gameId = params.gameId !== undefined ? params.gameId : ''
    const gameData = useAppSelector(state => state.gameList.find(el=>el.gameId === gameId))
    const singleGameData = useAppSelector(state=>state.singleGame[gameId])
    const gameRestoreData = useAppSelector(state=>state.gameList)
    const singleGameRestoreData = useAppSelector(state=>state.singleGame)
    const dispatch = useAppDispatch()
    const [score1, setScore1] = useState(0)
    const [score2, setScore2] = useState(0)
    const [score3, setScore3] = useState(0)
    const scoreArr = [score1, score2, score3]
    const scoreChangeCallbackArray = [setScore1, setScore2, setScore3]
    const onApplyRoundClickHandler = () => {
        for (let i=0;i<singleGameData.length;i++){
            dispatch(setNewScore({gameId, newScores: scoreArr[i], userId: singleGameData[i].userId, index:i}))

        }
        dispatch(updateLeader({gameId}))
        dispatch(setNewCircle({gameId}))
        setScore1(0)
        setScore2(0)
        setScore3(0)
        localStorage['gameData'] = JSON.stringify(gameRestoreData)
        localStorage['singleGameData'] = JSON.stringify(singleGameRestoreData)
    }
    const onMainMenuClick = () => {
        localStorage['gameData'] = JSON.stringify(gameRestoreData)
        localStorage['singleGameData'] = JSON.stringify(singleGameRestoreData)
        navigate('/')
    }


    if (singleGameData){
        return (
            <div className='m-[20px]'>
                <div>
                    Circle  {gameData && gameData.circle}
                </div>
                <div className='mt-[10px] mb-[10px]'>
                    {singleGameData.map((g, k)=>{
                        return <SingleGameTableElement singleGameUserData={g} key={k}
                                                       scoreChangeCallback={scoreChangeCallbackArray[k]}
                                                       score={scoreArr[k]}
                        />})
                    }
                </div>
                <button className="btn btn-sm btn-active btn-primary mr-[10px]" onClick={onApplyRoundClickHandler}>Apply round</button>
                <button className="btn btn-sm btn-active btn-primary mr-[10px]" onClick={onMainMenuClick}>Main menu</button>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }

};

export default SingleGame;