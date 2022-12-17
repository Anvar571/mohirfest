import React from 'react';
import { useState } from 'react';
import UserAvatar from '../../images/user-img.png';
import { BsSearch } from "react-icons/bs";
import '../../styles/home.css';

function WelcomeUser(props) {
     return <span>{props.name}</span>;
}

const Header = () => {
     const [dateState, useDateState] = useState(new Date());
     return (
          <div>
               <div className="container d-flex my-4 justify-content-around ">
                    <div className="d-flex flex-column">
                         <h4>Salom <WelcomeUser name="Jahongir" /></h4>
                         <span>
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
                                   <BsSearch style={{ position: "absolute", right: "30px" }} />
                              </div>
                         </form>
                    </div>
                    <div>
                         <div>
                              <span className="profileName">Jahongir Murodboev</span>
                              <img src={UserAvatar} alt="User Avatar" />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Header