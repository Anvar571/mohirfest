import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {BsArrowLeft} from "react-icons/bs";

const Yonalish = () => {
    const { id } = useParams()
    return (
        <div>
            <Link to="/topshiriqlar" className='' >
                <BsArrowLeft />
                <span>ortga</span>
            </Link>
            <h1>{id.toUpperCase()} yo'nalish bo'yicha topshiriqlar</h1>
        </div>
    )
}

export default Yonalish