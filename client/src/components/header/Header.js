import React, { useRef } from 'react';
import { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import '../../styles/home.css';
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux";
import { searchTasks } from '../../redux/actions/searchAction';

function WelcomeUser(props) {
     return <span>{props.name}</span>;
}

const Header = () => {
     const { auth } = useSelector(state => state);
     const [dateState] = useState(new Date());
     const [search, setSearch] = useState('');
     const dispatch = useDispatch();
     const navigate = useNavigate();
     const searchRef = useRef();

     const handleInnput = (e) => {
          e.preventDefault();
          setSearch(e.target.value)
     }

     const handleSubmit = (e) => {
          e.preventDefault();
          dispatch(searchTasks(search, auth.token))
          searchRef.current.reset()
          navigate("/search")
     }

     return (
          <div>
               <div className="container d-flex my-4 justify-content-between border-bottom align-items-center pb-4">
                    <div className="d-flex flex-column d-none d-sm-block d-md-block">
                         <h4 className="fs-6 fs-sm-6 fs-md-3">Salom <WelcomeUser name={`${auth.user.username}`} /></h4>
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
                         <form action='/search' method='GET' onSubmit={handleSubmit} ref={searchRef}>
                              <div className="mySearchInput" style={{ position: "relative" }}>
                                   <input className="myInput w-100 form-control"  onChange={handleInnput}
                                        type="text" placeholder="Search tasks" style={{ border: "1px solid #ddd" }} />
                                   <BsSearch style={{ position: "absolute", right: "10px", top: "10px" }} />
                              </div>
                         </form>
                    </div>
                    <div>
                         <Link to="/profile" style={{ textDecoration: "none" }}> 
                              <span className="profileName d-none d-sm-none d-md-inline" style={{ color: "#000", paddingRight: "15px" }}>{auth.user.fullname}</span>
                              <img src={auth.user.avatar} alt="User Avatar" width="50" height="50"
                              style={{borderRadius:"50%", objectFit:"cover"}} />
                         </Link>
                    </div>
               </div>
          </div>
     )
}

export default Header