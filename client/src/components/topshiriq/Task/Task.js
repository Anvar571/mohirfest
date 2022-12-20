import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs";

const Task = () => {
    const {id} = useParams();
    return (
        <div >
            <Link to={`/topshiriqlar/${id}`} className='text-decoration-none' >
                <div className="py-3">
                    <BsArrowLeft />
                    <span className='px-2'>ortga qaytish</span>
                </div>
            </Link>
            <h1>Task</h1>
        </div>
    )
}

export default Task