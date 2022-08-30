import React from 'react';
import './global.css';
import GameList from "./components/GameList";
import Header from "./components/Header";
import AddNewGame from "./components/AddNewGame";
import {Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';

function App() {

    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<GameList/>}/>
                <Route path={'/addNewGame'} element={<AddNewGame/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </>

    );
}

export default App;
