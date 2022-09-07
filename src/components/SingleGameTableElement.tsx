import React, {ChangeEvent} from 'react';
import {UserType} from "../bll/gameSlice";
import FallsComponent from "./FallsComponent";
import IncrementButtonBlock from "./IncrementButtonBlock";

type SingleGameTablePropsType = {
    singleGameUserData: UserType
    scoreChangeCallback: (newScore: number) => void
    score: number
}


const SingleGameTableElement: React.FC<SingleGameTablePropsType> = ({
                                                                        singleGameUserData,
                                                                        scoreChangeCallback,
                                                                        score
                                                                    }) => {

    const onScoreChange = (e: ChangeEvent<HTMLInputElement>) => {
        scoreChangeCallback(Number(e.currentTarget.value))
    }
    const onIncrementButtonClickHandler = (incrementScore: number) => {
        scoreChangeCallback(score + incrementScore)
    }


    console.log(singleGameUserData.leader)

    return (
        <div className='flex justify-start w-[350px] mt-[20px] items-center'>

            <div className={singleGameUserData.leader ? '' : 'opacity-0'}>*</div>
            <div className={singleGameUserData.isOnBarrel ? 'mx-[20px] bg-red-800' : 'mx-[20px]'}>{singleGameUserData.userName}</div>
            <div>{singleGameUserData.scores}</div>
            <input type="text" placeholder={score.toString()}
                   className="input input-bordered w-[70px] max-w-xs mx-[20px]"
                   value={score}
                   onChange={onScoreChange}
            />
            <div className='flex items-center'>
                <FallsComponent singleGameUserData={singleGameUserData}/>
            </div>
            <div className='flex flex-col'>
                <IncrementButtonBlock value={100} onClick={onIncrementButtonClickHandler}/>
                <IncrementButtonBlock value={10} onClick={onIncrementButtonClickHandler}/>
                <IncrementButtonBlock value={5} onClick={onIncrementButtonClickHandler}/>
            </div>

        </div>
    );
};

export default SingleGameTableElement;