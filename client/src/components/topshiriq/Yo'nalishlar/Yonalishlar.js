import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import NotFoudPage from '../../../pages/notFoundPage';

const genereatePage = (id) => {
    const component = () => require(`./${id}`).default;
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
                {React.createElement(component())}
            </div>
        )
    } catch (error) {
        return <NotFoudPage />
    }

}

const Yonalish = () => {
    const { id } = useParams()
    return genereatePage(id)
}

export default Yonalish