import React from 'react'
// import { Link } from 'react-router-dom'
import { BsCheckCircle, BsArrowLeft} from "react-icons/bs";
import { Link } from 'react-router-dom';

const Home = () => {
     return (
          <div className='home'>
               <div className='row'>
                    <div className='shadow-sm col-md-6 m-3 '>
                         <h5>Ilmni orqali buyuk kashfiyolar qilish</h5>
                    </div>
                    <div className='shadow-sm col-md-3 m-3 '>
                         <BsCheckCircle />
                         <h5>Rag'batlantirish</h5>
                         <b>Yutuqlar yutib olish </b>
                    </div>
                    <div className='shadow-sm col-md-3  m-3 col3'>
                         <BsCheckCircle />
                         <h5>Kuchli intizom</h5>
                         <b>Homeworking</b>
                    </div>
               </div>
               <h2>Biz sizga nimalarni taklif qilamiz !</h2>
               <div className="">
                    <ul className='home_about_ul'>
                         <li className='home_about_li shadow '>
                              Ilm olishga rag'batlantirish
                         </li>
                         <li className='home_about_li shadow '>
                              Asosan yoshlarni Qo'lab quvvatlash
                         </li>
                         <li className='home_about_li shadow '>
                              Zamonaviy ilmlar texnalogiyalar yaqidagi ma'lumotlar
                         </li>
                         <li className='home_about_li shadow '>
                              Asosan yoshlarni Qo'lab quvvatlash
                         </li>
                    </ul>
               </div>
               <Link to="/about" style={{textDecoration:"none",}}>
                    <BsArrowLeft />
                    <h4 
                         style={{color:"#000", paddingTop:"20px", display: "inline",paddingLeft: "10px"}}>
                         Ko'broq ma'lumot olish
                    </h4>
               </Link>
               <p className='footer_about'>2022 Ilm Dunyoni qutqaradi</p>
          </div>
     )
}

export default Home