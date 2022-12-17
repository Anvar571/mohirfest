import React from 'react'
import '../../styles/home.css';
import HomeMenuIcon from '../../images/home-icon.svg';
import BookMenuIcon from '../../images/book-icon.svg';
import PayMenuIcon from '../../images/payout-icon.svg';
import SettingsMenuIcon from '../../images/settings-icon.svg';


const Menu = () => {
     return (
          <div className="d-flex flex-column">
               <div className="mb-3">
                    <span className="fs-4">Logo</span>
               </div>
               <ul class="nav flex-column">
                    <li class="nav-item d-flex py-3">
                         <img src={HomeMenuIcon} alt="Icon" />
                         <a class="nav-link myNavLink" href="#">Bosh sahifa</a>
                    </li>
                    <li class="nav-item d-flex py-3">
                         <img src={BookMenuIcon} alt="Icon" />
                         <a class="nav-link myNavLink" href="#">Topshiriqlar</a>
                    </li>
                    <li class="nav-item d-flex py-3">
                         <img src={PayMenuIcon} alt="Icon" />
                         <a class="nav-link myNavLink" href="#">Balans</a>
                    </li>
                    <li class="nav-item d-flex py-3">
                         <img src={SettingsMenuIcon} alt="Icon" />
                         <a class="nav-link myNavLink" href="#">Sozlamalar</a>
                    </li>
               </ul>
          </div>
     )
}

export default Menu