import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import regImage from "../images/draw1.webp"
import { login } from '../redux/actions/authAction';

const Login = () => {
  const {auth} = useSelector(state => state);
  const initialState = {email: "", password: ""}
  const [userData, setUserData] = useState(initialState);
  const {email, password} = userData
  const [typePass, setTypePass] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (auth.token) navigate("/")
  }, [navigate, auth.token])

  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]:value})
  }

  const handlerBtn = (e) => {
    e.preventDefault();
    dispatch(login(userData))
  }

  return (
    <section className="vh-100 pt-5" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        {/* <div className="row d-flex justify-content-center align-items-center h-100"> */}
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
                    <form className="mx-1 mx-md-2">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-4">
                          <input type="email" id="form3Example3c" 
                          value={email} 
                          name="email" onChange={handleChangeInput} 
                          placeholder="Email"  className="form-control" />
                          
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0 position-relative">
                          <input type={typePass ? "text" :"password"} id="form3Example4c" 
                          value={password} onChange={handleChangeInput} 
                          name="password" className="form-control" placeholder='password'/>
                          <span className='showPass' onClick={() => setTypePass(!typePass)}>
                            {/* <BsFillEyeFill/> */}
                          </span>

                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-2 mb-2 mb-lg-2">
                        <button type="submit" 
                        className="text-start btn btn-primary btn-lg"
                        onClick={handlerBtn}>Login</button>
                      </div>
                      <div className='text-center'>
                        <p style={{display: "inline-block"}}>if you are not registered</p>
                        <Link to="/register">
                          <p style={{display: "inline-block"}}>Register</p>
                        </Link>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 
                  d-flex align-items-center order-1 order-lg-2">
                    <img src={regImage} width="700" height="400" 
                    className="img-fluid" alt="Sample " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>
    </section>

  )
}

export default Login