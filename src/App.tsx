import React, {useEffect} from 'react';
import './global.css';
import GameList from "./components/GameList";
import Header from "./components/Header";
import AddNewGame from "./components/AddNewGame";
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import SingleGame from './components/SingleGame';
import {useAppDispatch} from "./bll/store";
import { setGameData } from './bll/gameListSlice';
import { setSingleGameData } from './bll/gameSlice';

function App() {

    const dispatch = useAppDispatch()
    // const singleGameData = useAppSelector(state => state.singleGame)

    useEffect(() => {
        if (localStorage['singleGameData'] !== undefined) {
            dispatch(setSingleGameData({restoreSingleGameData: JSON.parse(localStorage['singleGameData'])}))
        }
        if (localStorage['gameData'] !== undefined) {
            dispatch(setGameData({restoreGames: JSON.parse(localStorage['gameData'])}))
        }

    }, [dispatch])

    // useEffect(() => {
    //
    //
    //
    //     // if (localStorage['gameData'] !== undefined) {
    //     //     localStorage['cardHelper'] = JSON.stringify(gameData)
    //     // }
    //     // if (localStorage['gameData'] !== undefined) {
    //     //     localStorage['cardHelper'] = JSON.stringify(gameData)
    //     // }
    //     // // let localStorageNews = JSON.parse(localStorage['newsPool'])
    //     // // console.log(localStorageNews)
    //     // // dispatch(setNews(localStorageNews))
    //     // if (localStorage['newsPool'].length < 101){
    //     //     console.log(JSON.parse(localStorage['newsPool']))
    //     //     dispatch(setNews(JSON.parse(localStorage['newsPool'])))
    //     //     console.log('AppEffect_FirstStart_reWriteStateFromLocalStorage')
    //     // } else {
    //     //     let localStorageArray = JSON.parse(localStorage['newsPool']).slice(0,100)
    //     //     console.log(localStorageArray)
    //     //     dispatch(setNews(localStorageArray))
    //     //     // localStorage['newsPool'] = JSON.stringify(localStorageArray)
    //     //     console.log('AppEffect_FirstStart_reWriteStateFromLocalStorage_withArrLengthTrim')
    //     //     }
    //     //
    //     // }
    // }, [singleGameData])

    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<GameList/>}/>
                <Route path={'/addNewGame'} element={<AddNewGame/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
                <Route path={'/game/:gameId'} element={<SingleGame/>}/>
            </Routes>
        </>

    );
}

export default App;
