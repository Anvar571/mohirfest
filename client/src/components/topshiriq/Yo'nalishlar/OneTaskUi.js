import React, { useEffect } from 'react'
import { BsArrowLeft } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import { getByIdTask } from '../../../redux/actions/taskAction';

const OneTaskUi = () => {
    const {taskid, id} = useParams();
    const dispatch = useDispatch();
    const {auth} = useSelector(state => state);

    useEffect(() => {
        dispatch(getByIdTask(id, taskid, auth.token))
    }, [dispatch, auth.token])

    return (
        <div>
            <Link to="/topshiriqlar" className='text-decoration-none' >
                <div className="py-3">
                    <BsArrowLeft />
                    <span className='px-2'>ortga qaytish</span>
                </div>
            </Link>
            <h1>One task about</h1>
        </div>
    )
}

export default OneTaskUi