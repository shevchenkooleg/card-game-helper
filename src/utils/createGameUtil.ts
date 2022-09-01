import { v1 } from "uuid"

export const createGameListObj = (gameId: string, gameName: string) => {
    let obj = {
        name: gameName,
        gameId: gameId,
        startDate: Date.now(),
        circle: 1,
    }
    console.log(obj)
    return obj
}

export const createSingleGameObj = (gameId: string, name1: string, name2: string, name3: string) => {
    let arr = [
        {
            userName: name1,
            userId: v1(),
            gameId: gameId,
            scores: 0,
            leader: true,
            falls: 0,
        },
        {
            userName: name2,
            userId: v1(),
            gameId: gameId,
            scores: 0,
            leader: false,
            falls: 0,
        },
        {
            userName: name3,
            userId: v1(),
            gameId: gameId,
            scores: 0,
            leader: false,
            falls: 0,
        },
    ]
    console.log(arr)
    return arr
}

