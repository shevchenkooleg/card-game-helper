import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {ThunkDispatch} from "redux-thunk";
import gameListSlice from "./gameListSlice";
import gameSlice from "./gameSlice";


export const store = configureStore({
    reducer: {
        gameList: gameListSlice,
        singleGame: gameSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(thunkMiddleware)
})


export type AppDispatch = typeof store.dispatch
export type AppStateType = ReturnType<typeof store.getState>



export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
export const useAppDispatch = () => useDispatch<ThunkDispatch<AppStateType, unknown, RootReducerType>>()
export type RootReducerType = any

//@ts-ignore
window.store = store;