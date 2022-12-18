import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

const Yonalish = () => {
    const { id } = useParams()
    const component = () => require(`./${id}`).default;

    return (
        <div>
            <div className="px-4">
                <Link to="/topshiriqlar" className='text-decoration-none' >
                    <div className="py-3">
                        <BsArrowLeft />
                        <span className='px-2'>ortga qaytish</span>
                    </div>
                </Link>
                {React.createElement(component())}
            </div>
        </div>
    )
}

export default Yonalish