import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createGameListObj} from "../utils/createGameUtil";

type GameType = {
    gameId: string
    name: string
    startDate: number
}

const gameListSlice = createSlice({
    name: 'gameListSlice',
    initialState: [] as Array<GameType>,
    reducers: {
        createNewGame(state, action: PayloadAction<{gameId: string, firstPlayer: string, secondPlayer: string, thirdPlayer: string}>) {
            const gameListObj = createGameListObj(action.payload.gameId)
            state.push(gameListObj)
        },
    },
})

export const {createNewGame} = gameListSlice.actions
export default gameListSlice.reducer