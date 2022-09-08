import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createNewGame, deleteGame} from "./gameListSlice";
import {createSingleGameObj} from "../utils/createGameUtil";

export type UserType = {
    userName: string
    userId: string
    scores: number
    leader: boolean
    falls: number
    barrelTry: number
    barrel: number
    isOnBarrel: boolean
    isWinner: boolean
    justFall: boolean
}
type GameType = UserType[]
type SingleGameType = {
    [key: string]: GameType
}

const gameSlice = createSlice({
    name: 'gameSlice',
    initialState: {} as SingleGameType,
    reducers: {
        setNewScore(state, action: PayloadAction<{ gameId: string, userId: string, newScores: number, index: number }>) {

            //слетает с бочки если лажает на прикупе
            if (action.payload.newScores < 0 && state[action.payload.gameId][action.payload.index].isOnBarrel === true){
                state[action.payload.gameId][action.payload.index].barrelTry = 0
                state[action.payload.gameId][action.payload.index].isOnBarrel = false
                if (state[action.payload.gameId][action.payload.index].barrel !== 3) {
                    state[action.payload.gameId][action.payload.index].scores = 760
                } else if (state[action.payload.gameId][action.payload.index].barrel === 3){
                    state[action.payload.gameId][action.payload.index].scores = 0
                }
                // state[action.payload.gameId][action.payload.index].barrel += 1

                //слетает с третьей бочки при трех болтах
            } else if (action.payload.newScores === 0 && state[action.payload.gameId][action.payload.index].barrelTry === 2 && state[action.payload.gameId][action.payload.index].isOnBarrel === true && state[action.payload.gameId][action.payload.index].barrel === 3){
                debugger
                state[action.payload.gameId][action.payload.index].barrelTry = 0
                state[action.payload.gameId][action.payload.index].scores = 0
                state[action.payload.gameId][action.payload.index].isOnBarrel = false
                // state[action.payload.gameId][action.payload.index].barrel += 1

                //слетает с бочки при трех болтах
            } else if (action.payload.newScores === 0 && state[action.payload.gameId][action.payload.index].barrelTry === 2 && state[action.payload.gameId][action.payload.index].isOnBarrel === true) {
                debugger
                state[action.payload.gameId][action.payload.index].barrelTry = 0
                state[action.payload.gameId][action.payload.index].falls = 0
                state[action.payload.gameId][action.payload.index].scores = 760
                state[action.payload.gameId][action.payload.index].isOnBarrel = false

                //получает болт на бочке
            } else if (action.payload.newScores === 0 && state[action.payload.gameId][action.payload.index].barrelTry < 2 && state[action.payload.gameId][action.payload.index].isOnBarrel === true) {
                state[action.payload.gameId][action.payload.index].barrelTry += 1

                //получает третий болт не находясь на бочке
            } else if (action.payload.newScores === 0 && state[action.payload.gameId][action.payload.index].falls === 2 && state[action.payload.gameId][action.payload.index].isOnBarrel === false && state[action.payload.gameId][action.payload.index].justFall === false){
                debugger
                state[action.payload.gameId][action.payload.index].falls = 0
                state[action.payload.gameId][action.payload.index].scores += -120

            } else if (action.payload.newScores === 0 && state[action.payload.gameId][action.payload.index].falls < 2 && state[action.payload.gameId][action.payload.index].isOnBarrel === false && state[action.payload.gameId][action.payload.index].barrel >= 3) {
                debugger
                if (state[action.payload.gameId][action.payload.index].justFall===true){
                    debugger
                    state[action.payload.gameId][action.payload.index].falls = 0
                } else {
                    debugger
                    state[action.payload.gameId][action.payload.index].falls += 1
                }

                //получает болт не находясь на бочке
            } else if (action.payload.newScores === 0 && state[action.payload.gameId][action.payload.index].falls < 2 && state[action.payload.gameId][action.payload.index].isOnBarrel === false && state[action.payload.gameId][action.payload.index].scores<880) {
                debugger
                if (state[action.payload.gameId][action.payload.index].justFall===true){
                    debugger
                    state[action.payload.gameId][action.payload.index].falls = 0
                } else {
                    debugger
                    state[action.payload.gameId][action.payload.index].falls += 1
                }

                //сбрасываются очки при получении 555
            } else if (state[action.payload.gameId][action.payload.index].scores + action.payload.newScores === 555){
                state[action.payload.gameId][action.payload.index].scores = 0
                state[action.payload.gameId][action.payload.index].falls = 0

                //залезает на бочку если бочек менее 3
            } else if (state[action.payload.gameId][action.payload.index].scores + action.payload.newScores >= 880
                && state[action.payload.gameId][action.payload.index].isOnBarrel === false && state[action.payload.gameId][action.payload.index].barrel < 3){

                //если никого на бочке нет
                if (state[action.payload.gameId].findIndex(el=>el.isOnBarrel === true) === -1){
                    debugger
                    state[action.payload.gameId][action.payload.index].scores = 880
                    state[action.payload.gameId][action.payload.index].barrel += 1
                    state[action.payload.gameId][action.payload.index].falls = 0
                    state[action.payload.gameId][action.payload.index].isOnBarrel = true

                    //если кто-то уже на бочке
                } else {
                    debugger
                    const onCurrentBarrelIndex = state[action.payload.gameId].findIndex((arr)=>arr.isOnBarrel === true)
                    console.log(onCurrentBarrelIndex)
                    state[action.payload.gameId][onCurrentBarrelIndex].justFall = true
                    state[action.payload.gameId][action.payload.index].falls = 0

                    //сбрасывает с бочки если не с третьей
                    if (state[action.payload.gameId][onCurrentBarrelIndex].barrel !== 3){
                        debugger
                        state[action.payload.gameId][onCurrentBarrelIndex].isOnBarrel = false
                        state[action.payload.gameId][onCurrentBarrelIndex].scores = 760
                        state[action.payload.gameId][onCurrentBarrelIndex].falls = 0
                        state[action.payload.gameId][onCurrentBarrelIndex].barrelTry = 0
                        state[action.payload.gameId][action.payload.index].barrel += 1
                        state[action.payload.gameId][action.payload.index].scores = 880
                        state[action.payload.gameId][action.payload.index].isOnBarrel = true

                        //сбрасывает с третьей бочки
                    } else {
                        debugger
                        state[action.payload.gameId][onCurrentBarrelIndex].isOnBarrel = false
                        state[action.payload.gameId][onCurrentBarrelIndex].scores = 0
                        state[action.payload.gameId][onCurrentBarrelIndex].justFall = true
                        state[action.payload.gameId][action.payload.index].barrel += 1
                        state[action.payload.gameId][onCurrentBarrelIndex].falls = 0
                        state[action.payload.gameId][onCurrentBarrelIndex].barrelTry = 0
                        state[action.payload.gameId][action.payload.index].falls = 0
                        state[action.payload.gameId][action.payload.index].scores = 880
                        state[action.payload.gameId][action.payload.index].isOnBarrel = true
                    }

                }

                //устанавливает победителя
            } else if ((state[action.payload.gameId][action.payload.index].scores + action.payload.newScores >= 1005
                && state[action.payload.gameId][action.payload.index].isOnBarrel === true) || (state[action.payload.gameId][action.payload.index].scores + action.payload.newScores >= 1005
                && state[action.payload.gameId][action.payload.index].barrel >= 3)){
                state[action.payload.gameId][action.payload.index].scores += action.payload.newScores
                state[action.payload.gameId][action.payload.index].falls = 0
                state[action.payload.gameId][action.payload.index].isOnBarrel = false
                state[action.payload.gameId][action.payload.index].isWinner = true
            } else {
                state[action.payload.gameId][action.payload.index].scores += action.payload.newScores
                state[action.payload.gameId][action.payload.index].falls = 0
            }
        },
        setSingleGameData(state, action: PayloadAction<{ restoreSingleGameData: SingleGameType }>) {
            const restoreObj = action.payload.restoreSingleGameData
            const keys = Object.keys(restoreObj)
            keys.map(el=>{
                // const restoreData = restoreObj[el]
                state[el] = restoreObj[el]
            })

        },
        updateLeader(state, action: PayloadAction<{gameId: string}>){
            const currentLeaderIndex = state[action.payload.gameId].findIndex((arr)=>arr.leader === true)
            state[action.payload.gameId][currentLeaderIndex % 3].leader = false
            state[action.payload.gameId][(currentLeaderIndex + 1) % 3].leader = true
        },
        resetJustFall(state, action: PayloadAction<{gameId: string}>){
            state[action.payload.gameId].map(el=>el.justFall=false)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createNewGame, (state, action) => {
            state[action.payload.gameId] = createSingleGameObj(action.payload.gameId,
                action.payload.firstPlayer,
                action.payload.secondPlayer,
                action.payload.thirdPlayer)
        })
        builder.addCase(deleteGame, (state, action) => {
            delete state[action.payload.gameId]
        })
    }
})
export const {setNewScore, setSingleGameData, updateLeader, resetJustFall} = gameSlice.actions
export default gameSlice.reducer