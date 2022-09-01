import React from 'react';

type ModalWindowPropsType = {
    gameName: string
    onConfirm: () => void
    onDiscard: () => void

}

const ModalWindow: React.FC<ModalWindowPropsType> = ({gameName, onConfirm, onDiscard}) => {

    return (
        <>
            <input type="checkbox" id='my-modal' className="modal-toggle"/>
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Do you want to delete {gameName} game?</h3>
                    <div className="modal-action">
                        <label htmlFor='my-modal' className="btn"
                               onClick={onConfirm}>Yes</label>
                        <label htmlFor='my-modal' className="btn"
                               onClick={()=>onDiscard}>No</label>
                    </div>
                </div>
            </div>
        </>
    )
};

export default ModalWindow;