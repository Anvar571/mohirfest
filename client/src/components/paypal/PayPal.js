import React, { useEffect } from 'react'
import { useSelector } from "react-redux"

const PayPal = () => {
    const { auth } = useSelector(state => state);

    return (
        <div>
            <div className='d-flex justify-content-between align-items-center p-2'
                style={{ background: "rgb(225, 245, 253)", borderRadius: "5px" }}>
                <i className='w-100'>Foydalanuvchining <strong >{auth.user.username}ning</strong> to'plagan balli </i>
                <button className='btn btn-success'>{auth.user.ball}</button>
            </div>
        </div>
    )
}

export default PayPal