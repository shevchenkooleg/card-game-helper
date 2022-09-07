import React from 'react';
import BoltIcon from '../assets/icons/BoltIcon';
import {UserType} from "../bll/gameSlice";

type FallsComponentPropsType = {
    singleGameUserData: UserType
}

const FallsComponent: React.FC<FallsComponentPropsType> = ({singleGameUserData}) => {

    const falls = singleGameUserData.falls
    console.log(falls)



    // switch (falls){
    //     case 1: {
    //         return (
    //             <div>
    //                 <BoltIcon/>
    //             </div>
    //         )
    //     }
    //     case 2: {
    //         return (
    //             <div>
    //                 <BoltIcon/>
    //                 <BoltIcon/>
    //             </div>
    //         )
    //     }
    //     case 3: {
    //         return (
    //             <div>
    //                 <BoltIcon/>
    //                 <BoltIcon/>
    //                 <BoltIcon/>
    //             </div>
    //         )
    //     }
    //     default: {
    //         return (
    //             <div></div>
    //         )
    //     }
    // }

    return (
        <div className='flex flex-col'>
            <div className={falls > 0 ? '' : 'opacity-0'}>
                <BoltIcon />
            </div>
            <div className={falls > 1 ? '' : 'opacity-0'}>
                <BoltIcon />
            </div>
        </div>
    );
};

export default FallsComponent;