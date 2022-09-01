import React, {ChangeEvent} from 'react';
import {UserType} from "../bll/gameSlice";
import FallsComponent from "./FallsComponent";

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


    console.log(singleGameUserData.leader)

    return (
        <div className='flex justify-between w-[400px] mt-[10px] items-center'>

            <div className={singleGameUserData.leader ? '' : 'opacity-0'}>*</div>
            <div>{singleGameUserData.userName}</div>
            <div>{singleGameUserData.scores}</div>
            <input type="text" placeholder={score.toString()}
                   className="input input-bordered w-[100px] max-w-xs"
                   value={score}
                   onChange={onScoreChange}
            />
            <div className='flex items-center'>
                <FallsComponent singleGameUserData={singleGameUserData}/>
            </div>

        </div>
    );
};

export default SingleGameTableElement;