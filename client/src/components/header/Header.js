import React from 'react';
import { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import '../../styles/home.css';
<<<<<<< HEAD
import { Link } from "react-router-dom"
=======
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
>>>>>>> 95f9e8802850a76545b7fa4b58e4296ea7b2bf79

function WelcomeUser(props) {
     return <span>{props.name}</span>;
}

const Header = () => {
     const { auth } = useSelector(state => state);
     const [dateState, useDateState] = useState(new Date());
     return (
          <div>
               <div className="container d-flex my-4 justify-content-between border-bottom align-items-center pb-4">
                    <div className="d-flex flex-column d-none d-sm-block d-md-block">
<<<<<<< HEAD
                         <h4 className="fs-6 fs-sm-6 fs-md-3">Salom <WelcomeUser name={`${user.username}`} /></h4>
=======
                         <h4 className="fs-6 fs-sm-6 fs-md-3">Salom <WelcomeUser name={`${auth.user.username}`} /></h4>
>>>>>>> 95f9e8802850a76545b7fa4b58e4296ea7b2bf79
                         <span className="fs-6 fs-sm-6 fs-md-5">
                              {dateState.toLocaleString('en-US', {
                                   hour: 'numeric',
                                   minute: 'numeric',
                                   hour12: true,
                              })}
                              {' '}
                              {dateState.toLocaleDateString('en-US', {
                                   day: 'numeric',
                                   month: 'short',
                                   year: 'numeric',
                              })}
                         </span>
                    </div>
                    <div className="navSearchForm">
                         <form>
                              <div className="mySearchInput" style={{ position: "relative" }}>
                                   <input className="myInput w-100 form-control"
                                        type="text" placeholder="Search tasks" style={{ border: "1px solid #ddd" }} />
                                   <BsSearch style={{ position: "absolute", right: "10px", top: "10px" }} />
                              </div>
                         </form>
                    </div>
                    <div>
                         <Link to="/profile" style={{ textDecoration: "none" }}>
<<<<<<< HEAD
                              <span className="profileName d-none d-sm-none d-md-inline" style={{ color: "#000", paddingRight: "15px" }}>{user.fullname}</span>
                              <img src={UserAvatar} alt="User Avatar" />
=======
                              <span className="profileName d-none d-sm-none d-md-inline" style={{ color: "#000", paddingRight: "15px" }}>{auth.user.fullname}</span>
                              <img src={auth.user.avatar} alt="User Avatar" width="50" height="50"
                              style={{borderRadius:"50%", objectFit:"cover"}} />
>>>>>>> 95f9e8802850a76545b7fa4b58e4296ea7b2bf79
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default Header