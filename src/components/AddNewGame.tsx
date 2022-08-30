import {useFormik} from 'formik';
import React from 'react';
import { createNewGame } from '../bll/gameListSlice';
import {useAppDispatch} from '../bll/store';
import {v1} from "uuid";
import {useNavigate} from "react-router-dom";

const AddNewGame = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const formik = useFormik({
        initialValues: {
            '1st-player': '',
            '2nd-player': '',
            '3rd-player': '',
        },
        // validationSchema: LoginValidationSchema,
        onSubmit: (values, actions) => {
            const gameId = v1()
            actions.resetForm({values:{'1st-player':'', '2nd-player':'','3rd-player':''}})
            dispatch(createNewGame({gameId,
                firstPlayer: formik.values["1st-player"],
                secondPlayer: formik.values["2nd-player"],
                thirdPlayer: formik.values["3rd-player"],}))
            navigate('/')
        }
    })


    return (
        <div className=''>
            <form onSubmit={formik.handleSubmit}>
                <div className='flex flex-col items-center'>
                    <label htmlFor="1st-player">1st-player</label>
                    <input type="text" className="input input-bordered w-full max-w-xs"
                           id="1st-player"
                           name="1st-player"
                           onChange={formik.handleChange}
                        // status={!!formik.errors.login && formik.touched.login ? 'error' : ''}
                           placeholder={formik.touched["1st-player"] ? formik.errors["1st-player"] : ''}
                           value={formik.values["1st-player"]}
                           style={{width: '200px'}}
                    />
                    <label htmlFor="2nd-player">2nd-player</label>
                    <input type="text" className="input input-bordered w-full max-w-xs"
                           id="2nd-player"
                           name="2nd-player"
                           onChange={formik.handleChange}
                        // status={!!formik.errors.login && formik.touched.login ? 'error' : ''}
                           placeholder={formik.touched["2nd-player"] ? formik.errors["2nd-player"] : ''}
                           value={formik.values["2nd-player"]}
                           style={{width: '200px'}}
                    />
                    <label htmlFor="2nd-player">3rd-player</label>
                    <input type="text" className="input input-bordered w-full max-w-xs"
                           id="3rd-player"
                           name="3rd-player"
                           onChange={formik.handleChange}
                           // onChange={(e: any)=>{
                           //     console.log(e.currentTarget.value)}}
                        // status={!!formik.errors.login && formik.touched.login ? 'error' : ''}
                           placeholder={formik.touched["3rd-player"] ? formik.errors["3rd-player"] : ''}
                           value={formik.values["3rd-player"]}
                           style={{width: '200px'}}
                    />
                    <button className="btn btn-sm btn-active btn-primary mr-[10px] mt-[10px]" type='submit'>Start</button>
                    <button className="btn btn-sm btn-active btn-primary mr-[10px] mt-[10px]" type='reset' onClick={()=>{
                        console.log('yoyoyo')}}>Back</button>
                </div>

            </form>
        </div>
    );
};

export default AddNewGame;