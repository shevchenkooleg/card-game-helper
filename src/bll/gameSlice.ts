import {createSlice} from "@reduxjs/toolkit";
import { createNewGame } from "./gameListSlice";
import {createSingleGameObj} from "../utils/createGameUtil";

export type UserType = {
    userName: string
    userId: string
    scores: number
}
type GameType = UserType[]
type SingleGameType = {
    [key: string]: GameType
}

const gameSlice = createSlice({
    name: 'gameSlice',
    initialState: {} as SingleGameType,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createNewGame, (state, action)=>{
            state[action.payload.gameId] = createSingleGameObj(action.payload.gameId,
                action.payload.firstPlayer,
                action.payload.secondPlayer,
                action.payload.thirdPlayer)
        })
    }
})

export default gameSlice.reducer