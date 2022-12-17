import React from 'react'
import '../../styles/home.css';
import { BsHouseDoor } from "react-icons/bs";
import { BsUiChecksGrid } from "react-icons/bs";
import { BsWallet2 } from "react-icons/bs";
import { BsGear } from "react-icons/bs";


const Menu = () => {
     return (
          <div className="d-flex flex-column">
               <div className="mb-3 px-3">
                    <span className="fs-4">Logo</span>
               </div>
               <ul class="nav flex-column">
                    <li class="nav-item d-flex py-3">
                         <a class="nav-link myNavLink d-flex align-content-center" href="#">
                              <BsHouseDoor />
                              <span className="px-3">Bosh sahifa</span>
                         </a>
                    </li>
                    <li class="nav-item d-flex py-3">
                         <a class="nav-link myNavLink d-flex align-content-center" href="#">
                              <BsUiChecksGrid />
                              <span className="px-3">Topshiriqlar</span>
                         </a>
                    </li>
                    <li class="nav-item d-flex py-3">
                         <a class="nav-link myNavLink d-flex align-content-center" href="#">
                              <BsWallet2 />
                              <span className="px-3">Balans</span>
                         </a>
                    </li>
                    <li class="nav-item d-flex py-3">
                         <a class="nav-link myNavLink d-flex align-content-center" href="#">
                              <BsGear />
                              <span className="px-3">Sozlamalar</span>
                         </a>
                    </li>
               </ul>
          </div>
     )
}

export default Menu