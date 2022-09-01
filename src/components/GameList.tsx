import React, {useRef, useState} from 'react';
import GameTableElement from "./GameTableElement";
import {useAppDispatch, useAppSelector} from "../bll/store";
import ModalWindow from "./ModalWindow";
import { deleteGame } from '../bll/gameListSlice';

const GameList = () => {

    const modalBtnRef = useRef<HTMLLabelElement>(null)
    const gamesArr = useAppSelector(state => state.gameList)
    const [modalName, setModalName] = useState('')
    const [deleteGameId, setDeleteGameId] = useState('')


    const dispatch = useAppDispatch()
    const onDeleteClickHandler = () => {
        modalBtnRef.current && modalBtnRef.current.click()
    }
    const onConfirmClickHandler = () => {
        dispatch(deleteGame({gameId: deleteGameId}))

    }
    const onDiscardClickHandler = () => {
        alert('no')
    }

    return (
        <>
            <label ref={modalBtnRef} htmlFor='my-modal' className="btn modal-button hidden">open
                modal</label>
            <ModalWindow gameName={modalName}
                         onConfirm={onConfirmClickHandler}
                         onDiscard={onDiscardClickHandler}/>
            <div className='flex flex-wrap mt-[10px]'>
                {gamesArr.map((g, k) => {
                    return <GameTableElement gameId={g.gameId} key={k}
                                             onDelete={onDeleteClickHandler}
                                             setModalName={setModalName}
                                             setDeleteGameId={setDeleteGameId}
                    />
                })}
            </div>
        </>

    );
};

export default GameList;