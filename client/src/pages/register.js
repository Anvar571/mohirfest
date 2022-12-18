import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import regImage from "../images/draw1.webp"
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/authAction';

const Register = () => {
  const initialState = {
    fullname: "", username: "", email: "", password: "", cf_pass: "", gander: ""
  }

  const [userData, setUserData] = useState(initialState)
  const {auth} = useSelector(state => state); 
  const [typePass, setTypePass] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {fullname, username, email, password, cf_pass} = userData;

  const handleChangeInpur = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]:value})
  }

  const handlerBtn = (e) => {
    e.preventDefault();
    dispatch(register(userData))
  }

  useEffect(() => {
    if (auth.token) navigate("/login")
  }, [navigate, auth.token])

  return (
    <section className="vh-100 pt-3" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-2">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" 
                          className="form-control" placeholder='Fullname...'
                          onChange={handleChangeInpur} value={fullname} name="fullname"/>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" 
                          className="form-control" placeholder='Username...'
                          onChange={handleChangeInpur} value={username} name="username"/>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" 
                          className="form-control" placeholder='Email...'
                          onChange={handleChangeInpur} value={email} name="email"/>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0 position-relative">
                          <input type={typePass ? "text" :"password"} id="form3Example4c" 
                          name="password" className="form-control" placeholder='password'
                          onChange={handleChangeInpur} value={password} />
                          <span className='showPass' onClick={() => setTypePass(!typePass)}>
                            {/* <BsFillEyeFill/> */}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0 position-relative">
                          <input type={typePass ? "text" :"password"} id="form3Example4c" 
                          name="cf_pass" className="form-control" placeholder='password'
                          onChange={handleChangeInpur} value={cf_pass}/>
                          <span className='showPass' onClick={() => setTypePass(!typePass)}>
                            {/* <BsFillEyeFill/> */}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex  mx-2 mb-2 mb-lg-2">
                        <button type="submit" 
                        className="text-start btn btn-primary btn-lg"
                        onClick={handlerBtn}>Register</button>
                      </div>
                      <div className="">
                        <p style={{display: "inline-block"}}>if you are registered</p>
                        <Link to="/login">
                          <p style={{display: "inline-block"}}>Login</p>
                        </Link>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src={regImage} width="700" height="400" className="img-fluid" alt="Sample " />
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

export default Register