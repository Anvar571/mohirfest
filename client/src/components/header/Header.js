import React from 'react';
import { useState } from 'react';
import UserAvatar from '../../images/user-img.png';
import { BsSearch } from "react-icons/bs";
import '../../styles/home.css';
import { Link } from "react-router-dom"

function WelcomeUser(props) {
     return <span>{props.name}</span>;
}

const Header = () => {
     const user = JSON.parse(localStorage.getItem("refresh"))
     const [dateState, useDateState] = useState(new Date());
     return (
          <div>
               <div className="container d-flex my-4 justify-content-between border-bottom align-items-center pb-4">
                    <div className="d-flex flex-column d-none d-sm-block d-md-block">
                         <h4 className="fs-6 fs-sm-6 fs-md-3">Salom <WelcomeUser name={`${user.username}`} /></h4>
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
                              <span className="profileName d-none d-sm-none d-md-inline" style={{ color: "#000", paddingRight: "15px" }}>{user.fullname}</span>
                              <img src={UserAvatar} alt="User Avatar" />
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default Header