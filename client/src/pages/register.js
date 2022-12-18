import React, {useEffect, useState} from 'react';
import imgUrl from "../images/draw1.webp";
import {useNavigate} from "react-router-dom"
import valid from '../utils/vaildation';

const Register = () => {
    const initialState = {
        fullname: "", username:"", email: "", password: "", cf_password:""
    }
    const navigate = useNavigate();
    
    const [userData, setUserData]  =  useState(initialState)
    const {fullname, username, email, password, cf_password} = userData

    const handleInput = (e)=> {
        const {name, value} = e.target;
        setUserData({...userData, [name]:value})
    }

    const handleBtn =(e) => {
<<<<<<< HEAD
        e.preventDefault();
        try {
=======
        try {
            e.preventDefault();
<<<<<<< HEAD
            const date = valid(userData)
            if (date.errLength === 0){
                const user = JSON.stringify(userData)
    
                localStorage.setItem("access", user)

                window.location.href = "/login"
            }else {
                if (date.errMsg.fullname) {
                    alert(date.errMsg.fullname)
                }else if (date.errMsg.username){
                    alert(date.errMsg.username)
                }else if (date.errMsg.email){
                    alert(date.errMsg.email)
                }else if (date.errMsg.password){
                    alert(date.errMsg.password)
                }else if (date.errMsg.cf_password){
                    alert(date.errMsg.cf_password)
                }else {
                    alert("Fill out the form")
                }
            }
=======
>>>>>>> 6622c8885a51c1058b737c33b8d5312fb180437f
            const user = JSON.stringify(userData)

            localStorage.setItem("token", user)
            
<<<<<<< HEAD
            navigate("/")
=======
            window.location.href = "/login"
>>>>>>> 6622c8885a51c1058b737c33b8d5312fb180437f
>>>>>>> refs/remotes/origin/front2
        } catch (error) {
            return alert(error+"");
        }
    }

    useEffect(() => {
<<<<<<< HEAD
        if (localStorage.getItem("token")) navigate("/login")
=======
        if (localStorage.getItem("token")) navigate("/")
<<<<<<< HEAD
    }, [])
=======
>>>>>>> refs/remotes/origin/front2
    }, [navigate])
>>>>>>> 6622c8885a51c1058b737c33b8d5312fb180437f

    return (
        <section className="vh-100" style={{ backgroundColor: '#eee', }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: 25 }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-4">Sign up</p>
<<<<<<< HEAD
                                        <form className="mx-1 mx-md-4">
=======
                                        <form className="mx-1 mx-md-4" onSubmit={handleBtn}>
>>>>>>> 6622c8885a51c1058b737c33b8d5312fb180437f
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" 
                                                    id="form3Example1c" 
                                                    className="form-control" 
                                                    placeholder='Your name'
                                                    value={fullname} name="fullname"
                                                    onChange={handleInput}
                                                    required/>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" 
                                                    id="form3Example1c" 
                                                    className="form-control" 
                                                    placeholder='User name'
                                                    value={username} name="username"
                                                    onChange={handleInput}
                                                    required/>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example3c"
                                                     className="form-control" 
                                                     placeholder='email'
                                                     value={email} name="email"
                                                     onChange={handleInput}
                                                     required/>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c"
                                                     className="form-control" 
                                                     placeholder='password'
                                                     value={password} name="password"
                                                     onChange={handleInput}
                                                     required/>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password"
                                                    id="form3Example4cd" 
                                                    className="form-control" 
                                                    placeholder='comfirm password'
                                                    value={cf_password} name="cf_password"
                                                    onChange={handleInput}
                                                    required/>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mx-4 mb-3 mb-lg-2">
                                                <button type="submit" className="btn btn-primary btn-lg"
                                                onClick={handleBtn}>Register</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src={imgUrl} className="img-fluid" alt="Sample avatar" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

<<<<<<< HEAD
export default Register
=======
export default Register
>>>>>>> 6622c8885a51c1058b737c33b8d5312fb180437f
