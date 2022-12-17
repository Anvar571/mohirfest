import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {BsArrowLeft} from "react-icons/bs";

const Yonalish = () => {
    const { id } = useParams()
    const component = () => require(`./${id}`).default;
    
    return (
        <div>
            <Link to="/topshiriqlar" className='' >
                <BsArrowLeft />
                <span>ortga</span>
            </Link>
            {React.createElement(component())}
        </div>
    )
}

export default Yonalish