import React from 'react';

type PropsType = {
    value: number
    onClick: (incrementScore: number)=> void
}

const IncrementButtonBlock: React.FC<PropsType> = ({value, onClick}) => {


    const onIncrementButtonClickHandler = () => {
        onClick(value)
    }
    const onDecrementButtonClickHandler = () => {
        onClick(-value)
    }


    return (
        <div className='flex ml-[20px] mb-[10px]'>
            <div className='bg-violet-600 w-[38px] mr-[10px] rounded-xl flex justify-center' onClick={onIncrementButtonClickHandler}>+{value}</div>
            <div className='bg-green-700 w-[38px] rounded-xl flex justify-center' onClick={onDecrementButtonClickHandler}>-{value}</div>
        </div>
    );
};

export default IncrementButtonBlock;