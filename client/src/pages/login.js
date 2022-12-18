import React, { useState } from 'react'
import imgUrl from "../images/draw1.webp"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const initialState = { email: "", password: "" }
    const [userData, setUserData] = useState(initialState);
    const { email, password } = userData;
    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }


    const handleBtn = (e) => {
        e.preventDefault();
        try {
            const user = JSON.parse(localStorage.getItem("access"))
            if (user.email !== email) return alert("Email and password is invalid")
            if (password !== user.password) return alert("Email and password is invalid")
            alert("Login success")
            localStorage.removeItem("access")
            localStorage.setItem("refresh", JSON.stringify(user))
            navigate("/");
        } catch (error) {
            return alert(error.message)
        }
    }


    return (
        <section className="vh-100 shadow-lg" style={{ backgroundColor: '#eee', border: "none" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" >
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
                                        <form className="mx-1 mx-md-4" >
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email"
                                                        id="form3Example3c" name='email'
                                                        placeholder='Your email'
                                                        className="form-control"
                                                        onChange={handleInput}
                                                        value={email} />
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password"
                                                        id="form3Example4c"
                                                        name='password'
                                                        className="form-control"
                                                        placeholder='password'
                                                        onChange={handleInput}
                                                        value={password} />
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start mx-4 mb-3 mb-lg-4">
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

export default Login