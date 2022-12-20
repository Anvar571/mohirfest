import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import NotFoudPage from '../../../pages/notFoundPage';
import TaskOne from './TaksOne';

const Yonalish = () => {
    const {id} = useParams();
    try {
        return (
            <div className="px-3 px-sm-3 px-md-4">
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to="/topshiriqlar" className='text-decoration-none' >
                        <div className="py-3">
                            <BsArrowLeft />
                            <span className='px-2'>ortga qaytish</span>
                        </div>
                    </Link>
                    <Link to="/topshiriqlar/task">
                        <button className='btn btn-primary'>Create Task</button>
                    </Link>
                </div>
                <TaskOne id={id}/>
            </div>
        )
    } catch (error) {
        return <NotFoudPage />
    }
}

export default Yonalish