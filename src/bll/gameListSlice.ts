import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createGameListObj} from "../utils/createGameUtil";

type GameType = {
    gameId: string
    name: string
    startDate: number
    circle: number
}

const gameListSlice = createSlice({
    name: 'gameListSlice',
    initialState: [] as Array<GameType>,
    reducers: {
        createNewGame(state, action: PayloadAction<{gameId: string, gameName: string, firstPlayer: string, secondPlayer: string, thirdPlayer: string}>) {
            const gameListObj = createGameListObj(action.payload.gameId, action.payload.gameName)
            state.push(gameListObj)
        },
        setNewCircle(state, action: PayloadAction<{gameId: string}>){
            // @ts-ignore
            state.find(el=>el.gameId === action.payload.gameId).circle += 1
        },
        setGameData(state, action: PayloadAction<{restoreGames:GameType[]}>){
            action.payload.restoreGames.forEach(el=>
                state.push(el)
            )
        },
        deleteGame(state, action: PayloadAction<{gameId: string}>){
            state.splice(state.findIndex((arrow) => arrow.gameId === action.payload.gameId), 1);

        }
    }
})

export const {createNewGame, setNewCircle, setGameData, deleteGame} = gameListSlice.actions
export default gameListSlice.reducer