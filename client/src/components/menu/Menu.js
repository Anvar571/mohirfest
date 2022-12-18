import React from 'react'
import '../../styles/home.css';
import { BsHouseDoor } from "react-icons/bs";
import { BsUiChecksGrid } from "react-icons/bs";
import { BsWallet2 } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { BsFillCalendarFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Logo from "../../images/siteLogo.svg";

const Menu = () => {
     return (
          <div className="d-flex shadow-sm flex-column vh-100 position-fixed" >
               <Link to="/" className="mb-3 px-1 px-sm-1 px-md-3 mt-4 d-flex align-items-center"
                    style={{ textDecoration: "none" }}>
                    <img src={Logo} className="fs-4 me-3" alt="logo site" />
                    <h1 className='d-none d-sm-none d-md-block'
                         style={{ color: "#000" }}>Ilm ol</h1>
               </Link>
               <ul className="nav flex-column">
                    <li className="nav-item d-flex py-3">
                         <Link className="nav-link myNavLink d-flex align-content-center" to="/">
                              <BsHouseDoor />
                              <span className="px-3 d-none d-sm-none d-md-block">Bosh sahifa</span>
                         </Link>
                    </li>
                    <li className="nav-item d-flex py-3">
                         <Link className="nav-link myNavLink d-flex align-content-center" to="/topshiriqlar">
                              <BsUiChecksGrid />
                              <span className="px-3 d-none d-sm-none d-md-block">Topshiriqlar</span>
                         </Link>
                    </li>
                    <li className="nav-item d-flex py-3">
                         <Link className="nav-link myNavLink d-flex align-content-center" to="/about" >
                              <BsWallet2 />
                              <span className="px-3 d-none d-sm-none d-md-block">Site About</span>
                         </Link>
                    </li>
                    <li className="nav-item d-flex py-3">
                         <Link className="nav-link myNavLink d-flex align-content-center" to="/yangiliklar" >
                              <BsFillChatQuoteFill />
                              <span className="px-3 d-none d-sm-none d-md-block">So'ngi yangiliklar</span>
                         </Link>
                    </li>
                    <li className="nav-item d-flex py-3">
                         <Link className="nav-link myNavLink d-flex align-content-center" to="/maslahatlar" >
                              <BsFillCalendarFill />
                              <span className="px-3 d-none d-sm-none d-md-block">Foydali maslahatlar</span>
                         </Link>
                    </li>
                    <li className="nav-item d-flex py-3">
                         <Link className="nav-link myNavLink d-flex align-content-center" to="/profile">
                              <BsGear />
                              <span className="px-3 d-none d-sm-none d-md-block">Profile</span>
                         </Link>
                    </li>
               </ul>

          </div>
     )
}

export default Menu